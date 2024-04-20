// HOME page

import Image from "next/image";
import Link from "next/link"; // to use link component, which should reload this component instead of the whole page.
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
   <main>
    <h1>Hello world</h1>
    <Link href="/users">Users</Link>
    <ProductCard />
   </main>
  );
}
