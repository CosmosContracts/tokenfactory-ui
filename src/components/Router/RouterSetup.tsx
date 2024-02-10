import { routes } from "./routes"
import Page404 from "pages/404"
import { Route, Routes } from "react-router-dom"

export const RouterSetup = () => {
	return (
		<Routes>
			{routes.map((routeProps) => (
				<Route {...routeProps} key={routeProps.path as string} />
			))}
			<Route element={<Page404 />} path="*" />
		</Routes>
	)
}
