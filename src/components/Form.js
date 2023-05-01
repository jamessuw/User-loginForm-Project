import React from 'react';
import img1 from '../assets/img-1.png';
import {useForm} from 'react-hook-form';
import { useState } from "react";



export default function Form() {

    const {register, handleSubmit, watch, formState:{errors}} = useForm()
    const onSubmit = data =>console.log(data);

    console.log(watch('username'));

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
      };

  return (
   <section>
    <div className='register'>
        <div className='col-1'>
            <h2>Sign In</h2>
            <span>register and enjoy the service</span>
            <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
           <input type='text'{...register("username",{required:true, maxLength:10})}placeholder='username'  />
                <input type={passwordShown ? "text" : "password"}  {...register("password",{required:true, maxLength:10})}placeholder='password' />
                <button  className="pass-btn" onClick={togglePassword}>Show Password</button>
                <input type={passwordShown ? "text" : "password"} {...register("comfirmpwd",{required:true, maxLength:10})}placeholder='comfirm password'/>
                <button className="pass-btn" onClick={togglePassword}>Show Password</button>
                <input type='text' {...register("mobile",{required:true, maxLength:10})}placeholder='mobile number'/>
      <div className='validation-text'>        

<span className='valid-error'>{errors.mobile?.type ==="MaxLenght" && "MaxLenght is Exceed"}</span>
<span className='valid-error'>{errors.username?.type ==="required" && "Username is required"}</span>
<span className='valid-error'>{errors.password?.type ==="required" && "Password is required"}</span>
<span className='valid-error'>{errors.comfirmpwd?.type ==="required" && "Comfirm password is required"}</span>
<span className='valid-error'>{errors.mobile?.type ==="required" && "Mobile Number is required"}</span>
</div>  
                <button className='btn'> Sign In</button>



            </form>
        </div>
        <div className='col-2'>
<img src={img1} alt=''/>

        </div>
        <div className='col-3'></div>
    </div>
   </section>
  )
}
