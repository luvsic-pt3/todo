import { Button } from "@mui/material"
import { useEditTask } from "./hooks"
import { Task } from "~/src/types/task"
import { useSuccessSnackbar } from "../SuccessSnackbar/hooks"

interface EditTaskProps {
  task: Task
}

export function EditTaskButton({ task }: EditTaskProps) {
  const { editTask } = useEditTask()
  const { openSuccessSnackbar } = useSuccessSnackbar()

  async function handleClick() {
    await editTask(task)
    openSuccessSnackbar("タスクの編集に成功しました!")
  }

  return (
    <Button variant={"contained"} onClick={handleClick}>
      編集
    </Button>
  )
}