import React, { useContext, useState } from "react";
import PaymentContext from "../context/PaymentContext";
import PaymentList from "./PaymentList";
import Button from "react-bootstrap/Button";
import InputElement from "react-input-mask/lib/react-input-mask.production.min";

const MyCard = () => {
	const { addPayment } = useContext(PaymentContext);

	const [cardNumber, setCardNumber] = useState("");
	const [expDate, setexpDate] = useState("");
	const [cvv, setCvv] = useState("");
	const [amount, setAmount] = useState();

	const handleCardNumberChange = (e) => {
		setCardNumber(e.target.value.replace(/[\s_]+/g, ""));
	};

	const handlExpDateChange = (e) => {
		setexpDate(e.target.value.replace(/[^0-9/]+/g, ""));
	};

	const handleCvvChange = (e) => {
		setCvv(e.target.value.replace(/_/g, ""));
	};

	const handleAmountChange = (e) => {
		setAmount(e.target.value.replace(/[^\d]+/g, ""));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newPay = {};
		let isError = false;
		if (cardNumber.length == 16) {
			newPay.cardNumber = cardNumber;
		} else {
			isError = true;
			alert("Номер карты заполнен не корректно");
			return;
		}
		if (expDate.length == 7) {
			newPay.expDate = expDate;
		} else {
			isError = true;
			alert("Срок карты заполнен не корректно");
			return;
		}
		if (cvv.length == 3) {
			newPay.cvv = cvv;
		} else {
			isError = true;
			alert("cvv код заполнен не корректно");
			return;
		}
		if (+amount > 0) {
			newPay.amount = +amount;
		} else {
			isError = true;
			alert("Сумма платежа заполнен не корректно, должно быть больше 0");
			return;
		}
		if (!isError) {
			addPayment(newPay);
			setCardNumber("");
			setexpDate("");
			setCvv("");
			setAmount("");
		}
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="my-card">
					<p>Введите данные карты </p>

					<InputElement
						mask="9999 9999 9999 9999"
						type="text"
						className="form-control card-number"
						onChange={handleCardNumberChange}
						value={cardNumber}
						placeholder="Card Number"
					/>
					<div className="card-opt">
						<InputElement
							mask="99/2029"
							type="text"
							className="form-control exp-date"
							onChange={handlExpDateChange}
							value={expDate}
							placeholder="mm/yyyy"
						/>
						<InputElement
							mask="999"
							type="text"
							className="form-control cvv"
							onChange={handleCvvChange}
							value={cvv}
							placeholder="cvv"
						/>
						<InputElement
							className="form-control amount"
							type="text"
							onChange={handleAmountChange}
							value={amount}
							placeholder="amount"
						/>
					</div>
					<div>
						<Button type="submit" variant="warning">
							<strong>Оплатить</strong>
						</Button>
					</div>
				</div>
			</form>
			<PaymentList />
		</>
	);
};

export default MyCard;
