import React from 'react';
import './App.css';
import Target from './Components/Target';
import incomeSource from './Components/IncomeSource';
import ExpenceSource from './Components/ExpenseSource';
import SavingsAccount from './Components/SavingsAccount';
import IncomeSource from './Components/IncomeSource';


function App() {
  
  //lifting state here is missing
  return (
    <div>
    <div className='Formes'>
     < IncomeSource/>
     <ExpenceSource />
     <Target/>
      </div>
    <div className='Balance'>
      < SavingsAccount />
      </div>
    
      
       </div>
  );
}

export default App;