import { env } from "./config/env.js";
import app from "./app.js";

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Environment: ${env.NODE_ENV}`);
});
