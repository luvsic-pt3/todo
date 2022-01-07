import { updateState } from "~/src/util/updateState"
import { useSetRecoilState } from "recoil"
import { snackBarAtom } from "~/src/state/snackbar"

export function useSuccessSnackbar() {
  const setState = useSetRecoilState(snackBarAtom)

  function openSuccessSnackbar(message: string) {
    updateState(setState, (draft) => {
      draft.open = true
      draft.message = message
    })
  }

  function closeSuccessSnackbar() {
    updateState(setState, (draft) => {
      draft.open = false
      draft.message = ""
    })
  }

  return {
    openSuccessSnackbar: openSuccessSnackbar,
    closeSuccessSnackbar: closeSuccessSnackbar,
  }
}
