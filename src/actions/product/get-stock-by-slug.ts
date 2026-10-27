"use server";
import { prisma } from "@/lib/prisma";

export const getStockBySlug = async (slug: string): Promise<number> => {
  try {
    const stock = await prisma.product.findFirst({
      where: {
        slug: slug,
      },
      select: {
        inStock: true,
      },
    });

    return stock?.inStock ?? 0; // Return the inStock value or 0 if not found
  } catch (error) {
    console.error("Error fetching stock:", error);
    return 0; // Return a default value or handle the error as needed
  }
};
