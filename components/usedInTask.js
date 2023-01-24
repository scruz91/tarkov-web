import React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function UsedInTasks({ tasks }) {
  return (
    <>
      {tasks.map(({ name, trader, wikiLink, minPlayerLevel }) => (
        <Typography key={name} sx={{ fontSize: 14 }} gutterBottom>
          <Link href={wikiLink} color="text.secondary.main">
            {name} - {trader.name} [{minPlayerLevel}]
          </Link>
        </Typography>
      ))}
    </>
  );
}
