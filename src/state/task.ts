import { Dayjs } from "dayjs"
import { atom, MutableSnapshot, SetRecoilState } from "recoil"
import { Status, Task } from "../types/task"
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

//---------------------------------------------------------------------------
// タスク名
//---------------------------------------------------------------------------
interface TaskTitleAtom {
	inputValue: string
}
      
export const taskTitleAtom = atom<TaskTitleAtom>({
	key: "tasks/taskTitleAtom",
	default: {
	  inputValue: "",
	},
})

export function initializeTaskTitle(set: SetRecoilState, title: string) {
  set(taskTitleAtom, {
    inputValue: title,
  })
}

//---------------------------------------------------------------------------
// タスク期限
//---------------------------------------------------------------------------
interface TaskDeadlineDateAtom {
  inputDate: Dayjs | null
}

export const taskDeadlineDateAtom = atom<TaskDeadlineDateAtom>({
  key: "tasks/taskDeadlineateAtom",
  default: {
    inputDate: null,
  },
})

export function initializeTaskDeadliineDate(
  set: SetRecoilState,
  deadlineDate: Dayjs | null,
) {
  set(taskDeadlineDateAtom, {
    inputDate: deadlineDate,
  })
}

//---------------------------------------------------------------------------
// タスクのステータス
//---------------------------------------------------------------------------
interface TaskStatusAtom {
  status: Status
}

export const taskStatusAtom = atom<TaskStatusAtom>({
  key: "tasks/taskStatusAtom",
  default: {
    status: Status.TODO,
  },
})

export function initializeTaskStatus(
  set: SetRecoilState,
  status: Status,
) {
  set(taskStatusAtom, {
    status: status,
  })
}

//---------------------------------------------------------------------------
// タスクの配列
//---------------------------------------------------------------------------
export const tasksAtom = atom<Task[]>({
  key: "tasks",
  default: [],
  effects_UNSTABLE: [persistAtom]
})

//---------------------------------------------------------------------------
// 各atomの初期化
//---------------------------------------------------------------------------
export function initializeEditTaskState(
  title: string,
  deadlineDate: Dayjs | null,
  status: Status,
) {
  return ({ set }: MutableSnapshot) => {
    initializeTaskDeadliineDate(set, deadlineDate)
    initializeTaskTitle(set, title)
    initializeTaskStatus(set, status)
  }
}

//---------------------------------------------------------------------------
// 削除するタスクID
//---------------------------------------------------------------------------
interface DeleteTaskIdAtom {
  taskId: number | null
}

export const deleteTaskIdAtom = atom<DeleteTaskIdAtom>({
  key: "deleteTask",
  default: {
    taskId: null
  }
})
