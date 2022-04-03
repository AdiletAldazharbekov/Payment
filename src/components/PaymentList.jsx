import React, { useContext } from "react";
import PaymentContext from "../context/PaymentContext";
import Table from "react-bootstrap/Table";

const PaymentList = () => {
	const { payment } = useContext(PaymentContext);
	return (
		<div className="payment-list">
			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>ID</th>
						<th>Номер карты</th>
						<th>Срок действия</th>
						<th>CVV</th>
						<th>Сумма</th>
					</tr>
				</thead>
				<tbody>
					{payment.map((pay) => (
						<tr key={pay.id}>
							<td>{pay.id}</td>
							<td>{pay.cardNumber}</td>
							<th>{pay.expDate}</th>
							<td>{pay.cvv}</td>
							<td>{pay.amount}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default PaymentList;
