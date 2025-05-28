export interface User {
  userId: string;
  name: string;
  email: string;
  age: string;
  phone: string;
  address: string;
}

export type UserFormData = Omit<User, "userId">;
