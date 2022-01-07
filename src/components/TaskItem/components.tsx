import { Card, CardHeader, IconButton, Menu, MenuItem } from "@mui/material"
import { MoreVert as MoreVertIcon } from "@mui/icons-material"
import { Task } from "~/src/types/task"
import dayjs, { Dayjs } from "dayjs"
import { useState } from "react"
import { useRouter } from "next/router"
import { useDeleteTaskConfirmModal } from "../DeleteTaskConfirmModal/hooks"
import { useSetRecoilState } from "recoil"
import { deleteTaskIdAtom } from "~/src/state/task"
import {updateState} from "~/src/util/updateState";

interface TaskItemProps {
  task: Task
}

export function TaskItem({ task }: TaskItemProps) {
  const [anchorEl, setAnchorEl] = useState(null)
  const { openConfirmModal } = useDeleteTaskConfirmModal()
  const setDeleteTaskId = useSetRecoilState(deleteTaskIdAtom)

  const deadline = task.deadline ? dayjs(task.deadline).format("YYYY-MM-DD") : ''
  const router = useRouter()

  function handleClick(event: any) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  function handleEditButtonClick() {
    router.push(`/tasks/${task.id}/edit`)
  }

  function handleDeleteButtonClick() {
    updateState(setDeleteTaskId, (draft) => {
      draft.taskId = task.id
    })
    openConfirmModal()
    setAnchorEl(null)
  }

  return (
    <Card sx={{ backgroundColor: cardBackGroundColor(task.deadline) }}>
      <CardHeader title={task.title} subheader={`期限: ${deadline}`} action={
        <IconButton>
          <MoreVertIcon onClick={handleClick} />
        </IconButton>}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleEditButtonClick}>編集</MenuItem>
        <MenuItem onClick={handleDeleteButtonClick}>削除</MenuItem>
      </Menu>
    </Card>
  )
}

function cardBackGroundColor(deadline?: Dayjs | null) {
  if (dayjs(deadline).diff(dayjs(), "day") < 1) {
    return "#F24405"
  }
  if (dayjs(deadline).diff(dayjs(), "day") < 3) {
    return "#F2B705"
  } else {
    return ""
  }
}
