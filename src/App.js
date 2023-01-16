import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Welcome from "./pages/Welcome"
import Products from "./pages/Products"
import HomePage from "./pages/HomePage"

const router = createBrowserRouter([
	{ path: "/", element: <HomePage /> },
	{ path: "/welcome", element: <Welcome /> },
	{ path: "/products", element: <Products /> },
])

function App() {
	return <RouterProvider router={router} />
}

export default App
