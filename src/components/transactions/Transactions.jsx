import css from './Transactions.module.css';
const Transactions = ({ transactions }) => {
  return (
    <table className={css.transaction_history}>
      <thead className={css.table_head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.table_body}>
        {transactions.map(transaction => (
          <tr id={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Transactions;
