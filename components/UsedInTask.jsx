import React from "react";
import Typography from "@mui/material/Typography";
import { yellow } from "@mui/material/colors";

export default function UsedInTasks({ tasks }) {
  return (
    <>
      {tasks.map(({ name, trader, wikiLink, minPlayerLevel }) => (
        <Typography key={name} sx={{ fontSize: 14 }} gutterBottom>
          <a
            href={wikiLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: yellow[700], textDecoration: 'none' }} 
          >
            {name} - {trader.name} [{minPlayerLevel}]
          </a>
        </Typography>
      ))}
    </>
  );
}
