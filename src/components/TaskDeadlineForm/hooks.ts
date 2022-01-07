import { Dayjs } from "dayjs"
import { useRecoilState } from "recoil"
import { taskDeadlineDateAtom } from "~/src/state/task"
import { updateState } from "~/src/util/updateState"

export function useTaskDeadline() {
  const [state, setState] = useRecoilState(taskDeadlineDateAtom)

  function changeTaskDeadline(taskDeadline: Dayjs | null) {
    updateState(setState, (draft) => {
      draft.inputDate = taskDeadline
    })
  }

  return {
    taskDeadline: state.inputDate,
    changeTaskDeadline: changeTaskDeadline,
  }
}