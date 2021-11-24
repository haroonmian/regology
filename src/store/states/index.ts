import type { InitialStateType } from "../../types/Store";

const initialState: InitialStateType = {
  cards: [],
  statuses: [],
  filteredcards: [],
  filters: {
    search: '',
    epic: [],
    assignee: []
  },
  epicOptions: [],
  assigneeOptions: [],
  loader: false
};

export default initialState;
