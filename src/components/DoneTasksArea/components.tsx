import { Box, Typography } from "@mui/material"
import { useRecoilValue } from "recoil"
import { tasksAtom } from "~/src/state/task"
import { Status } from "~/src/types/task"
import { TasksList } from "../TasksList/components"

export function DoneTasksArea() {
  const tasks = useRecoilValue(tasksAtom)
  const doingTasks = tasks.filter((task) => task.status === Status.DONE)

  return (
    <Box bgcolor={"whitesmoke"} borderRadius={"5px"} padding={"10px"}>
      <Typography variant="h5">Done</Typography>
      <TasksList tasks={doingTasks} />
    </Box>
  )
}