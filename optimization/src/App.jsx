import { useState } from "react";
import ProductList from "./ProductList";
import products from './data.json'

const App = () => {

  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('Not Selected');
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleClick = (item) => {
    const msg = `${item} is selected..!`
    setMsg(msg);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <br /><br />

      <input
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="outline px-2 py-1 rounded-sm"
      />

      <ProductList products={filteredProducts} onClick={handleClick} />

      <h1>{msg}</h1>
    </div>
  );
};

export default App;
