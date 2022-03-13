/* eslint-disable camelcase */

export interface LoginMetadata {
  method: string;
  url: string;
  headers: string[];
}

export interface LoggedInfo {
    log_id: number;
    email: string;
    login_date: string;
    metadata?: LoginMetadata;
}
