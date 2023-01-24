import React from "react";
import Typography from "@mui/material/Typography";

export default function UsedInCraft({ craftsUsing }) {
  return (
    <>
      {craftsUsing.map(({ level, rewardItems, station }) =>
        rewardItems.map(({ item }) => (
          <Typography
            key={item.name}
            sx={{ fontSize: 14 }}
            color="text.primary"
            gutterBottom
          >
            {item.name} - {station.name} [{level}]
          </Typography>
        ))
      )}
    </>
  );
}
