import React from "react";
import { useForm,Controller } from "react-hook-form";

const AdvanceForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      bio:''
    },
  });

  const onSubmit = (data) => {
    console.log("Test on submit")
    console.log("Data Form", data);
    reset()
  };

  return (
    <div className="flex flex-col">
      <div>AdvanceForm</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            {...register("name", { required: "กรุณากรอกชื่อ" })}
            placeholder="กรอกชื่อ"
            className="border p-2 w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            {...register("email", {
              required: "กรุณากรอกอีกเมล",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'อีเมลไม่ถูกต้อง'
              },
            })}
            className="border p-2 w-full"
            placeholder="กรอกอีเมล"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="bio">About me</label>
          <Controller
            name="bio"
            control={control}
            rules={{
              required:'กรุณากรอกเกี่ยวกับฉัน'
            }}
            render={({field})=>(
              <textarea
                {...field}
                id="bio"
                className="border p-2 w-full"
                placeholder="บอกอะไรเกี่ยวกับตัวคุณ"
              />
            )}
          />
          {errors.bio && <p className="text-red-500">
            {errors.bio.message}
            </p>}
        </div>
        <button>
          send
        </button>
      </form>
    </div>
  );
};

export default AdvanceForm;
