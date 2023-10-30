import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Home";
import Hero from "./components/Hero";

const router = createBrowserRouter([
  {
    path: "/hero",
    element: ( <Hero></Hero>
    ),
  },
  {
    path: "/",
    element: ( <Home></Home>
    ),
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
