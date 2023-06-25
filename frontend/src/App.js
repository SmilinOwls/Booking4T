import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import "./App.css";
import Home from "./Pages/Home/Home";
import Hotels from "./Pages/Hotels/Hotels";
import News from "./Pages/News/News";
import PrevFilterContext from "./context/PrevFilterContext";
import DetailSite from "./Pages/DetailSite";
import DetailNews from "./Pages/DetailNews";
import DetailHotel from "./Pages/DetailHotel";
import DetailRoom from "./Pages/DetailRoom";
import Signin from './Pages/Signin';
import Signup from './Pages/Signup'
import LogOut from "./Pages/Logout";
import Payment from "./Pages/Payment";
import ThankYou from "./Pages/Thankyou";
import AccountSetting from "./Pages/AccountSetting";
import AccountBooking from "./Pages/AccountSetting/AccountBooking";
import AccountMemory from "./Pages/AccountSetting/AccountMemory";
import SearchResult from "./Pages/SearchResult";

import Dashboard from './Admin/pages/Dashboard';
import MainLayout from './Admin/components/MainLayout';
import Order from './Admin/pages/Order/Order';
import Blog from './Admin/pages/Blog/Blog';
import User from './Admin/pages/User/User';
import Place from './Admin/pages/Place/Place';
import Room from './Admin/pages/Room/Room';
import OrderDetail from './Admin/pages/Order/OrderDetail';

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
              <Route path="/search" exact>
                <AppLayout>
                  <SearchResult />
                </AppLayout>
              </Route>
              <Route path="/hotels" exact>
                <AppLayout>
                  <Hotels />
                </AppLayout>
              </Route>
              <Route path="/hotel/:hotelId" exact>
                <AppLayout>
                  <DetailHotel />
                </AppLayout>
              </Route>
              <Route path="/news" exact>
                <AppLayout>
                  <News />
                </AppLayout>
              </Route>
              <Route path="/new/:newId" exact>
                <AppLayout>
                  <DetailNews />
                </AppLayout>
              </Route>
              <Route path="/room/:roomId" exact>
                <AppLayout>
                  <DetailRoom />
                </AppLayout>
              </Route>
              <Route path="/payment" exact>
                <AppLayout>
                  <Payment />
                </AppLayout>
              </Route>
              <Route path="/thank-you" exact>
                <AppLayout>
                  <ThankYou />
                </AppLayout>
              </Route>
              <Route path="/site/:id" exact>
                <AppLayout>
                  <DetailSite />
                </AppLayout>
              </Route>
              <Route path="/account/bookings" exact>
                <AppLayout>
                  <AccountBooking />
                </AppLayout>
              </Route>
              <Route path="/account/memory" exact>
                <AppLayout>
                  <AccountMemory />
                </AppLayout>
              </Route>
              <Route path="/account" exact>
                <AppLayout>
                  <AccountSetting />
                </AppLayout>
              </Route>

              <Route path="/sign-up">
                <AppLayout>
                  <Signup />
                </AppLayout>
              </Route>
              <Route path="/sign-in" exact>
                <AppLayout>
                  <Signin />
                </AppLayout>
              </Route>
              <Route path="/logout">
                <AppLayout>
                  <LogOut />
                </AppLayout>
              </Route>

              <Route path="/api" exact>
                <MainLayout>
                  <Dashboard/>
                </MainLayout>
              </Route>
              <Route path="/api/user/admin" exact>
                <MainLayout>
                  <User/>
                </MainLayout>
              </Route>
              <Route path="/api/blog/admin">
                <MainLayout>
                  <Blog/>
                </MainLayout>
              </Route>
              <Route path="/api/place/admin" exact>
                <MainLayout>
                  <Place/>
                </MainLayout>
              </Route>
              <Route path="/api/room/admin" exact>
                <MainLayout>
                  <Room/>
                </MainLayout>
              </Route>
              <Route path="/api/book" exact>
                <MainLayout>
                  <Order/>
                </MainLayout>
              </Route>
              <Route path="/api/book/admin/:id" exact>
                <MainLayout>
                  <OrderDetail/>
                </MainLayout>
              </Route>
            </Switch>
          </PrevFilterContext>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
