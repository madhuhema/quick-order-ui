import { Order } from "./Order";

export enum UserStatus {
    occupied = "Occupied",
    idle = "Idle"
}

export enum Role {
    table = "Table",
    admin = "Admin",
    chef = "Chef"
}

export interface User {
    id?: number;
    status: UserStatus;
    name: string;
    role: Role;
    orders: Order[];
    created_at?: Date;
}