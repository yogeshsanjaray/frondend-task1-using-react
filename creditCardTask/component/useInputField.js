import { useState,useRef } from "react";

const useInputField = () => {
    const [inputValues, setValue] = useState({
      val1: "",
      val2: "",
      val3: "",
      val4: ""
    });
  
    return {
      handleChange: e => {
        const { maxLength, minLength,value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");
  
        if (value.length >= maxLength ) {
          if (parseInt(fieldIndex) < 4) {

            const nextSibling = document.querySelector(
              `input[name=val-${parseInt(fieldIndex) + 1}]`
            );
            // console.log(nextSibling)
            if (nextSibling !== null) {
              nextSibling.focus();
            }
          }
        }else if (value.length == minLength ) {
            if (parseInt(fieldIndex) < 5) {
              // Get the next input field
              const prevSibling = document.querySelector(
                `input[name=val-${parseInt(fieldIndex) - 1}]`
              );
            //   console.log(prevSibling)
              if (prevSibling !== null) {
                prevSibling.focus();
              }
            }
          }
  
        setValue({
          ...value,
          [`val${fieldIndex}`]: value
        });
      }
    };
  };
export {useInputField};