import Header from "../Components/global/Header";
import Register from "../pages/register";
import Login from "../pages/login";
// import "./styles/global.css";
import "../App.css";
const App = () => {
  return (
    <div id="divContainer">
      <Header />
      <Register />
      <hr />
      <Login />
    </div>
  );
};

export default App;
