import React, { useId } from 'react'

function InputBox({
   label,
   amount,
   onAmountChange,
   onCurrencyChange,
   currencyOptions=[],
    selectCurrency ="usd",
    amountDisable = false,
    currencyDisable = false,
   className="",
}) { 
   const amountInputID = useId();
  return (
   <div className={`bg-white p-3 shadow-lg flex text-sm ${className}`}>
     <div className="w-1/2">
        <label htmlFor={amountInputID} className='text-black/40 inline-block mb-2'>
            {label}
        </label>
        <input id={amountInputID} type="number" className='outline-none w-full bg-transparent py-1.5' placeholder='Amount' disabled={amountDisable} value={amount} onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} />
     </div>
     <div className="flex flex-wrap justify-end w-1/2 text-right">
        <p className="text-black/40 w-full mb-2" >currency type</p>
        <select className='rounded-lg px-1 py-1 bg-gray-100 outline-none cursor-pointer' value={selectCurrency} onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}>
           {currencyOptions.map((currency)=>(
                <option key={currency} value={currency}>
               {currency}
                </option>
           ))}
        </select>
     </div>
   </div>
  );
}

export default InputBox;