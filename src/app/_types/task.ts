export class Task {
  id: string = "2132eds";
  title: string = "title";
  status: string = "completed";
  manHour: string = "12";
  from: string = "23";
  to: string = "13";
  priority: string = "high";
  createdAt: string = "12";
  updatedAt: string = "12";
  type: string = "mtg";
}

export class GetProject {
  id: string = "2132eds";
  title: string = "title";
  status: string = "completed";
  totalManHour: string = "12";
  from: string = "23";
  to: string = "13";
  priority: string = "high";
  createdAt: string = "12";
  updatedAt: string = "12";
  type: string = "mtg";
  tasks: Task[] = [];
}
