import cron from "node-cron";
import { linkService } from "../services";

cron.schedule("59 23 L * *", async () => {
  console.log("🧹 Ejecutando limpieza de links expirados...");

  try {
    const result = await linkService.linkRepository
      .createQueryBuilder()
      .delete()
      .from("link")
      .where("expiresAt < NOW()")
      .execute();

    console.log(`✅ Links eliminados: ${result.affected}`);
  } catch (err) {
    console.error("❌ Error al limpiar links:", err);
  }
});
