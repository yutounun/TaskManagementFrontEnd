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
  from_date: Date = new Date();
  to_date: Date = new Date();
  priority: string = "";
  created_at: string = "";
  updated_at: string = "";
  type: string = "";
  project_id: string = "";
}

export class GetProjectResponse {
  id: string = "";
  title: string = "";
  status: string = "";
  total_man_hour_min: string = "";
  from_date: Date = new Date();
  to_date: Date = new Date();
  priority: string = "";
  created_at: string = "";
  updated_at: string = "";
  type: string = "";
  tasks: GetTaskByIdResponse[] = [];
}

export const MockGetTasksResponse = [
  {
    id: "1",
    title: "Task1",
    status: "Not Started",
    man_hour_min: 10,
    from_date: new Date().toISOString(),
    to_date: new Date().toISOString(),
    priority: "urgent",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    type: "mtg",
  },
];
export const MockGetProjectResponse = [
  {
    id: "1",
    title: "Project1",
    status: "Not Started",
    total_man_hour_min: "0",
    from_date: new Date(),
    to_date: new Date(),
    priority: "critical",
    created_at: "",
    updated_at: "",
    type: "",
    tasks: [
      {
        id: "1",
        title: "Task 1",
        status: "Not Started",
        man_hour_min: 0,
        from_date: new Date(),
        to_date: new Date(),
        priority: "critical",
      },
    ],
  },
  {
    id: "2",
    title: "Project2",
    status: "Not Started",
    total_man_hour_min: "0",
    from_date: new Date(),
    to_date: new Date(),
    priority: "critical",
    created_at: "",
    updated_at: "",
    type: "",
    tasks: [
      {
        id: "1",
        title: "Task 1",
        status: "Not Started",
        man_hour_min: 0,
        from_date: new Date(),
        to_date: new Date(),
        priority: "critical",
      },
    ],
  },
];

export class CreateUpdateProjectResponse {
  title: string = "";
  status: string = "";
  type: string = "";
  priority: string = "";
  man_hour_min: string = "";
  from_date: Date = new Date();
  to_date: Date = new Date();
  project_id: string = "";
  user_id: string = "";
}

export class TaskStore {
  id: string = "";
  title: string = "";
  status: string = "";
  man_hour_min: number = 0;
  from_date: Date = new Date();
  to_date: Date = new Date();
  priority: string = "";
  created_at: string = "";
  updated_at: string = "";
  type: string = "";
  project_id: string = "";
  user_id: string = "";
}
