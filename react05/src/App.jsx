import "./App.css";
import transactions from "./components/transactions.json";
import Transaction from "./components/Transaction";

function App() {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <table className="w-full text-sm text-left text-fg-brand-subtle">
        <thead>
          <tr className="bg-[#E6BED3] border-b border-white">
            <th className="px-6 py-4">Type</th>
            <th className="px-6 py-4">Amount</th>
            <th className="px-6 py-4">Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <Transaction
              key={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
