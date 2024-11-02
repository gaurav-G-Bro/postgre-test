import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const CONNECT_TO_POSTGRESQL = async () => {
  try {
    await prisma.$connect();
    console.log("database connected successfully");
  } catch (error) {
    console.log("database connection failed: ", error.message);
  } finally {
    await prisma.$disconnect();
  }
};

export { CONNECT_TO_POSTGRESQL };
