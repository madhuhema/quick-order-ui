export enum ItemType {
    veg = "VEG",
    nonveg = "NON-VEG",
    vegan = "VEGAN"
}

export enum ItemStatus {
    notAvailable = "Not Available",
    available = "Available"
}

export enum ItemSize {
    small = "small",
    medium = "medium",
    regular = "regular",
    large = "large",
    xl = "extra large"
}
export interface Item {
    id?: number;
    name: string;
    description: string;
    price: number;
    cuisine: string;
    type: ItemType;
    status: ItemStatus
    prep_time_in_mins: number;
    size: ItemSize
}