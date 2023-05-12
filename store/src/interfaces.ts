export interface IButton {
    routeName: string;
    buttonName: string;
}

export interface IClothes {
    id: string;
    name: string;
    price: number;
    description: string;
    type: string;
    sex: string;
    imageUrl: string;
    altName: string;
}

export interface IProductContainer {
    name: string;
    imageLink: string;
    altName: string;
    price: number;
    description: string;
}

export interface IProductForGrid {
    name: string;
    imageLink: string;
    altName: string;
    price: number;
}