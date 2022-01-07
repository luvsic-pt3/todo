import { useRecoilState, useRecoilValue } from "recoil"
import { deleteTaskIdAtom, tasksAtom } from "~/src/state/task"
import { Task } from "~/src/types/task"
import { useOpenClose } from "~/src/util/useOpenClose"

export function useDeleteTaskConfirmModal() {
  const { opened, open, close } = useOpenClose("DeleteTaskConfirmModal")
  const [tasks, setTasks] = useRecoilState(tasksAtom)
  const targetTaskId = useRecoilValue(deleteTaskIdAtom)
  
  async function deleteTask() {
    const index = tasks.findIndex((task: Task) => task.id === targetTaskId.taskId)
    const newTasks = removeItemAtIndex(tasks, index);

    setTasks(newTasks);
}
  return {
    opened: opened,
    openConfirmModal: open,
    closeConfirmModal: close,
    deleteTask: deleteTask,
  }
}

function removeItemAtIndex(arr: Task[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
