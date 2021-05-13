
export function InputForm({add,handleChange,setshowResult}) {
    
    return(<div className="checkout">
            <div className="card-number" >
                <h1 className="card">Enter Your Card Details</h1>
                <form className="form" onSubmit={add}>
                    <div className="input-div">
                        <input type="text" 
                            className="input" name="val-1"
                            id="input1" placeholder="0000"
                            minlength="0" maxlength = "4" 
                            pattern="[0-9]{4}" 
                            onChange={handleChange} 
                        />
                        
                        <input type="text" 
                            className="input" name="val-2"
                            id="input2" placeholder="0000"
                            minlength="0" maxlength = "4" 
                            pattern="[0-9]{4}"
                            onChange={handleChange} 
                        />
                        
                        <input type="text" 
                            className="input" name="val-3"
                            id="input3" placeholder="0000"
                            minlength="0" maxlength = "4" 
                            onChange={handleChange} 
                            pattern="[0-9]{4}"
                        />
                        
                        <input type="text" 
                            className="input" name="val-4"
                            id="input4" placeholder="0000"
                            minlength="0" maxlength = "4" 
                            onChange={handleChange} 
                            pattern="[0-9]{4}" 
                        />
                    </div>
                    <button id="submit-button" onClick={()=>{setshowResult(true)}}>Submit</button>
                </form>
            </div>
      </div>
    )
}