import React from "react";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import LoadingButton from "@mui/lab/LoadingButton";
import CardMarket from "../components/cardMarket";
import Layout, { siteTitle } from "../components/layout";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { yellow } from "@mui/material/colors";

export default function Home() {
  const [itemName, setItemName] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const getItemByName = async () => {
    try {
      setLoading(true);
      await axios
        .get(`http://localhost:5000/api/market/${itemName}`)
        .then((res) => {
          const data = res.data;
          setLoading(false);
          setResults(data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      getItemByName();
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
              <IconButton onClick={handleClear}>
                <ClearIcon fontSize="small" />
              </IconButton>
            ),
          }}
        />
        <LoadingButton
          loading={loading}
          loadingPosition="start"
          startIcon={<LocationSearchingIcon sx={{ color: yellow[700] }} />}
          size="large"
          onClick={getItemByName}
        />
      </Box>
      <Grid container spacing={1}>
        <CardMarket items={results} />
      </Grid>
    </Layout>
  );
}
