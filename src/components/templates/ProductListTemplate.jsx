import { DUMMY_PRODUCTS } from "../../utils/dummy-products";
import CartContextProvider from "../../store/shopping-cart-context";
import ProductCard from "../molecules/ProductCard";
import Header from "../organisms/Header";
import { useState } from "react";

/**
 * ProductListTemplate Component
 *
 * Handles the display of a product list with search and filter functionalities.
 * Provides shopping cart context and displays the header and filtered product cards.
 *
 * @component
 * @returns {JSX.Element} Rendered ProductListTemplate component.
 */
function ProductListTemplate() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  /**
   * Updates the search term state with user input.
   *
   * @param {string} term - The search term entered by the user.
   */
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  /**
   * Updates the filter state with the selected category.
   *
   * @param {string} category - The category selected by the user.
   */
  const handleFilter = (category) => {
    setFilter(category);
  };

  /**
   * Filters the products based on the search term and selected category.
   *
   * @constant
   * @type {Array<Object>}
   * @returns {Array<Object>} Filtered array of products.
   */
  const filteredProducts = DUMMY_PRODUCTS.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm);
    const matchesFilter = filter
      ? product.title.toLowerCase().includes(filter)
      : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <CartContextProvider>
      <Header onSearch={handleSearch} onFilter={handleFilter} />
      <section className="p-8 pt-32">
        <ul
          id="products"
          className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-4"
        >
          {/* Render a ProductCard for each filtered product */}
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <ProductCard {...product} />
            </li>
          ))}
        </ul>
      </section>
    </CartContextProvider>
  );
}

export default ProductListTemplate;
