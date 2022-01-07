//---------------------------------------------------------------------------
// スナックバー

import { atom } from "recoil"

//---------------------------------------------------------------------------
interface SnackBarAtom {
  open: boolean
  message: string
}
      
export const snackBarAtom = atom<SnackBarAtom>({
	key: "snackbar",
	default: {
    open: false,
    message: ""
	},
})
