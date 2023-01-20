import Head from 'next/head';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

import CardMarket from '../components/cardMarket';
import Layout, { siteTitle } from '../components/layout';
import SearchHistory from '../components/searchHistory';


export default function Home() {

  const [itemName, setItemName] = useState("");
  const [results, setResults] = useState([]);
  var history = [];

  const getItemByName = async () => {
		try {
			const res = await fetch(
				`http://localhost:5000/api/market/${itemName}`
			);
			const data = await res.json();
      history.push(itemName);
      console.log(history)
      setResults(data)
		} catch (err) {
			console.log(err);
		}
	};

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth size="small" id="outlined-basic" label="Item" variant="outlined" value={itemName} onChange={(e) => setItemName(e.target.value)}/>            
          </Grid>
          <Grid item xs={6}>
            <IconButton aria-label="search" onClick={getItemByName}>
              <SendIcon color="primary"/>
            </IconButton>
          </Grid>        
          <CardMarket items={results} />      
          <SearchHistory history={history} />
      </Grid>      
    </Layout>
  );
}
