import { Box } from "@mui/material";
import { CreateTask } from "~/src/components/CreateTask/components";
import { Header } from "~/src/components/Header/components";

export default function NewTaskPage() {
  return (
    <>
      <Header />
      <Box height={"80px"} />
      <CreateTask />
    </>
  )
}
