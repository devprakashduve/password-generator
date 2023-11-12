"use client";
import React from "react";
import SelectProps from "./select.interface";
const Select = (props: SelectProps) => {
  const [inputVal, setInputVal] = React.useState(props.value);
  const changeValue = (e: any) => {
    setInputVal(e.target.value);
    // console.log(inputVal);
  };
  return (
    <div className="w-1/3 pl-2" key={props.name+Math.random()}>
      <select key={props.name+Math.random()}
     
        name={props.name}
        className="flex h-10 rounded-md border border-black/30  px-3 py-2 text-sm text-gray-600  placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        defaultValue={inputVal}  onChange={props.onChange}
     >
        <option value={inputVal} key={props.name+"000ertert"}>{inputVal.toUpperCase()}</option>
        {props.options && props.options.map((item:string,index:number)=>{
            
       return(
       <>
          {item !==inputVal ? <option value={item} onChange={(e)=>{changeValue(e)}} key={"key_"+index+Math.random()} id={props.name+"-"+item+"-"+index}>{item.toUpperCase()}</option> :<></>}
       </>
       ) 
        })}
      </select>
      
    </div>
  );
};
export default Select;
