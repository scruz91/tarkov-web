import React from "react";
import Head from "next/head";
import { useState } from "react";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import ClearIcon from "@mui/icons-material/Clear";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import Alert from "@mui/material/Alert";

import CardMarket from "../components/cardMarket";
import Layout, { siteTitle } from "../components/layout";
import { getItemByName } from "../lib/item";
import { useNotificationContext } from "../context/notification";
import {
  searchHandler,
  errorHandler,
  foundHandler,
  okHandler,
} from "../reducers/apiReducer.js";

export default function Home() {
  const [itemName, setItemName] = useState("");
  const [state, dispatcher] = useNotificationContext();

  const callGetItemByName = async () => {
    searchHandler(dispatcher);
    const response = await getItemByName(itemName);

    if (!response || "error" in response) {
      searchHandler(dispatcher);
      errorHandler(dispatcher);
      return;
    }
    console.log(response.data);
    foundHandler(dispatcher, response.data);
  };

  const handleKeypress = (e) => {
    if (!state.isLoading) {
      if (e.keyCode === 13) {
        callGetItemByName();
      }
    }
  };

  const autoFocus = (input) => {
    if (input) {
      setTimeout(() => {
        input.focus();
      }, 100);
    }
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {state.isError ? (
        <Alert
          severity="error"
          onClose={() => {
            okHandler(dispatcher);
          }}
        >
          El servidor no responde, quizá se cayó.
        </Alert>
      ) : (
        ""
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 1,
        }}
      >
        <TextField
          sx={{ width: "28%" }}
          onKeyUp={handleKeypress}
          size="small"
          id="outlined-basic"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          inputRef={autoFocus}
          InputProps={{
            endAdornment: (
              <IconButton
                disabled={state.isLoading}
                onClick={() => {
                  setItemName("");
                }}
              >
                <ClearIcon fontSize="small" />
              </IconButton>
            ),
          }}
        />
        <LoadingButton
          loading={state.isLoading}
          loadingPosition="start"
          startIcon={
            <LocationSearchingIcon sx={{ color: "text.secondary.main" }} />
          }
          size="large"
          onClick={callGetItemByName}
        />
      </Box>
      <Grid container spacing={1}>
        {state.results ? <CardMarket items={state.results} /> : ""}
      </Grid>
    </Layout>
  );
}
