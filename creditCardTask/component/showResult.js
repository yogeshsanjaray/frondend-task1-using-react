
export function ShowResult({showResult,info,delCardNum}) {
    return(
        <div>
            {
                showResult?(
                <div id="res" className="res">
                    <ul>
                        <h2>Card-Numbers List</h2>
                        {
                            info.map((val,index)=>{
                                    // {console.log(val.cardnumber[0])}
                                return<li>
                                        {val.cardnumber[0]} {val.cardnumber[1]} {val.cardnumber[2]} {val.cardnumber[3]}
                                        <button onClick={()=>delCardNum(index)}> Delete </button>
                                    </li>
                            })
                        }
                    </ul>
                </div>
                ):""
            }
        </div>
    )
}