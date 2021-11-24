import type {
  InitialStateType,
  ActionType,
  CardType,
  Assignee,
  Epic,
} from "../../types/Store";
import { Action } from "../../constents/actions";
import * as helper from "../../helper"

const reducer = (state: InitialStateType, actions: ActionType) => {
  switch (actions.type) {
    case Action.LOAD_DATA:
      return {
        ...state,
        cards: actions.payload.cards,
        filteredcards: actions.payload.cards,
        epicOptions: actions.payload.epicOptions,
        assigneeOptions: actions.payload.assigneeOptions
      };
    case Action.SET_CARD:
      return {
        ...state,
        cards: actions.payload,
      };
    case Action.SET_SEARCHFILTER:
      var cards: CardType[] = [...state.cards]
      var epicOptions: Epic[] = [...state.epicOptions]
      var assigneeOptions: Assignee[] = [...state.assigneeOptions]

      if (actions.payload) {
        cards = cards.filter((card: CardType) =>
          card.title.toLowerCase().includes(actions.payload.toLowerCase())
        )
      }

      epicOptions = helper.arrayUnique(cards.map((card: CardType) => card.epic), 'title')
      assigneeOptions = helper.arrayUnique(cards.map((card: CardType) => card.assignee), 'name')

      if (state.filters.epic.length) {
        cards = cards.filter((card: CardType) =>
          state.filters.epic.some((epic: Epic) => epic.id === card.epic.id)
        )
      }
      if (state.filters.assignee.length) {
        cards = cards.filter((card: CardType) =>
          state.filters.assignee.some(
            (assignee: Assignee) => assignee.id === card.assignee.id
          )
        )
      }

      return {
        ...state,
        filteredcards: cards,
        filters: {
          ...state.filters,
          search: actions.payload,
        },
        epicOptions: epicOptions,
        assigneeOptions: assigneeOptions
      };
    case Action.SET_EPICFILTER:
      var cards: CardType[] = [...state.cards];
      var assigneeOptions: Assignee[] = [...state.assigneeOptions]

      if (actions.payload.length) {
        cards = cards.filter((card: CardType) => actions.payload.some((epic: Epic) => epic.id === card.epic.id))
      }

      assigneeOptions = helper.arrayUnique(cards.map((card: CardType) => card.assignee), 'name')

      if(state.filters.search) {
        cards = cards.filter((card: CardType) =>
          card.title.toLowerCase().includes(state.filters.search)
        )
      }
      if(state.filters.assignee.length) {
        cards = cards.filter((card: CardType) => state.filters.assignee.some((assignee: Assignee) => assignee.id === card.assignee.id))
      }

      return {
        ...state,
        filteredcards: cards,
        filters: {
          ...state.filters,
          epic: actions.payload,
        },
        assigneeOptions: assigneeOptions
      };
    case Action.SET_ASSIGNEEFILTER:
      var cards: CardType[] = [...state.cards];
      var epicOptions: Epic[] = [...state.epicOptions]

      if (actions.payload.length) {
        cards = cards.filter((card: CardType) => actions.payload.some((assignee: Assignee) => assignee.id === card.assignee.id))
      }

      epicOptions = helper.arrayUnique(cards.map((card: CardType) => card.epic), 'title')

      if(state.filters.search) {
        cards = cards.filter((card: CardType) =>
          card.title.toLowerCase().includes(state.filters.search)
        )
      }
      if(state.filters.epic.length) {
        cards = cards.filter((card: CardType) => state.filters.epic.some((epic: Epic) => epic.id === card.epic.id))
      }

      return {
        ...state,
        filteredcards: cards,
        filters: {
          ...state.filters,
          assignee: actions.payload,
        },
        epicOptions: epicOptions
      };
    case Action.CLEAR_FILER:
      return {
        ...state,
        filters: {
          search: "",
          epic: [],
          assignee: []
        }
      }
    case Action.SET_STATUSES:
      return {
        ...state,
        statuses: actions.payload
      }
    case Action.SET_LOADER:
      return {
        ...state,
        loader: actions.payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
