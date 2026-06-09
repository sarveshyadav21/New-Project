// Your hand-written Prisma client singleton should live here.
// Import from the published @prisma/client package. Ensure `prisma generate`
// runs during install (we add a postinstall script) so the client is available
// in production builds (Vercel).
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
