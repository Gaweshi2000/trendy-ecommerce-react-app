import ProductListTemplate from "../../templates/ProductListTemplate";

/**
 * ProductsPage Component
 *
 * Acts as a container for the `ProductListTemplate` component, which handles the display of products.
 * @component
 * @returns {JSX.Element} Rendered ProductsPage component.
 */
function ProductsPage() {
  return (
    <>
      {/* Render the ProductListTemplate, which contains the core product listing functionality */}
      <ProductListTemplate />
    </>
  );
}
export default ProductsPage;
