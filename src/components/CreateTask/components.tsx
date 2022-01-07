import { Grid } from "@mui/material";
import { useRecoilValue } from "recoil";
import { snackBarAtom } from "~/src/state/snackbar";
import { CreateTaskButton } from "../CreateTaskButton/components";
import { SuccessSnackbar } from "../SuccessSnackbar/components";
import { TaskDeadlineForm } from "../TaskDeadlineForm/components";
import { TaskTitleForm } from "../TaskTitleForm/components";

export function CreateTask() {
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
          <CreateTaskButton />
        </Grid>
      </Grid>
      <SuccessSnackbar open={open} message={message} />
    </>
  )
}