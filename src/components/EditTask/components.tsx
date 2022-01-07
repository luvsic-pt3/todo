import { Grid } from "@mui/material";
import { useRecoilValue } from "recoil";
import { snackBarAtom } from "~/src/state/snackbar";
import { Task } from "~/src/types/task";
import { EditTaskButton } from "../EditTaskButton/components";
import { SuccessSnackbar } from "../SuccessSnackbar/components";
import { TaskDeadlineForm } from "../TaskDeadlineForm/components";
import { TaskStatusForm } from "../TaskStatusForm/components";
import { TaskTitleForm } from "../TaskTitleForm/components";

interface EditTaskProps {
  task: Task
}

export function EditTask({ task }: EditTaskProps) {
  const { open, message } = useRecoilValue(snackBarAtom)

  return (
    <>
      <Grid container direction={"column"} spacing={2} alignItems={"center"} >
        <Grid item alignItems={"center"}>
          <TaskTitleForm />
        </Grid>
        <Grid item>
          <TaskDeadlineForm />
        </Grid>
        <Grid item>
          <TaskStatusForm />
        </Grid>
        <Grid item>
          <EditTaskButton task={task} />
        </Grid>
      </Grid>
      <SuccessSnackbar open={open} message={message} />
    </>
  )
}