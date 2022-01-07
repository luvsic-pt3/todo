import { TextField } from "@mui/material"
import { useTaskTitle } from "./hooks"

export function TaskTitleForm() {
  const { taskTitle, changeTaskTitle } = useTaskTitle()

  const handleChange = ((event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    changeTaskTitle(event.target.value)
  })

  return (
    <TextField
      required
      label="タイトル"
      sx={{ width: "400px" }}
      value={taskTitle}
      onChange={handleChange}
    />
  )
}