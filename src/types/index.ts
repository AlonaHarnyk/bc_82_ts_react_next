export interface IStudent {
  id: number;
  name: string;
  age: number;
  course: string;
  isOnline: boolean;
  avatar: string;
}

export interface ICourse {
  id: number;
  title: string;
  duration: number;
  category: string;
  isAvailable: boolean;
  image: string;
}

export interface IDetails {
  brand: string;
  color: string;
  warranty: number;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  isAvailable: boolean;
  details: IDetails;
}
