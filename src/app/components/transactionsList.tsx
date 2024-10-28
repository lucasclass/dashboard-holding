import { useEffect, useState } from "react";
import { convertTime } from "../utils/convertTime";

interface Transaction {
  date: number;
  amount: number;
  transaction_type: string;
  currency: string;
  account: string;
  industry: string;
  state: string;
}

export const TransactionsList = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [callCount, setCallCount] = useState(0);
  const maxCalls = 10; // Limite de chamadas

  useEffect(() => {
    const fetchTransactions = async () => {
      if (callCount < maxCalls) {
        const response = await fetch("/api/transactions");
        const data: Transaction[] = await response.json();
        setTransactions(data);
        setCallCount((prevCount) => prevCount + 1); // Incrementa o contador
      }
    };

    fetchTransactions();
  }, [callCount]);

  return (
    <div>
      <h1>Transaction List (Total Calls: {callCount})</h1>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            <p>Date: {convertTime(transaction.date)}</p>
            <p>
              Amount: {transaction.amount} {transaction.currency}
            </p>
            <p>Type: {transaction.transaction_type}</p>
            <p>Account: {transaction.account}</p>
            <p>Industry: {transaction.industry}</p>
            <p>State: {transaction.state}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
