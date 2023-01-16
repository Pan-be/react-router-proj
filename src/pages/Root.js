import { Outlet } from "react-router-dom"
import MainNav from "../components/MainNav"

const RootLayout = (props) => {
	return (
		<>
			<MainNav />
			<main>
				<Outlet />
			</main>
		</>
	)
}

export default RootLayout
