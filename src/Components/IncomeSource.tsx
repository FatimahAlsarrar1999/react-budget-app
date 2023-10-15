import {useState , ChangeEvent , FormEvent } from 'react';
import { EventHandler } from 'react';
import { ProgressProps} from './TypesF';


const IncomeForm = () => {
const [inCome ,setInCome]= useState <ProgressProps >({
  source : '',
  amount: 0 ,
  date: '' ,

});
 const[incomeList , setInComes]=useState<ProgressProps []>([])

const handelChange =(event :ChangeEvent<HTMLInputElement>) => {
 const {name , value } = event.target;
 setInCome((prevInCome) => {
  return { ... prevInCome , [name]:value};
 });
};

  const handelSubmit = (event : FormEvent) => {
    event.preventDefault();
    setInComes((prevIncomes) => {
      return [... prevIncomes , inCome];
     });
  }
    return (
        <div>
          <form onSubmit={handelSubmit} >
            <div>
              <label htmlFor="amount">Income Source</label><br/>
              <input type="text" name="source" id="source" value={inCome.source} onChange={handelChange}/><br/>
              <label htmlFor="amount">Amount Of Income</label><br/>
              <input type="number" name="amount" id="amount" value={inCome.amount} onChange={handelChange} /><br/>
              <label htmlFor="amount">Income Date</label><br/>
              <input type="date" name="date" id="date" value={inCome.date} onChange={handelChange} /><br/>
            <button  >Add Income</button>
              </div>
          </form>
         <ul>
          {incomeList.map((inCome , index)=>(
          <li key={index}>
               {inCome.source}: {inCome.amount} EUR :{inCome.date}</li>
         
         ))}
         </ul>    
        </div>
);
};

export default IncomeForm;