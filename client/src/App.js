import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ToolBar from "./components/ToolBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <ToastContainer />
      <ToolBar />
      <Switch>
        <Route path="/auth/register" exact component={RegisterPage} />
        <Route path="/auth/login" exact component={LoginPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
