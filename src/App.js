import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/index";
import Header from "./Components/Header/index";
import Home from "./Components/Home/index";
import Login from "./Components/Login/index";
import NotFound from "./Components/NotFound/index";
import Photo from "./Components/Photo/index";
import User from "./Components/User/index";
import UserProfile from "./Components/UserProfile/index";
import ProtectedRoute from "./Helper/ProtectedRoute";
import { UserStorage } from "./UserContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route
                path="my-account/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path="photo/:id" element={<Photo />} />
              <Route path="profile/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
