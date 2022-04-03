import "./App.css";
import MyCard from "./components/MyCard";
import { PaymentProvider } from "./context/PaymentContext";

function App() {
	return (
		<PaymentProvider>
			<div className="App">
				<MyCard />
			</div>
		</PaymentProvider>
	);
}

export default App;
