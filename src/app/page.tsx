import ProductList from "./components/ProductList/ProductList";
import style from "./page.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <ProductList />
    </div>
  );
}
