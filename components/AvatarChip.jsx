import React from "react";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

export default function AvatarChip({ trader, price, color }) {
  const source = `../images/${trader}.webp`;

  return (
    <>
      <Chip
        avatar={<Avatar src={source} />}
        label={`${trader == "peacekeeper" ? "$" : "₽"} ${price}`}
        variant="outlined"
        color={color}
      />
    </>
  );
}
