import { notFound } from "next/navigation";
import { Title, ProductGrid } from "@/components";
import { initialData } from "@/seed/seed";
import { Category } from "@/interfaces";

const products = initialData.products;

interface Props {
  params: {
    id: Category;
  };
}

export default function ({ params }: Props) {
  const { id } = params;
  const categoryProducts = products.filter((product) => product.gender === id);

  const labels: Record<Category, string> = {
    men: "para hombres",
    women: "para mujeres",
    kid: "para niños",
    unisex: "para todos",
  };

  //if (id === "kids") {
  // notFound();
  //}

  return (
    <div>
      <Title
        title={`Articulos de ${labels[id]}`}
        subtitle="Todo los productos"
        className="mb-2"
      />

      <ProductGrid products={categoryProducts} />
    </div>
  );
}
