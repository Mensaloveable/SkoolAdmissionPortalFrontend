import { AppRoutes } from "./appRoutes";
import { AuthRoutes } from "./authRoutes";

const CombinedRoutes = [...AppRoutes, ...AuthRoutes];

export default CombinedRoutes;
