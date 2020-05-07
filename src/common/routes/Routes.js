import Combine from "../container/Combine";
import Home from "../container/Home";
import District from '../container/District'
import {About} from '../components/static/About'
import WorldReport from '../components/world/WorldReport'
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
  {
    path: `/about`,
    exact: true,
    component: About
  },
  {
    path: `/world`,
    exact: true,
    component: WorldReport
  },
  {
    exact: true,
    component: Home
  },
]
