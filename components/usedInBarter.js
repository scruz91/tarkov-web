import React from "react";
import Typography from "@mui/material/Typography";

export default function UsedInBarter({ bartersUsing }) {
  return (
    <React.Fragment>
      {bartersUsing.map(({ level, rewardItems, trader }) =>
        rewardItems.map(({ item }) => (
          <Typography
            key={item.name}
            sx={{ fontSize: 14 }}
            color="text.primary"
            gutterBottom
          >
            {item.name} - {trader.name} [{level}]
          </Typography>
        ))
      )}
    </React.Fragment>
  );
}
