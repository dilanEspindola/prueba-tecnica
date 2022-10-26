import { BrowserRouter, Route } from "react-router-dom";
import { RoutesNotFound } from "@/utils";
import { ROUTES } from "@/routes";
import { Home } from "@/pages";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <RoutesNotFound>
          <Route path={ROUTES.HOME} element={<Home />} />
        </RoutesNotFound>
      </BrowserRouter>
    </div>
  );
};

export default App;
