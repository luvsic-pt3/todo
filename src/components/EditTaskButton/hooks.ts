import { useRecoilState, useRecoilValue } from "recoil"
import { taskDeadlineDateAtom, tasksAtom, taskStatusAtom, taskTitleAtom } from "~/src/state/task"
import { Task } from "~/src/types/task"

export function useEditTask() {
  const taskTitle = useRecoilValue(taskTitleAtom)
  const taskDeadline = useRecoilValue(taskDeadlineDateAtom)
  const taskStatus = useRecoilValue(taskStatusAtom)
  const [tasks, setTasks] = useRecoilState(tasksAtom)

  async function editTask(targetTask : Task)  {
    const index = tasks.findIndex((task: Task) => task.id === targetTask.id)
    const newTasks = replaceItemAtIndex(tasks, index, {
      ...targetTask,
      title: taskTitle.inputValue,
      deadline: taskDeadline.inputDate,
      status: taskStatus.status,
    })

    setTasks(newTasks)
  }

  return {
    editTask: editTask,
  }
}

function replaceItemAtIndex(arr: Task[], index: number, newValue: Task) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
