/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
export enum Roles {
  User = 'user',
  Admin = 'admin'
}
export interface User {
  user_id: number;
  email: string;
  password: string;
  role: Roles,
}
