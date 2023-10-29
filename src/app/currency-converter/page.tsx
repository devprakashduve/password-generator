"use client";
import React from "react";
import InputBox from "../../../components/input";
import Select from "../../../components/select";
import useApi from "../custom-hooks";

const CurrencyConverter = () => {
  const [currencyFrom, setCurrencyFrom] = React.useState<string>("usd");
  const [currencyTo, setCurrencyTo] = React.useState<string>("inr");
  const [currencyList, setCurrencyList] = React.useState<string[]>([]);
  const [currencyInfo, setCurrencyInfo] = React.useState<any>({});
  const [amount, setAmount] = React.useState<number>(1);
  const [convertedAmount, setConvertedAmount] = React.useState<number>();

  const apiSource = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyFrom}.json`;

  const [data, loading, error] = useApi(apiSource);
 
  
  const convert = ()=> {const val=amount * currencyInfo[currencyTo];
    setConvertedAmount(val);}
 
  React.useEffect(() => {
    
    setCurrencyTo((prev)=>prev);
    let receivedData = data[currencyFrom];
    if (receivedData != null && receivedData != undefined) {
      setCurrencyList(Object.keys(receivedData));
      setCurrencyInfo(receivedData);
     
     
    }
     convert();
   
  }, [data, currencyFrom, currencyTo, amount]);
  
 
  const handleOptionChange = (e: any) => {
    const newSelectedOption = e.target.value;
    setCurrencyFrom((prev)=>newSelectedOption);
    
  };
  const handleCurrencyChangeTo = (e: any) => {
    const newSelectedOption = e.target.value;
    setCurrencyTo((prev)=>newSelectedOption);
    
  };

  

  const handleOptionOne = (e: any) => {
    const value = e.target.value;
    setAmount(value);
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
            Currency Converter
          </h2>
          <p className="text-sm text-gray-300 px-8">
            You check currency price as per latest rate of exchange
          </p>
          <p className="text-sm text-red-300 px-8">{error && error}</p>
          <p className="text-sm text-green-300 px-8">
            {!loading ? "" : "Loading ....."}
          </p>
          <div className="">
            <div className="flex text-center p-5 flex-auto justify-center">
              <InputBox
                type={"number"}
                name={"currencyOne"}
                value={amount}
                placeholder={"Please enter value"}
                onChange={handleOptionOne}
              />
              <Select
                name={"currencyOneOption"}
                placeholder={"select option"}
                options={currencyList}
                value={currencyFrom}
                onChange={handleOptionChange}
              />
            </div>
            <div className="flex text-center p-5 flex-auto justify-center">
              <InputBox
                type={"number"}
                name={"currencyTwo"}
                value={convertedAmount}
                placeholder={"Please enter value"}
              />
              <Select
                name={"currencyTwoOptions"}
                placeholder={""}
                options={currencyList}
                value={currencyTo}
                onChange={handleCurrencyChangeTo}
              />
            </div>

            <div className="p-3  mt-2 text-center space-x-4 md:block">
              <button className="mb-2 md:mb-0 bg-white px-4 py-4 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100" onClick={convert}>
                convert from {currencyFrom.toUpperCase()} to {currencyTo.toUpperCase()}
              </button>
              {/* <button className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">
                Reset
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrencyConverter;
