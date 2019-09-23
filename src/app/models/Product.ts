export interface Product {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    alternative?: string;
    isAvailable: boolean;
    price: number;
}
