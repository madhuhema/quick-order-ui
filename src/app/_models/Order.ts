import { OrderItem } from "./OrderItem";

export enum Status {
    placed = "Placed",
    inprogress = "In progress",
    cancelled = "Cancelled",
    completed = "Completed"
}

export interface Order {
    id?: number;
    status: Status;
    items: OrderItem[];
    cost: number;
    table_number: number
    placed_on: Date;
}