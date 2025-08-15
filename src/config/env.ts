interface EnvConfig {
  API_PORT: number;
  NODE_ENV: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_USER: string;
  DB_PASS: string;
  DB_NAME: string;
}

export const env: EnvConfig = {
  API_PORT: Number(process.env.API_PORT) || 3000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: Number(process.env.DB_PORT) || 5432,
  DB_USER: process.env.DB_USER || "test",
  DB_PASS: process.env.DB_PASS || "test",
  DB_NAME: process.env.DB_NAME || "test",
};
