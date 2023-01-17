import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Welcome from "./pages/Welcome"
import Products from "./pages/Products"
import HomePage from "./pages/HomePage"
import RootLayout from "./pages/Root"
import Error from "./pages/Error"
import ProductDetails from "./pages/ProductDetails"

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "welcome", element: <Welcome /> },
			{
				path: "products",
				element: <Products />,
			},
			{ path: "products/:title", element: <ProductDetails /> },
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
