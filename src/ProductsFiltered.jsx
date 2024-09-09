export const ProductsFiltered = () => {
  return (
    <div>
      <h1>ProductsFiltered</h1>
      <ul>
        {products.map((product) => (
            <li key={product.id}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
            </li>
            ))    
        }
      </ul>
    </div>
  );
}