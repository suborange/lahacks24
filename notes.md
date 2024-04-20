use useEffect() for search bar


 route is the folder name -> users folder in src/app/users == the http://localhost:3000/users route

 also to create a nested, create folders within folders

 use Link for nav bar

 import Link from "next/link"; // to use link component, which should reload this component instead of the whole page.

 everything (components) in the src/app is server-side rendering (by default)

 for client-side rendering = 'use client';
 makes whole page client side with this directive

 need to be importing, the export, for components, like the example of clien-side button component
 
 import AddToCart from './AddToCart';