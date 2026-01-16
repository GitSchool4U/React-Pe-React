

const ProductList = ({ products, onClick }) => {

  console.log("ProductList re-rendered");

  return (
    <div className="border m-5 p-5">
      <h2 className="mb-5">Products: </h2>
      <div className="h-36 overflow-auto">

        {products?.map((p, i) => (
          <div key={i} className="mb-2">
            {i} {p.name}
            <button onClick={() => onClick(p.name)}>Select</button>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProductList;
