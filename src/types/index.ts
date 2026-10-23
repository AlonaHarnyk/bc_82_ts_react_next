export interface IAddress {
  street: string;
  city: string;
  country: string;
}

export interface IDog {
  id: number;
  name: string;
  age: number;
  breed: string;
  isFriendly: boolean;
  avatar: string;
  address: IAddress;
}
