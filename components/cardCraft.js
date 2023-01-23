import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function CardCraft({ craftsUsing }) {
  return (
    <>
      <Grid container spacing={1}>
        {craftsUsing.map(({ level, rewardItems, station }) => (
          <Grid item xs={12}>
            {rewardItems.map(({ item }) => (
              <Typography
                sx={{ fontSize: 14 }}
                color="text.primary"
                gutterBottom
              >
                {item.name} - {station.name} - {level}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>
    </>
  );
}
