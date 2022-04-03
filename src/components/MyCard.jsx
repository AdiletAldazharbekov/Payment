import React, { useContext, useState } from "react";
import PaymentContext from "../context/PaymentContext";

const MyCard = () => {
	const { addPayment } = useContext(PaymentContext);
	const [newPay, setNewPay] = useState({});
	const [cardNumber, setCardNumber] = useState("");
	const [expDate, setexpDate] = useState("");
	const [cvv, setCvv] = useState("");
	const [amount, setAmount] = useState(0);

	const newFeedback = {
		"card-number": "1234123412341234",
		date: "08/23",
		cvv: "135",
		amount: 1525,
	};

	return (
		<div className="my-card">
			<p>Введите данные карты </p>
			<input
				className="card-number"
				type="text"
				placeholder="Card Number"
			/>
			<div className="card-opt">
				<input className="exp-date" type="text" placeholder="mm/yyyy" />
				<input className="cvv" type="text" placeholder="cvv" />
				<input className="amount" type="text" placeholder="0.00" />
			</div>
			<div className="conf">
				<button onClick={() => addPayment(newFeedback)}>
					Оплатить
				</button>
			</div>
		</div>
	);
};

export default MyCard;
