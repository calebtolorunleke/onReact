import "./App.css";
import First from "./components/First";
import Second from "./components/Second";
import Products from "./components/Products";

function App() {
  return (
    <div className="flex gap-3">
      <h1 className="heading">REACT LESSONS</h1>
      <First />
      <Second />
      <Products age={14} />
      <Products
        img='https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/home.jpg"'
        name="philly bol"
        price={7000}
      ></Products>
      <Products
        img='https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/home.jpg"'
        name="philly bol"
        price={7000}
      />
      {/* 
      <Products age={14} />
      <Products age={14} /> */}
      <Products
        img='https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/home.jpg"'
        name="philly bol"
        price={7000}
      >Po<Products />
    </div>
  );
}

export default App;
