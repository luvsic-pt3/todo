import { useRecoilState } from "recoil"
import { taskTitleAtom } from "~/src/state/task"
import { updateState } from "~/src/util/updateState"

export function useTaskTitle() {
  const [state, setState] = useRecoilState(taskTitleAtom)

  function changeTaskTitle(taskTitle: string) {
    updateState(setState, (draft) => {
      draft.inputValue = taskTitle
    })
  }

  return {
    taskTitle: state.inputValue,
    changeTaskTitle: changeTaskTitle,
  }
}