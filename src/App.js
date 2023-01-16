import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Welcome from "./pages/Welcome"
import Products from "./pages/Products"
import HomePage from "./pages/HomePage"
import RootLayout from "./pages/Root"
import Error from "./pages/Error"

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <Error />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/welcome", element: <Welcome /> },
			{ path: "/products", element: <Products /> },
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
