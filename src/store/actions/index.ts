import { Action } from "../../constents/actions";
import type {
  ActionType,
  Epic,
  Assignee,
} from "../../types/Store";
import * as apis from "../../apis";
import * as helper from "../../helper"

export const onLoad = (payload: boolean): ActionType => ({
  type: Action.SET_LOADER,
  payload: payload,
});

export const onLoadData = async () => {
  let response = await apis.cardApi();
  let epicOptions = helper.arrayUnique(response.map((card) => card.epic), 'title')
  let assigneeOptions = helper.arrayUnique(response.map((card) => card.assignee), 'name')

  return {
    type: Action.LOAD_DATA,
    payload: {
      cards: response,
      epicOptions: epicOptions,
      assigneeOptions: assigneeOptions
    },
  };
};

export const onGetStatus = async () => {
  let response = await apis.getStatusApi()
  return {
    type: Action.SET_STATUSES,
    payload: response
  }
}

export const onSearchFilter = (keywords: string): ActionType => ({
  type: Action.SET_SEARCHFILTER,
  payload: keywords,
});

export const onEpicFilter = (value: Epic[]): ActionType => ({
  type: Action.SET_EPICFILTER,
  payload: value,
});

export const onUsersFilter = (value: Assignee[]): ActionType => ({
  type: Action.SET_ASSIGNEEFILTER,
  payload: value,
});

export const onFilterClear = (): ActionType => ({
  type: Action.CLEAR_FILER,
  payload: null,
});
