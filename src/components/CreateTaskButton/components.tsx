import { Button } from "@mui/material"
import { useCreateTask } from "./hooks"
import { useSuccessSnackbar } from "../SuccessSnackbar/hooks"

export function CreateTaskButton() {
  const { createTask } = useCreateTask()
  const { openSuccessSnackbar } = useSuccessSnackbar()

  function handleClick() {
    createTask()
    openSuccessSnackbar("タスクの作成に成功しました!")
  }

  return (
    <Button variant={"contained"} onClick={handleClick}>
      作成
    </Button>
  )
}