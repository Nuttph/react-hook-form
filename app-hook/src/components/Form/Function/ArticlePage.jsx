import React from 'react'
import { useForm,Controller } from "react-hook-form"
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
const ArticlePage = () => {
    const {
        control,
        register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm()

    const onSubmit = (data)=>{
        console.log(data)
    }
    return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className='text-[40px] text-blue-7s00 font-bold'>Article</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='w-[350px] flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
                <Controller
                name="title"
                control={control}
                rules={{
                    required:"กรุณากรอกหัวข้อ",
                    minLength:{
                        value:8,
                        message:"กรุณากรอกหัวข้อให้เกิน 8 ตัวอักษร"
                    }
                }}
                render={({field})=>(
                    <TextField
                    {...field}
                    label="Title"
                    error={!!errors.title}
                    />
                )}
                />
                {errors.title && (<span className='text-red-600'>{errors.title.message}</span>)}
            </div>
            <div className='flex flex-col gap-2'>
                <Controller
                id="des"
                name='des'
                control={control}
                rules={{
                    required:"กรุณากรอกรายละเอียดบทความ",
                }}
                render={({field})=>(
                    <TextareaAutosize
                    label="Description"
                    {...field}
                    error={!!errors.des}
                    style={{ height: 150 }}
                    placeholder="Empty"
                    className={`border rounded-md p-2 ${errors.des ? "border-red-500 outline-none":"border-[#c0c0c0] outline-blue-400"}`}
                    />
                )}
                />
                {errors.des && (<span className='text-red-600'>{errors.des.message}</span>)}
            </div>

            <button className='w-full bg-yellow-500 hover:bg-yellow-600 duration-300 py-1 rounded-md cursor-pointer'>Send</button>
        </form>
    </div>
  )
}

export default ArticlePage