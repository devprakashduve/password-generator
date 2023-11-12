"use client";
import React, { useContext } from "react";
import InputBox from "../input";
import { EyeOffIcon, EyeIcon } from 'lucide-react'

import UserContext from "@/app/context/userContext";

const Login = () => {
  const [email, setEmail] = React.useState<string>("");
  const [isEmailValid,setIsEmailValid]=React.useState(false);
  const [password, setPassword] = React.useState<string>("");
  const [valid, setValid] = React.useState(false);
  const [passwordValidation,setPasswordValidation]=React.useState<any>("");
  
  const [loginStatus, setLoginStatus] = React.useState<string>("");
  const [showPassword,setShowPassword]=React.useState(false);
 
  const {setData}=useContext(UserContext);
 
const submitLogin=()=>{
    
    isEmailValid && valid ? (setData({email,password}), setLoginStatus("You are logged in")) :setLoginStatus("You are not authorised")
}
const handleUserName=(e:any)=>{
const value=e.target.value
validateEmail(value)
}

const validateEmail = (value: string) => {
    setEmail(value);
    // Define a regular expression pattern for a valid email address
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const isEmailValid = emailPattern.test(value);
    setIsEmailValid(isEmailValid);
    
    
  };

const passwordSwitch=()=>{
    setShowPassword((prev)=>!prev)
}


const handlePasswordChange = (e:any):void => {
  const newPassword = e.target.value;
  validatePassword(newPassword)
  setPassword(newPassword);
  setPasswordValidation("Password must meet criteria (at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character)");

};

const validatePassword = (value: string ) => {
    // Define your password validation criteria here
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*]/.test(value);
    const isLengthValid = value.length >= 8;

    // Check if all criteria are met
    const isPasswordValid =
      hasUpperCase && hasLowerCase && hasNumber && hasSpecialCharacter && isLengthValid;

    setValid(isPasswordValid);
  };
  return (
    <>
      <div
        className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-14 flex justify-center items-center inset-0 z-5 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
        id="modal-id"
      >
        <div className="absolute bg-white opacity-5 inset-0 z-0"></div>
        <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg border border-gray-300">
          <h2 className="text-xl text-center font-bold py-4 " key="h21">
          Login
          </h2>
          <p className="text-sm text-gray-300 px-8">
           {loginStatus}
          </p>
         
         
          <div className="">
            <div className="flex text-center p-5 flex-auto justify-center">
              <InputBox
                type={"text"}
                name={"email"}
                value={email}
                placeholder={"Please enter your email"}
                onChange={handleUserName}
              />
            </div>
           {!isEmailValid?  <p className="text-sm text-red-300 px-8 text-red">Invalid Email </p>:""}
            <div className="flex text-center p-5 flex-auto justify-center">
              <InputBox
                type= {  showPassword? "text" : "password"}
                name={"password"}
                value={password}
                placeholder={"Please enter your password"}
                onChange={handlePasswordChange}
              />
            <span className="eyeIcon" onClick={passwordSwitch}>  
            { showPassword? <EyeIcon /> : <EyeOffIcon/>}
             
              </span>
            
            </div>
            
           
            {valid ? (
        <p className="text-sm text-green-500 px-8">Password is strong</p>
      ) : (
        <p className="text-sm text-red-300 px-8">{passwordValidation}</p>
      )}
            <div className="p-2  mt-2 text-center space-x-4 md:block">
              <button className="mb-2 md:mb-0 bg-white px-2 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100" onClick={submitLogin}>
                Login Now
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
