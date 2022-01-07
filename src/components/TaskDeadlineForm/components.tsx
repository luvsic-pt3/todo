import { DatePicker } from "@mui/lab"
import { TextField } from "@mui/material"
import { Dayjs } from "dayjs"
import { useTaskDeadline } from "./hooks"

export function TaskDeadlineForm() {
  const { taskDeadline, changeTaskDeadline } = useTaskDeadline()

  const handleChange = (newValue: Dayjs | null) => {
    changeTaskDeadline(newValue);
  }

  return (
    <DatePicker
      label="期限"
      inputFormat="YYYY/MM/DD"
      value={taskDeadline}
      disablePast
      InputProps={{ sx: { width: "400px" } }}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} />}
    />
  )
}