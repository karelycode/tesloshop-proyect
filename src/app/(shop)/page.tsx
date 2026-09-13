import { getPaginatedProductsWithImages } from "@/actions/product/product-pagination";
import { Title, ProductGrid } from "@/components";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products } = await getPaginatedProductsWithImages({ page });

  return (
    <>
      <Title title="Tienda" subtitle="Todo los productos" className="mb-2" />

      <ProductGrid products={products} />
    </>
  );
}
