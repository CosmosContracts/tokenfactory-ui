import { Create } from "@pages/create"
import { MyTokens } from "@pages/tokens"
import { type PathRouteProps } from "react-router-dom"

export const routes: PathRouteProps[] = [
	{
		element: <Create />,
		path: "/create"
	},
	{
		element: <MyTokens />,
		path: "/tokens"
	}
]
