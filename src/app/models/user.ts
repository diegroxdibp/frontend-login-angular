import { ROLES } from "../enums/roles.enum";

export interface User {
  user_id: number;
  email: string;
  password: string;
  status: string;
  role: ROLES,
}
