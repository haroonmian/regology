import { Action } from '../constents/actions'

//State type

export interface Assignee {
  id: number;
  name: string;
}

export interface Reporter extends Assignee {}

export interface Epic {
  id: number;
  title: string;
}

export interface Filters {
  search: string,
  epic: Epic[],
  assignee: Assignee[]
}

export interface StatusType {
  id: number,
  label: string
}

export interface CardType {
  id: number
  title: string
  description: string
  type: number
  status: StatusType
  assignee: Assignee
  reporter: Reporter
  epic: Epic
}

export interface InitialStateType {
  cards: CardType[]
  statuses: StatusType[]
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
