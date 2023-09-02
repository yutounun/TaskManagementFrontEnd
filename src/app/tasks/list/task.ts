export interface Project {
  id: string;
  title: string;
}

export class GetTask {
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
  project: Project = {
    id: "erf34fc",
    title: "Nomikan",
  };
}
