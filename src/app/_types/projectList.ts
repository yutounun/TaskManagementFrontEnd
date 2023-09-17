export interface getProjectParams {
  title: string;
}

export class ProjectStore {
  id: string = "";
  title: string = "";
  status: string = "";
  from_date: Date = new Date();
  to_date: Date = new Date();
}
