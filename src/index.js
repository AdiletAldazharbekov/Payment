import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// изменения в React 18
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
