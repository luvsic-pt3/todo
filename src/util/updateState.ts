import { Dispatch, SetStateAction } from "react"
import { Draft, produce } from "immer"
import { SetterOrUpdater } from "recoil"

export function updateState<State>(
  setState: SetterOrUpdater<State> | Dispatch<SetStateAction<State>>,
  update: (draft: Draft<State>) => void,
) {
  setState((currVal) => {
    return produce(currVal, (draft: Draft<State>) => {
      return update(draft)
    })
  })
}
