import React from 'react';
import './App.css';
import Target from './Components/Target';
import incomeSource from './Components/IncomeSource';
import ExpenceSource from './Components/ExpenseSource';
import SavingsAccount from './Components/SavingsAccount';
import IncomeSource from './Components/IncomeSource';
import {useState} from 'react';


const App = ()=> {
  
  const [saving , setSaving ]=useState(0)
  const getSaving = (amount : number )=>{
    setSaving(amount)
  }
  return (
    <div> 
      
      
      <div className='Formes'>
    
     < IncomeSource />
     <ExpenceSource />
     <Target Saving={saving} />
      </div>
        <div id='Balance'>
           < SavingsAccount  getSaving ={getSaving}  />
            </div>   
           
      </div>
   
  
  );

}

export default App;