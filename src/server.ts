import { env } from "./config/env.js";
import app from "./app.js";
import { AppDataSource } from "./config/dbConfig";

const PORT = env.API_PORT;

AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
      console.log(`Environment: ${env.NODE_ENV}`);
    });
  })
  .catch((error) => console.log(error));
