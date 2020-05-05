import Combine from "../container/Combine";
import Home from "../container/Home";
import District from '../container/District'
export const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/map",
    exact: true,
    component: Combine
  },
  {
    path: `/district/:state`,
    exact: true,
    component: District
  },
]
