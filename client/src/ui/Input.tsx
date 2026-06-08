import React from 'react'

function Input({type,name,value,label,placeholder,onChange}:any) {
  return (
    <div className='flex flex-col mt-4'>
      <label className='text-sm font-medium' htmlFor={name}>{label}</label>
        <input type={type} name={name} value={value} placeholder={placeholder} className='w-90 border border-gray-200 rounded-2xl py-2 px-4 mt-2 text-sm' onChange={onChange} />
    </div>
  )
}

export default Input