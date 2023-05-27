
import { BrowserRouter, Route, Switch} from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import './App.css'
import Home from "./Pages/Home/Home";
import Hotels from "./Pages/Hotels/Hotels";
import News from "./Pages/News/News";

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/">
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
              </Switch>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
