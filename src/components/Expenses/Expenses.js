import React, { useState } from 'react';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setfilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        console.log('expenses.js')
        console.log(selectedYear)
        setfilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesList items={filteredExpenses}/>
                {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
                {filteredExpenses.length > 0 ? <p>No expenses found.</p> : filteredExpenses.map((expense) => (
                    <ExpenseItem 
                        key={expense.id}
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date}
                    />))}
             */}
                {/* <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                /> */}
            </Card>
        </div>
    );
}

export default Expenses;