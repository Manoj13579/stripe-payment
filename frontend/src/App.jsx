import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import StripeCheckout from "./components/stripeCheckout";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<StripeCheckout />} />
    <Route path="/success" element={<Success />} />
    <Route path="/cancel" element={<Cancel />} />
    </>))

    
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
