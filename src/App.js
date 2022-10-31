import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
function App() {
  return (
    <div className="App">
      <Home />
      <Login />
      <Register />
      <Profile />
    </div>
  );
}

export default App;
