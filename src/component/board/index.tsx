import { Container, Grid } from "@mui/material"
import React from "react"
import BoardStrips from "../boardstrips"
import type { CardType, StatusType } from "../../types/Store"

interface Props {
    cards: CardType[],
    statuses: StatusType[]
}

const Board: React.FC<Props> = ({ cards, statuses }) => {
    console.log(statuses)
    return (
      <Grid wrap="nowrap" overflow="auto" width="1300px" container>
        {statuses.map((status, index) => 
            <BoardStrips key={index} cards={cards} status={status} />
        )}
      </Grid>
    );
}

export default Board