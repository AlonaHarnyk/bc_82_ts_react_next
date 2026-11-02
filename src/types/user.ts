export interface User {
  name: string;
  email: string;
  isOnline: boolean;
  id: string;
}

export interface UserData {
  name: string;
  email: string;
  isOnline: boolean;
}

export interface UpdateUserStatusData {
  isOnline: boolean;
  id: string;
}
