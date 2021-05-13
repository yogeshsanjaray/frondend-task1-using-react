import { useState,useRef } from "react";
import {useInputField} from "./useInputField"
import {ShowResult} from "./showResult"
import {InputForm} from "./inputForm"
 
export default function CreditCard() {
    const { handleChange } = useInputField();
    const [info,setInfo] = useState([])
    const [showResult,setshowResult] = useState(false)

    document.addEventListener("paste", function(e) {
        if (e.target.type == "text") {
            let data = e.clipboardData.getData('Text');

            if(data.length == 16){
                data = data.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'').split(' ');
                // console.log(data);
            }else{
                data = data.split(' ');
                // console.log(data);
            }
            
            [].forEach.call(document.querySelectorAll("input[class=input]"), (node, index) => {
                    node.value = data[index];
                });
            }
            document.querySelector('#input4').focus();
        });

    function delCardNum(indexTodelete) {
        let res = info.filter((val,index)=>{
            if (index == indexTodelete) 
                return false
            return true            
        })
        // console.log(res)
        setInfo(res)
    }

    function add(e){
      e.preventDefault();
      let ob = {
        cardnumber: [ e.target.input1.value, e.target.input2.value,e.target.input3.value,e.target.input4.value],
      }
      setInfo((info) => {
              return [...info,ob]
          })
    }

    return(
      <div id="container" className="container">    
        <InputForm add={add} handleChange={handleChange} setshowResult={setshowResult}  />
        <ShowResult info={info}  delCardNum={delCardNum} showResult={showResult}/>
      </div>
    )
}
