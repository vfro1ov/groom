import DogsPage from "../container/DogsPage/DogsPage"
import Home from "../container/Home/Home"

export const routerConfig = [
	{path: '/dogs', element: <DogsPage />},
	{path: '/', element: <Home />},
] 