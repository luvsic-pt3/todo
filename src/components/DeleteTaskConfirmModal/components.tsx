import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { Delete as DeleteIcon } from "@mui/icons-material"
import { useDeleteTaskConfirmModal } from "./hooks"
import { useRecoilValue } from "recoil"
import { snackBarAtom } from "~/src/state/snackbar"
import { SuccessSnackbar } from "../SuccessSnackbar/components"
import { useSuccessSnackbar } from "../SuccessSnackbar/hooks"

export function DeleteTaskConfirmModal() {
  const { open, message } = useRecoilValue(snackBarAtom)
  const { opened, closeConfirmModal, deleteTask } = useDeleteTaskConfirmModal()
  const { openSuccessSnackbar } = useSuccessSnackbar()

  async function handleSubmitButtonClick() {
    await deleteTask()
    closeConfirmModal()
    openSuccessSnackbar("タスクの削除に成功しました!")
  }

  function handleCancelButtonClick() {
    closeConfirmModal()
  }

  function handleCloseButtonClick() {
    closeConfirmModal()
  }

  return (
    <>
      <Dialog
        open={opened}
        disableRestoreFocus
        onClose={handleCloseButtonClick}
      >
        <DialogTitle>{"タスクの削除"}</DialogTitle>
        <DialogContent>{"本当に削除してもよろしいですか？"}</DialogContent>
        <DialogActions>
          <Button onClick={handleCancelButtonClick} autoFocus>
            キャンセル
          </Button>
          <Button
            color={"error"}
            variant={"outlined"}
            startIcon={<DeleteIcon />}
            onClick={handleSubmitButtonClick}
          >
            削除する
          </Button>
        </DialogActions>
      </Dialog>
      <SuccessSnackbar open={open} message={message} />
    </>
  )
}
