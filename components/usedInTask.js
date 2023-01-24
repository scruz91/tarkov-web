import React from "react";
import Link from "next/link";
import Typography from "@mui/material/Typography";

export default function UsedInTasks({ tasks }) {
  return (
    <>
      {tasks.map(({ name, trader, wikiLink, minPlayerLevel }) => (
        <Typography
          key={name}
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          <Link href={wikiLink}>
            {name} - {trader.name} [{minPlayerLevel}]
          </Link>
        </Typography>
      ))}
    </>
  );
}
