import React, { createContext, useState } from "react";

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
	// hooks

	// functions
	const dbStr = "https://62470445e3450d61b006097f.mockapi.io/Payment";
	const addPayment = async (newFeedback) => {
		const response = await fetch(`${dbStr}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newFeedback),
		});
		const data = await response.json();
		console.log(data);
		// setFeedback(data);
	};

	// return
	return (
		<PaymentContext.Provider value={{ addPayment }}>
			{children}
		</PaymentContext.Provider>
	);
};

export default PaymentContext;
