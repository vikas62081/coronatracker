import Combine from "../container/Combine";
import Home from "../container/Home";
import District from '../container/District'
import {About} from '../components/static/About'
import WorldReport from '../components/world/WorldReport'
import {WorldMap} from '../components/world/WorldMap'
export const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/graph",
    exact: true,
    component: Combine
  },
  {
    path: "/map",
    exact: true,
    component: WorldMap
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
