import { useEffect, useState } from "react";

type Transaction = {
  date: number;
  amount: number;
  transaction_type: string;
  currency: string;
  account: string;
  industry: string;
  state: string;
};

const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("/api/transactions"); // Chamada para a API Route
        if (!response.ok) {
          throw new Error("Erro ao carregar transações");
        }
        const data = await response.json();
        setTransactions(data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Falha ao buscar transações");
      } finally {
        setLoading(false);
      }
    };
    fetchTransactions();
  }, []);

  return { transactions, loading, error };
};

export default useTransactions;
