export class Task {
  id: string = "2132eds";
  title: string = "title";
  status: string = "completed";
  man_hour_min: string = "12";
  from: string = "23";
  to: string = "13";
  priority: string = "high";
  created_at: string = "12";
  updated_at: string = "12";
  type: string = "mtg";
}

export class TaskStore {
  id: string = "2132eds";
  title: string = "title";
  status: string = "completed";
  man_hour_min: string = "12";
  from_date: string = "23";
  to_date: string = "13";
  priority: string = "high";
  created_at: string = "12";
  updated_at: string = "12";
  type: string = "mtg";
  project_id: string = "";
  user_id: string = "";
}

export class GetProject {
  id: string = "2132eds";
  title: string = "title";
  status: string = "completed";
  total_man_hour_min: string = "12";
  from: string = "23";
  to: string = "13";
  priority: string = "high";
  created_at: string = "12";
  updated_at: string = "12";
  type: string = "mtg";
  tasks: Task[] = [];
}

export class AddTask {
  title: string = "title";
  status: string = "completed";
  man_hour_min: string = "12";
  from_date: string = "23";
  to_date: string = "13";
  priority: string = "high";
  type: string = "mtg";
  project_id = "";
  user_id = "";
}
