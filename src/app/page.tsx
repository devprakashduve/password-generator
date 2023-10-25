"use client"

import {useState} from "react"

export default function Home() {
 const [randomPassword,setRandomPassword]=useState("adsfkahdka")
 const [passwordLength,setPasswordLength]=useState(10)
 const [numbers,setNumbers]=useState(false)
 const [speacialChar,setSpeacialChar]=useState(false)
const changeLenght=(e:any)=>{
const value=e.target.value;
setPasswordLength(value)
}
const enableNumbers=()=>{
 setNumbers((prev)=> !prev)
 
}
const enableSpecialChar=()=>{
  setSpeacialChar((prev)=> !prev)
 }

 const generatePassword=()=>{
  setRandomPassword("")
  const char:string="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let val:any=""
  val+=char
  if(numbers){
    val+="1234567890";
  }
  if(speacialChar){
    val+="!@#$%^&*(){}[]_+=";
  }
  let result="";
  for (let i = 0, j = passwordLength-1; i <passwordLength; i += 1, j -= 1) {
    const index= Math.floor(Math.random()*val.length);
    result += val[index]; 
  }
  setRandomPassword(result)
 }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="w-full  py-20 px-20 items-stretch  md:w-1/2">
    <div className="flex w-full items-center space-x-2 ">
  <input
    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="text"
    placeholder="Random Password"
    value={randomPassword}
  />
  <button
  onClick={generatePassword}
    type="button"
    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    Generate
  </button>
</div>
<div className="flex w-full h-10  my-8 items-center space-x-2">

  <input
    className="flex w-50 rounded-md border border-black/30 bg-transparent px-1 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="range"
    name="passwordLength"
    min="0"
    max="26"
    value={passwordLength}
    onChange={(e)=>{ changeLenght(e); generatePassword()} }
  />: {passwordLength}
  
   <input
    className="flex w-10 rounded-md border border-black/30 bg-transparent px-1 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="checkbox"
    name="addNumbers"
    onChange={()=>{enableNumbers(); generatePassword()}}
    checked={numbers}
  /> : Numbers
  <input
    className="flex w-10 rounded-md border border-black/30 bg-transparent px-1 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="checkbox"
    name="addSpecialCharacters"
    
    onChange={()=>{enableSpecialChar(); generatePassword()}}
    checked={speacialChar}
  />: Speacial  Char

</div>
</div>
    </main>
  )
}
