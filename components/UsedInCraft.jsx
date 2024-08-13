import React from "react";
import Typography from "@mui/material/Typography";
import { useNotificationContext } from "@context/notification.jsx";

export default function UsedInCraft({ craftsUsing }) {
  // eslint-disable-next-line  no-unused-vars
  const [state, dispatcher] = useNotificationContext();
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
