import AuthPovider from "./Auth";
import HomeProvider from "./Home";
import VisitProvider from "./Visit";
import { AuthContext } from "./Auth";
import { HomeContext } from "./Home";
import { VisitContext } from "./Visit";

const contexts = {
  Auth: AuthContext,
  Home: HomeContext,
  Visit: VisitContext,
};

const providers = {
  Auth: AuthPovider,
  Home: HomeProvider,
  Visit: VisitProvider,
};
export { providers, contexts };
