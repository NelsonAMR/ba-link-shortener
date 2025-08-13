interface EnvConfig {
  PORT: number;
  NODE_ENV: string;
}

export const env: EnvConfig = {
  PORT: Number(process.env.PORT) || 3000,
  NODE_ENV: process.env.NODE_ENV || "development",
};
