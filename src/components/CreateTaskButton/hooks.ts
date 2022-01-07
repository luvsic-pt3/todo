import { useRecoilValue, useSetRecoilState } from "recoil"
import { taskDeadlineDateAtom, tasksAtom, taskTitleAtom } from "~/src/state/task"
import { Status, Task } from "~/src/types/task"

export function useCreateTask() {
  const taskTitle = useRecoilValue(taskTitleAtom)
  const taskDeadline = useRecoilValue(taskDeadlineDateAtom)
  const setTask = useSetRecoilState(tasksAtom)

  function createTask() {
    setTask((currVal) => [
      ...currVal,
      {
        id: getId(currVal),
        title: taskTitle.inputValue,
        deadline: taskDeadline.inputDate!,
        status: Status.TODO,
      }
    ])
  }

  return {
    createTask: createTask,
  }
}

function getId(currVal: Task[]) {
  if (currVal.length == 0) {
    return 1
  }

  return Math.max.apply(null,currVal.map((task: Task)=>{return task.id})) + 1
}