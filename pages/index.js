import Head from 'next/head';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import LoadingButton from '@mui/lab/LoadingButton';


import CardMarket from '../components/cardMarket';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {

  const [itemName, setItemName] = useState("");
  const [results, setResults] = useState([]);  
  const [loading, setLoading] = useState(false)

  const getItemByName = async () => {
		try {
      setLoading(true)
			const res = await fetch(
				`http://localhost:5000/api/market/${itemName}`
			);
			const data = await res.json();   
      console.log(data)
      setLoading(false)       
      setResults(data)
		} catch (err) {
			console.log(err);
		}
	};

  const handleKeypress = e => {
  if (e.keyCode === 13) {
    getItemByName();
  }
};

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField  onKeyUp={handleKeypress} fullWidth size="small" id="outlined-basic" variant="outlined" value={itemName} onChange={(e) => setItemName(e.target.value)}/>            
          </Grid>
          <Grid item xs={6}>
          <LoadingButton
              loading={loading}
              loadingPosition="start"
              startIcon={<LocationSearchingIcon color="primary" />}
              size="large"
              onClick={getItemByName}
            />
          </Grid>        
          <CardMarket items={results} />      
      </Grid>      
    </Layout>
  );
}
