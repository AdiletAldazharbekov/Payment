import React, { createContext, useEffect, useState } from "react";

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
	// Строка подключения
	const connectionString ="https://62470445e3450d61b006097f.mockapi.io/Payment";
	// hooks
	const [payment, setPayment] = useState([]);
	// Fetch
	const getPaymentList = async () => {
		const response = await fetch(`${connectionString}`);
		const data = await response.json();
		setPayment(data);
	};

	useEffect(() => {
		getPaymentList();
	}, []);

	// functions
	const addPayment = async (newPay) => {
		const response = await fetch(`${connectionString}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newPay),
		});
		const data = await response.json();
		setPayment([data, ...payment]);
	};

	// return
	return (
		<PaymentContext.Provider value={{payment, addPayment }}>
			{children}
		</PaymentContext.Provider>
	);
};

export default PaymentContext;
