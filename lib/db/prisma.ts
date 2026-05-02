// Your hand-written Prisma client singleton should live here.
import { PrismaClient } from "../generated/prisma/client";
export const prisma = new PrismaClient();
