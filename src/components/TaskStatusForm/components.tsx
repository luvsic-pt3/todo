import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material"
import {Status} from "~/src/types/task"
import {useTaskStatus} from "./hooks";

export function TaskStatusForm() {
  const { taskStatus, changeTaskStatus } = useTaskStatus()
  const handleChange = (event: SelectChangeEvent) => {
    switch (event.target.value){
      case Status.TODO:
        changeTaskStatus(Status.TODO)
        break;
      case Status.DOING:
        changeTaskStatus(Status.DOING)
        break;
      case Status.DONE:
        changeTaskStatus(Status.DONE)
        break;
    }
  }

  return (
    <FormControl fullWidth>
      <InputLabel>ステータス</InputLabel>
      <Select
        value={taskStatus}
        sx={{ width: "400px" }}
        onChange={handleChange}
      >
        <MenuItem value={Status.TODO}>TODO</MenuItem>
        <MenuItem value={Status.DOING}>DOING</MenuItem>
        <MenuItem value={Status.DONE}>DONE</MenuItem>
      </Select>
    </FormControl>
  )
}
