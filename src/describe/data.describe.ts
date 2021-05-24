export interface ILog {
  id: number;
  from: string;
  to: string;
  note: string | null;
  taskId: number;
  logged: boolean;
}

export interface ITask {
  id: number;
  name: string;
  link: string;
}
