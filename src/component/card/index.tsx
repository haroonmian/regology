import React from "react"
import { Card, Grid } from "@mui/material"
import type { CardType } from "../../types/Store"

const BoardCard: React.FC<CardType[]> = () => {
  return (
    <Grid width="300px" item>
      <Card style={{ padding: "1rem", margin: "1rem" }}>
          <Grid container style={{ padding: "1rem 0" }} xs={12}>
              Title
          </Grid>
          <Grid container xs={12}>
              <Grid container xs={6}>
                Type
              </Grid>
              <Grid container justifyContent="flex-end" xs={6}>
                Assigned To
              </Grid>
          </Grid>
      </Card>
    </Grid>
  );
};

export default BoardCard
