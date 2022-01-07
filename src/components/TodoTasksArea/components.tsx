import { Box, Typography, Button } from "@mui/material"
import { TasksList } from "../TasksList/components"
import { Add as AddIcon } from "@mui/icons-material"
import { useRecoilValue } from "recoil"
import { tasksAtom } from "~/src/state/task"
import { Status } from "~/src/types/task"

export function TodoTasksArea() {
  const tasks = useRecoilValue(tasksAtom)
  const todoTasks = tasks.filter((task) => task.status === Status.TODO)

  return (
    <Box bgcolor={"whitesmoke"} borderRadius={"5px"} padding={"10px"}>
      <Typography variant="h5">To Do</Typography>
      <TasksList tasks={todoTasks} />
      <Button sx={{ color: "gray" }} startIcon={<AddIcon />} href={"/tasks/new"}>
        タスクを追加する
      </Button>
    </Box>
  )
}
