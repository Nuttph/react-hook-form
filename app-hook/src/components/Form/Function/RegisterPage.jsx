import React, { useState } from 'react'
import {Controller, useForm} from "react-hook-form"
import TextField from '@mui/material/TextField';
const RegisterPage = () => {
    const [openPass,setOpenPass] = useState(false)
    const {
        control,
        handleSubmit,
        register,
        reset,
        watch,
        formState:{
            errors
        }
    } = useForm()

    const onSubmit = (data) =>{
        console.log(data);
        // reset();
    }

    const password = watch("pass")

  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className='text-blue-700 font-bold text-[40px]'>
            Register
        </h1>
        <button onClick={()=>{
            setOpenPass(!openPass)
        }} className='bg-yellow-400 mb-4 hover:bg-yellow-600 duration-300 w-[400px] py-1 rounded-md font-semibold cursor-pointer'>Open password</button>
        <form onSubmit={handleSubmit(onSubmit)} className='w-[400px] flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
                <Controller
                name='username'
                control={control}
                rules={{
                    required:"กรุณากรอกชื่อ",
                    minLength:{
                        value:8,
                        message:"ต้องมีตัวอักษรอย่างน้อย 8 ตัว"
                    }
                }}
                render={({field})=>(
                    <TextField
                    {...field}
                    label="Username"
                    error={!!errors.username}
                    />
                )}
                />                    
                {errors.username && <span className='text-red-600'>{errors.username.message}</span>}
            </div>
            <div className='flex flex-col gap-2'>
                
                <Controller
                name='email'
                control={control}
                rules={{
                    required:"กรุณากรอกอีเมล",
                    pattern:{
                        value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message:"กรุณากรอกอีเมลให้ถูกต้อง"
                    }
                }}
                render={({field}) => (
                    <TextField
                    {...field}
                    label="Email"
                    error={!!errors.email}
                    />
                )}
                />
                {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
            </div>
            <div className='flex flex-col gap-2'>
                <Controller 
                name='pass'
                control={control}
                rules={{
                    required:"กรุณากรอกรหัสผ่าน",
                    pattern:{
                        value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                        message:"รหัสผ่านต้องมีตัวอักษรพิมพ์ใหญ่ พิมพ์เล็ก ตัวเลข และอักขระพิเศษ รวมกันอย่างน้อย 8 ตัว"
                    }
                }}
                render={({field})=>(
                    <TextField
                    {...field}
                    label="Password"
                    error={!!errors.pass}
                    />
                )}
                />
                {errors.pass && (<span className='text-red-600'>{errors.pass.message}</span>)}
            </div>
            <div className='flex flex-col gap-2'>
                <Controller
                name='cpass'
                control={control}
                rules={{
                    required:"กรุณากรอกรหัสผ่าน",
                    validate:(value)=>(
                        value === password || "รหัสผ่านไม่ตรงกัน"
                    )
                }}
                render={({field})=>(
                    <TextField
                    {...field}
                    label="Confirm password"
                    error={!!errors.cpass}
                    />
                )}
                />
                {errors.cpass && <span className='text-red-600'>{errors.cpass.message}</span>}
            </div>
            <button className='bg-blue-400 hover:bg-blue-600 duration-300 w-full py-2 rounded-lg cursor-pointer'>Sign up</button>
        </form>
    </div>
  )
}

export default RegisterPage