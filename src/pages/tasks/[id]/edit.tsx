import { Box } from "@mui/material"
import { useRouter } from "next/router"
import { RecoilRoot, useRecoilValue } from "recoil"
import { EditTask } from "~/src/components/EditTask/components"
import { Header } from "~/src/components/Header/components"
import { initializeEditTaskState, tasksAtom } from "~/src/state/task"
import { Task } from "~/src/types/task"

export default function EditTaskPage() {
  const router = useRouter()
  const { id } = router.query
  const tasks = useRecoilValue(tasksAtom)

  if (!router.isReady || !id) {
    return null
  }
  
  const targetTask = tasks.find((task: Task) => task.id.toString() === id.toString())

  if (!targetTask) {
    return <></>
  }

  return (
    <RecoilRoot
      initializeState={initializeEditTaskState(targetTask.title, targetTask.deadline, targetTask.status)}
    >
      <Header />
      <Box height={"80px"} />
      <EditTask task={targetTask} />
    </RecoilRoot>
  )
}
