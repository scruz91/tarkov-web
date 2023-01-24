import React from "react";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

export default function AvatarChip(props) {
  const source = `../images/${props.trader}.webp`;

  return (
    <>
      <Chip
        avatar={<Avatar src={source} />}
        label={`${props.trader == "peacekeeper" ? "$" : "₽"} ${props.price}`}
        variant="outlined"
        color={props.color}
      />
    </>
  );
}
