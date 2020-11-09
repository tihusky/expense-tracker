/* ====================
    Selectors
   ==================== */

const form = document.getElementById('js-expense-form');
const tableBody = document.getElementById('js-table-body');
const tableTotal = document.getElementById('js-expense-total');
const btnClear = document.getElementById('js-btn-clear');



/* ====================
    State
   ==================== */

let expenses = [];



/* ====================
    Functions
   ==================== */

// TODO: Add functions for sorting expenses

const clearExpenses = () => {
  expenses = [];

  tableBody.innerHTML = '';
  tableTotal.innerText = '0.00';
}

// TODO: Implement proper delete button
const renderTable = () => {
  tableBody.innerHTML = '';

  for (const expense of expenses) {
    tableBody.innerHTML += `
      <tr>
        <td>${expense.date.toLocaleDateString()}</td>
        <td>${expense.desc}</td>
        <td>${expense.amount.toFixed(2)}€</td>
        <td><button>&times;</button></td>
      </tr>
    `;
  }

  tableTotal.innerText = calculateTotal().toFixed(2);
};

const calculateTotal = () => {
  return expenses.reduce((acc, cur) => acc + cur.amount, 0);
}



/* ====================
    Event Listeners
   ==================== */

// TODO: Turn anonymous listener function into named listener function
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const date = new Date(event.target.elements['expense-date'].value);
  const desc = event.target.elements['expense-desc'].value;
  const amount = Number(event.target.elements['expense-amount'].value);

  expenses.push({
    date,
    desc,
    amount
  });

  renderTable();
});

document.addEventListener('click', (event) => {
  if (event.target.id === 'js-btn-clear') {
    clearExpenses();
  }
});