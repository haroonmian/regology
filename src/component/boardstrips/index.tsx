import React from "react";
import { Grid } from "@mui/material";
import BoardCard from "../card";
import type { CardType, StatusesType } from "../../types/Store";

interface Props {
    cards: CardType[],
    status: StatusesType
}

const BoardStrips: React.FC<Props> = ({ cards, status }) => {
  return (
    <label style={{ marginTop: "2rem" }}>
      {status.label}
      <Grid
        height="550px"
        margin="0 1rem 0 0"
        xs="auto"
        style={{ background: "rgb(244, 245, 247)" }}
        container
      >
        <BoardCard {...cards} />
      </Grid>
    </label>
  );
};

export default BoardStrips;
