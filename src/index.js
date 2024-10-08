// import React from "react";
// import ReactDOM from "react-dom/client";
// import CardWallet from "./components/CardWallet";
// import Card from "./components/Card";
// // import App from "./App";
// import Timer from "./components/Timer";
// import Lifecycle from "./components/lifecycle";
// import Users from "./components/Users";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// function MainComponent() {
//   return (
//     <div>
//       <h1>My Application</h1>
//       <div id="divContainer">
//         <CardWallet title="Green Wallet">
//           <Card
//             cardNumber="8323 3232 3289 1112"
//             userName="John Smith"
//             date="18/29"
//           />
//           <hr />
//           <Card
//             cardNumber="1111 2222 3333 4444"
//             userName="John Smith 2"
//             date="18/29"
//           />
//         </CardWallet>
//         {/* <Timer /> */}
//         <Lifecycle />
//         <Users />
//         {/* <App /> */}
//       </div>
//     </div>
//   );
// }

// root.render(<MainComponent />);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./styles/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
