import { readFileSync } from "fs";
import { NextResponse } from "next/server";
import { join } from "path";

const getTransactions = () => {
  const filePath = join(
    process.cwd(),
    "src",
    "app",
    "api",
    "data",
    "transactions.json"
  );
  try {
    const jsonData = readFileSync(filePath, "utf-8");
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Erro ao ler o arquivo JSON:", error);
    throw new Error("Falha ao carregar as transações");
  }
};

export async function GET() {
  try {
    const transactions = getTransactions();
    return NextResponse.json(transactions);
  } catch (error) {
    console.error("Erro na API:", error);
    return NextResponse.json(
      { message: "Failed to load transactions" },
      { status: 500 }
    );
  }
}