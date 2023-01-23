import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function CardBarter({bartersUsing}) {

  return (
    <>
        <Card variant="outlined">
            <CardContent>
                <Grid container spacing={1}>
                    {bartersUsing.map(({level, rewardItems, trader}) => (   
                        <Grid item xs={12}>   
                        {rewardItems.map(({item}) => (
                            <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                                {item.name} - {trader.name} - {level}
                            </Typography>      
                        ))}    
                        </Grid>                      
                    ))}  
                </Grid>                 
            </CardContent>
        </Card> 
    </>
  );
}
