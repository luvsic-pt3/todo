import { Grid } from "@mui/material"
import { TaskItem } from "../TaskItem/components"
import { Task } from "~/src/types/task"

interface TasksListProps {
  tasks: Task[]
}

export function TasksList({ tasks }: TasksListProps) {
  return (
    <Grid container direction={"column"} spacing={1}>
      {tasks.map((task) => {
        return (
          <Grid item key={task.id}>
            <TaskItem task={task} />
          </Grid>
        )
      })
      }
    </Grid>
  )
}
