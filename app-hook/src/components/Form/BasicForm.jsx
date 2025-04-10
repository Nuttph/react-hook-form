import React, { useState } from "react";

const BasicForm = () => {
  const [dataForm, setDataForm] = useState({
    username: "",
    email: "",
    pass: "",
    cpass: "",
  });

  const [data,setData] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev)=>({
        ...prev,
        [name]:value
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
    if(dataForm.username.split() != "" && dataForm.cpass === dataForm.pass && dataForm.email.split() != ""){
        console.log(dataForm)
        setData([...data,dataForm]);
        console.log("Success")
    }else{
        console.log("Fail")
    }
  };
  return (
    <div className="flex flex-col">
      <div>Basic form</div>
      <form
        onSubmit={handleSubmit}
        className="w-[400px] bg-[#333] px-[50px] py-[20px] rounded-lg text-white flex flex-col gap-2"
      >
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            value={dataForm.username}
            onChange={handleChange}
            type="text"
            name="username"
            id="username"
            className="border outline-none rounded-md px-2 py-1 bg-[#4b4b4b] focus:bg-[#5c5c5c]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
          value={dataForm.email}
          onChange={handleChange}
            type="email"
            name="email"
            id="email"
            className="border outline-none rounded-md px-2 py-1 bg-[#4b4b4b] focus:bg-[#5c5c5c]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="pass">Password</label>
          <input
          value={dataForm.pass}
          onChange={handleChange}
            type="password"
            name="pass"
            id="pass"
            className="border outline-none rounded-md px-2 py-1 bg-[#4b4b4b] focus:bg-[#5c5c5c]"
          />
          <label htmlFor="cpass">Confirm Password</label>
          <input
          value={dataForm.cpass}
          onChange={handleChange}
            type="password"
            name="cpass"
            id="cpass"
            className="border outline-none rounded-md px-2 py-1 bg-[#4b4b4b] focus:bg-[#5c5c5c]"
          />
        </div>
        <button className="bg-[#7c7c7c] py-1 rounded-md hover:bg-[#5da054] duration-300 cursor-pointer mt-4">
          Register
        </button>
      </form>
      <div className="flex flex-col w-full mt-2">
        {data && (
            <table className="border table-auto border-collapse">
                <thead>
                    <tr>
                        <th className="border">no</th>
                        <th className="border">username</th>
                        <th className="border">email</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((item,index)=>(
                    <tr key={index}>
                        <td className="border px-2">
                            {index+1}
                        </td>
                        <td className="border px-2">
                            {item.username}
                        </td>
                        <td className="border px-2">
                            {item.email}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        )}
      </div>
    </div>
  );
};

export default BasicForm;
