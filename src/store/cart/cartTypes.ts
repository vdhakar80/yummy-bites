export interface CartItemType {
  itemId: string;
  itemName: string;
  itemPrice: string;
  itemQuantity: number;
  itemImg: string;
  itemDescription: string;
}
export interface CartObjectType {
  cart: CartItemType[];
}

export interface UpdateItemType {
  itemId: string;
  itemQuantity: number;
}
