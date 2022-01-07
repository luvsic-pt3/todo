import { Alert, Snackbar } from "@mui/material"
import { useSuccessSnackbar } from "./hooks"

export interface Props {
  open: boolean
  message: string
}

export function SuccessSnackbar(
  { open, message }: Props) {
  const { closeSuccessSnackbar } = useSuccessSnackbar()
  function handleClose(event?: React.SyntheticEvent | Event, reason?: string) {
    if (reason === 'clickaway') {
      return
    }

    closeSuccessSnackbar()
  }

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}