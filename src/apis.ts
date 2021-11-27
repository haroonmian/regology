import { CardType, StatusType } from "./types/Store";

export const cardApi = (): Promise<CardType[]> => {
  return Promise.resolve([
      {
        id: 1,
        title: "Create Admin",
        description: "",
        type: 1,
        status: {
          id: 1,
          label: "Todo"
        },
        assignee: {
          id: 1,
          name: "Ali",
        },
        reporter: {
          id: 2,
          name: "Devid",
        },
        epic: {
          id: 1,
          title: "Admin",
        },
      },
      {
        id: 1,
        title: "Fix Header",
        description: "",
        type: 1,
        status: {
          id: 2,
          label: "In Progress"
        },
        assignee: {
          id: 2,
          name: "Devid",
        },
        reporter: {
          id: 2,
          name: "Devid",
        },
        epic: {
          id: 2,
          title: "Header",
        },
      },
    ]);
};

export const getStatusApi = (): Promise<StatusType[]> => {
  return Promise.resolve([
      {
        id: 1,
        label: "Todo"
      },
      {
        id: 2,
        label: "In Progress"
      },
      {
        id: 3,
        label: "Done"
      }
    ]);
};
