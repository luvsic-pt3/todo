import { useRecoilState } from "recoil"
import { taskStatusAtom } from "~/src/state/task"
import { Status } from "~/src/types/task"
import { updateState } from "~/src/util/updateState"

export function useTaskStatus() {
  const [state, setState] = useRecoilState(taskStatusAtom)

  function changeTaskStatus(status: Status) {
    updateState(setState, (draft) => {
      draft.status = status
    })
  }

  return {
    taskStatus: state.status,
    changeTaskStatus: changeTaskStatus,
  }
}