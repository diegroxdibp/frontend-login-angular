declare let process: {
  env: {
    NG_APP_ENV: string;
    // Replace the line below with your environment variable for better type checking
    [AUTH_API: string]: any ;
  };
}
