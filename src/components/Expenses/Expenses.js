//Expenses component for lists of components
import Expense from "./Expense";
import './Expenses.css'
import Card from "../UI/Card";

const Expenses = (props) => {
    const expenseList = props.expenses.map((expense) => {
        return ( 
            <div>
                <Expense title={expense.title} amount={expense.amount} date={expense.date} />
            </div>
         );
    });
    
    return(
        <Card className="expenses">
            {expenseList}
        </Card>

    ) 
}
 
export default Expenses;