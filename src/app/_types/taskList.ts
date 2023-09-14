export class Options {
  label: string = "";
  value: string = "";
}

/**
 * Mainly used in Project Response
 */
export class GetTaskByIdResponse {
  id: string = "";
  title: string = "";
  status: string = "";
  man_hour_min: number = 0;
  from_date: string = "";
  to_date: string = "";
  priority: string = "";
  created_at: string = "";
  updated_at: string = "";
  type: string = "";
}

export class GetProjectResponse {
  id: string = "";
  title: string = "";
  status: string = "";
  total_man_hour_min: string = "";
  from: string = "";
  to: string = "";
  priority: string = "";
  created_at: string = "";
  updated_at: string = "";
  type: string = "";
  tasks: GetTaskByIdResponse[] = [];
}

export class CreateUpdateProjectResponse {
  title: string = "";
  status: string = "";
  type: string = "";
  priority: string = "";
  man_hour_min: string = "";
  from_date: string = "";
  to_date: string = "";
  project_id: string = "";
  user_id: string = "";
}

export class TaskStore {
  id: string = "";
  title: string = "";
  status: string = "";
  man_hour_min: string = "";
  from_date: string = "";
  to_date: string = "";
  priority: string = "";
  created_at: string = "";
  updated_at: string = "";
  type: string = "";
  project_id: string = "";
  user_id: string = "";
}
