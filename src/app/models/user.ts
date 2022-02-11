
export interface User {
  user_id: number;
  email: string;
  password: string;
  role: Roles,
}

export enum Roles {
  'user',
  'admin'
}
