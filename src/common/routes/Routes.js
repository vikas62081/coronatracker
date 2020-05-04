import Home from "../container/Home";
import Combine from "../container/Combine";

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
]
