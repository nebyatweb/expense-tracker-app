import Expense from "./Expense";
import './Expenses.css'

const Expenses = (props) => {
    const expenseList = props.expenses.map((expense) => {
        return ( 
            <div className="expenses">
                <Expense title={expense.title} amount={expense.amount} date={expense.date} />
            </div>
         );
    });
    
    return <div>{expenseList}</div>
}
 
export default Expenses;