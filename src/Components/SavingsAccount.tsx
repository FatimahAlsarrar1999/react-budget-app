import React from "react";

const SavingsAccount = () => {
    return (
        <>

        <p> Current Balance : 4000 </p> 
        <form>
        <label>Transfer To Saving Account </label><br/>
        <input type="text" name="inputTransfer" id="inputTransfer"/><br/>
        </form>
        <button name="transfer" type = "submit" id="transferBtn"> Transfer </button>
         </>  
  );
}
export default SavingsAccount;