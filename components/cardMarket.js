import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';

import AvatarChip from './avatarChip';
import UsedInTasks from './usedInTask';

export default function CardMarket({items}) {

  return (
    <>
        {items.map(({ name, iconLink, sellFor, link, usedInTasks }) => (        
            <Grid item xs={4}>
                <Card variant="outlined">
                    <CardContent>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                                {name}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Box display="flex" justifyContent="flex-end">
                                <img src={iconLink}></img>
                            </Box>
                        </Grid>
                        {sellFor.map(({price, source}) => (   
                            <Grid item xs={4}>
                                <AvatarChip trader={source} price={price.toLocaleString()}/>   
                            </Grid>                                 
                        ))}
                        {
                            usedInTasks.length > 0 ? 
                            <Grid item xs={12}>
                                <UsedInTasks tasks={usedInTasks}/>
                            </Grid> 
                            : ''
                        }       
                        </Grid>                 
                    </CardContent>
                </Card>
            </Grid>
        ))}    
    </>
  );
}
