import { Create } from "@pages/create"
import { Home } from "@pages/home"
import { MyTokens } from "@pages/tokens"
import { type PathRouteProps } from "react-router-dom"

export const routes: PathRouteProps[] = [
	{
		element: <Home />,
		path: "/"
	},
	{
		element: <Create />,
		path: "/create"
	},
	{
		element: <MyTokens />,
		path: "/tokens"
	}
]
