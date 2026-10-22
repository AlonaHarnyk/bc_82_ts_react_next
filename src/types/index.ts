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
