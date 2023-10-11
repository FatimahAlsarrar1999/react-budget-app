const SavingsAccount = () => {
  function Saving(props :number ){
  

  }
  
    return (
        <div>

        <p> Current Balance : 4000 </p> <br/>
        <form>
        <label>Transfer To Saving Account </label><br/>
        <input type="text" name="inputTransfer" id="inputTransferId"/>
        </form>
        <button name="transferBtnName" id="transferBtnId" type="submit"> Transfer </button>
         </div>  
  );
}
export default SavingsAccount;