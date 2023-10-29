import React from "react";
import InputBox from "../../../components/input";
import Select from "../../../components/select";

const CurrencyConverter = () => {
//https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr.json

  return (
    <>
      <div
        className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-14 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
        id="modal-id"
      >
        <div className="absolute bg-white opacity-20 inset-0 z-0"></div>
        <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg border border-gray-300">
          <h2 className="text-xl text-center font-bold py-4 ">
            Currency Converter
          </h2>
          <p className="text-sm text-gray-300 px-8">
            You check currency price as per latest rate of exchange
          </p>
          <div className="">
            <div className="flex text-center p-5 flex-auto justify-center">
              <InputBox
                type={"number"}
                name={"currencyOne"}
                value={1}
                placeholder={"Please enter value"}
              />
              <Select
                name={"currencyOneOption"}
                placeholder={""}
                options={["usd", "inr", "uro"]}
                defaultOptions={"inr"}
              />
            </div>
            <div className="flex text-center p-5 flex-auto justify-center">
              <InputBox
                type={"number"}
                name={"currencyTwo"}
                value={1}
                placeholder={"Please enter value"}
              />
              <Select
                name={"currencyTwoOptions"}
                placeholder={""}
                options={["usd", "inr", "uro"]}
                defaultOptions={"usd"}
              />
            </div>

            <div className="p-3  mt-2 text-center space-x-4 md:block">
              <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                Convert
              </button>
              <button className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrencyConverter;
