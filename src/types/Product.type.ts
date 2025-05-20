export type ProductType = {
  id: number;
  name: string;
  price: number;
  offerFrom?: number;
  description: string;
  brand: string;
  image: string;
  rating: number;
  seeAllUrl: string;
  caracteristics: Array<{
    name: string;
    value: string;
  }>;
};
