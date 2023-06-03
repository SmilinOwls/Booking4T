import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import "./App.css";
import Home from "./Pages/Home/Home";
import Hotels from "./Pages/Hotels/Hotels";
import News from "./Pages/News/News";
import PrevFilterContext  from "./context/PrevFilterContext";
import DetailSite from "./Pages/DetailSite";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <PrevFilterContext>
            <Switch>
              <Route path="/" exact>
                <AppLayout>
                  <Home />
                </AppLayout>
              </Route>
              <Route path="/hotels" exact>
                <AppLayout>
                  <Hotels />
                </AppLayout>
              </Route>
              <Route path="/news" exact>
                <AppLayout>
                  <News />
                </AppLayout>
              </Route>
              <Route path="/site/:id" exact>
                  <AppLayout>
                    <DetailSite />
                  </AppLayout>
              </Route>
            </Switch>
          </PrevFilterContext>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
