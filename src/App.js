import Footer from "Components/Footer";
import Header from "Components/Header";
import ProtectedRoute from "Helper/ProtectedRoute";
import Home from "Pages/Home";
import Login from "Pages/Login";
import NotFound from "Pages/NotFound";
import Photo from "Pages/Photo";
import User from "Pages/User";
import UserProfile from "Pages/UserProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "UserContext";
import "./App.css";
import QueryClientProvider from "./Helper/QueryClientProvider";

function App() {
  return (
    <QueryClientProvider>
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
    </QueryClientProvider>
  );
}

export default App;
