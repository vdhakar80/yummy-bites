import { type } from "os";

export const abc = "";
export type ItemListType = {
  _id: string;
  image: string;
  name: string;
  price: string;
  description: string;
  type: string;
  __v: number;
};

export type ItemListInitialStateType = {
  categories: string[];
  itemList: ItemListType[];
};

export interface ItemListAsyncActionType {
  type: string;
  payload: string;
}
