import AuthPovider, { AuthContext } from "./Auth";
import HomeProvider, { HomeContext } from "./Home";
import VisitProvider, { VisitContext } from "./Visit";

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
