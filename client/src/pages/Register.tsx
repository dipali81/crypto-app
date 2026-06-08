import React, { useState } from 'react'
import Input from '../ui/Input';
import Crypto from '../ui/Crypto';

function Register() {
    const [form, setForm] = useState({
        name:"",
        email: "",
        password: ""
    })
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(form)
    }
    const handleChange = (e: any) => {
        const {name, value} = e.target;
        console.log(name,value)
        setForm({ ...form, [name]: value });
    }
    return (
        <>
            <h1 className="text-center font-bold mt-5 mb-5 text-2xl">Crypto Analytics Register</h1>
            <div className='flex flex-col items-center sm:flex-row gap-2 '>
                <div className='w-1/2 flex justify-center'>
                    <form onSubmit={handleSubmit}>
                        <Input type="text" value={form.name} label="Name" placeholder="Enter Name" onChange={handleChange} name="name" />
                        <Input type="email" value={form.email} label="Email Address" placeholder="Enter an email" onChange={handleChange} name="email" />
                        <Input type="password" value={form.password} label="Password" placeholder="Enter Password" onChange={handleChange} name="password" />
                      <div className='flex justify-center'>
                            <button className=' mt-4 rounded-2xl border border-gray-200 bg-black text-white px-6 py-1.5'>Login</button>
                        </div>
                    </form>
                </div>
                <div className='w-1/2'>
                    <Crypto />
                </div>
            </div>
        </>
    )
}

export default Register