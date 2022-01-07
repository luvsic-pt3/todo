import { Box, Grid } from "@mui/material"
import { DeleteTaskConfirmModal } from "../components/DeleteTaskConfirmModal/components"
import { DoingTasksArea } from "../components/DoingTasksArea/components"
import { DoneTasksArea } from "../components/DoneTasksArea/components"
import { Header } from "../components/Header/components"
import { TodoTasksArea } from "../components/TodoTasksArea/components"

export default function Home() {
  return (
    <>
      <Header />
      <Box height={"65px"} />
      <Grid container>
        <Grid item xs={4} sx={{ padding: "10px" }}>
          <TodoTasksArea />
        </Grid>
        <Grid item xs={4} sx={{ padding: "10px" }}>
          <DoingTasksArea />
        </Grid>
        <Grid item xs={4} sx={{ padding: "10px" }}>
          <DoneTasksArea />
        </Grid>
      </Grid>
      <DeleteTaskConfirmModal />
    </>
  )
}
