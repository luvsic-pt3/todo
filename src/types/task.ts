import { Dayjs } from "dayjs"

export interface Task {
  id: number
  title: string
  status: Status
  deadline: Dayjs | null
}

export enum Status {
  TODO = "TODO",
  DOING = "DOING",
  DONE = "DONE"
}
