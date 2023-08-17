import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    // Implement logic to add an expense
    setExpenses([...expenses, { description, amount }]);
    setDescription('');
    setAmount('');
  };

  return (
    <div>
      <h1>Expense Management</h1>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
      <button onClick={handleAddExpense}>Add Expense</button>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>{expense.description}: ${expense.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default Expenses;
