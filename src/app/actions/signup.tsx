"use server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function createUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  const hashedPass = await bcrypt.hash(data?.password, 10);
  return await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPass,
    },
  });
}
