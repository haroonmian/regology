import React, { useContext, useEffect } from "react"
import Header from "../../component/header"
import { Container, Grid } from "@mui/material"
import { Context } from "../../store"
import * as actions from "../../store/actions"
import Board from "../../component/board"

interface Props {}

const Home: React.FC<Props> = () => {
  const [state, dispatch] = useContext(Context)

  useEffect(() => {
    (async () => {
      dispatch(actions.onLoad(true))
      dispatch(await actions.onLoadData())
      dispatch(await actions.onGetStatus())
      dispatch(actions.onLoad(false))
    })()
  }, [])

  console.log(state)

  return (
    <Container style={{ padding: "2rem", margin: 0, maxWidth: "100%" }}>
      <Grid item xs={12}>
        <Header
          epicOptions={state.epicOptions}
          assigneeOptions={state.assigneeOptions}
          filters={state.filters}
          dispatch={dispatch}
        />
      </Grid>
      <Grid container xs={12}>
        <Board cards={state.cards} statuses={state.statuses} />
      </Grid>
    </Container>
  );
}

export default Home
