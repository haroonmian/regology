import { Action } from '../constents/actions'

//State type

export interface Assignee {
  id: number;
  name: string;
}

export interface Reporter extends Assignee {}

export interface Epic {
  id: 1;
  title: "";
}

export interface CardType {
  id: number
  title: string
  description: string
  type: number
  status: number
  assignee: Assignee
  reporter: Reporter
  epic: Epic
}

export interface Filters {
  search: string,
  epic: Epic[],
  assignee: Assignee[]
}

export interface StatusesType {
  code: number,
  label: string
}

export interface InitialStateType {
  cards: CardType[]
  statuses: StatusesType[]
  filteredcards: CardType[]
  filters: Filters
  epicOptions: Epic[]
  assigneeOptions: Assignee[]
  loader: boolean
}

//Actions

export interface ActionType {
    type: Action
    payload: any
}
