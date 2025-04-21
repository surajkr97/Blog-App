import "./App.css";
import { use, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header } from "./components";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex felx-wrap content-between bg-gray-400">
      <div className="w-full border-e-black">
        <Header />
        <main>
          TODO {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
