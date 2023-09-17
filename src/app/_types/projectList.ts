export interface getProjectParams {
  title: string;
}

export class ProjectStore {
  id: string = "";
  title: string = "";
  status: string = "";
  from_date: string = "";
  to_date: string = "";
}
