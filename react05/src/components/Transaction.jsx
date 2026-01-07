function Transaction({ type, amount, currency }) {
  return (
    <tr className="odd:bg-[#F3DFE8] even:bg-[#E6BED3] border-b border-white">
      <td className="px-6 py-4 capitalize">{type}</td>
      <td className="px-6 py-4">{amount}</td>
      <td className="px-6 py-4">{currency}</td>
    </tr>
  );
}

export default Transaction;
