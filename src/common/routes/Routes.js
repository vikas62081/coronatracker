import Combine from "../container/Combine";
import Home from "../container/Home";

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
