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

import CardMarket from "../components/cardMarket";
import Layout, { siteTitle } from "../components/layout";

import { getItemByName } from "../lib/item";

export default function Home() {
  const [itemName, setItemName] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const callGetItemByName = async () => {
    setIsLoading(true);
    const data = await getItemByName(itemName);
    setResults(data);
    setIsLoading(false);
  };

  const handleKeypress = (e) => {
    if (!isLoading) {
      if (e.keyCode === 13) {
        callGetItemByName();
      }
    }
  };

  const handleClear = () => {
    setItemName("");
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
              <IconButton disabled={isLoading} onClick={handleClear}>
                <ClearIcon fontSize="small" />
              </IconButton>
            ),
          }}
        />
        <LoadingButton
          loading={isLoading}
          loadingPosition="start"
          startIcon={
            <LocationSearchingIcon sx={{ color: "text.secondary.main" }} />
          }
          size="large"
          onClick={callGetItemByName}
        />
      </Box>
      <Grid container spacing={1}>
        <CardMarket items={results} />
      </Grid>
    </Layout>
  );
}
