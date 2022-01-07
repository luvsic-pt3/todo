import { Box, Typography } from "@mui/material"
import { useRecoilValue } from "recoil"
import { tasksAtom } from "~/src/state/task"
import { Status } from "~/src/types/task"
import { TasksList } from "../TasksList/components"

export function DoingTasksArea() {
  const tasks = useRecoilValue(tasksAtom)
  const doingTasks = tasks.filter((task) => task.status === Status.DOING)

  return (
    <Box bgcolor={"whitesmoke"} borderRadius={"5px"} padding={"10px"}>
      <Typography variant="h5">Doing</Typography>
      <TasksList tasks={doingTasks} />
    </Box>
  )
}
