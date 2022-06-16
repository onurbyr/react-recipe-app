import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer autoClose={1000} hideProgressBar={true} />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
