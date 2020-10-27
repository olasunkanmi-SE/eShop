export interface Product {
  user: string;
  name: string;
  image: string;
  brand: string;
  category: string;
  description: string;
  rating: number;
  reviews?: any[];
  numReviews?: number;
  price: number;
  countInStock: number;
  createdAt: any;
  updatedAt: any;
}
