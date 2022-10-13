import { Item } from "./Item";
import { Order } from "./Order";

export enum OrderSize {
    small = "small",
    medium = "medium",
    regular = "regular",
    large = "large",
    xl = "extra large"
}

export interface OrderItem {
    // @Column()
    // chefId!: number;
    id?: number;
    preferences: string;
    size: OrderSize;
    quantity: number
    orderId: number;
    itemId: number;
    name: string;
    price: number;
    order: Order;
    item: Item;
}