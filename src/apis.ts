export const cardApi = () => {
  return Promise.resolve([
      {
        id: 1,
        title: "Create Admin",
        description: "",
        type: 1,
        status: 1,
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
        status: 2,
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

export const getStatusApi = () => {
  return Promise.resolve([
      {
        code: 1,
        label: "Todo"
      },
      {
        code: 2,
        label: "In Progress"
      },
      {
        code: 3,
        label: "Done"
      }
    ]);
};
