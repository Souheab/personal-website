"use server";
import { PrismaClient } from "@prisma/client";

interface User {
  email: string;
  password: string;
  createdAt: Date;
}

const prisma = new PrismaClient();

export async function createUser(user: User) {
  await prisma.user.create({
    data: user,
  });
}
