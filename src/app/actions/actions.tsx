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

export async function postRecipe(data : {
  heading: string;
  quote: string;
  ingredients: string;
  directions: string;
  objectKey: string;
  user: string;
}) {
  if (!data.user) throw new Error("User ID is required");
  const response = await prisma.recipe.create({
    data: {
      heading: data.heading,
      quote: data.quote,
      ingredients: data.ingredients,
      directions: data.directions,
      photos: data?.objectKey,
      user: {
        connect: { id: data.user },
      },
    },
  });
  return response;
}

export async function getAllUserRecipes() {
  const recipes = await prisma.recipe.findMany();
  return recipes;
}

export async function getRecipeById(id: string) {
  return await prisma.recipe.findUnique({
    where: { id },
  });
}
