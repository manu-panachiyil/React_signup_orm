
import { useState } from 'react';
import './App.css';
import { TextField, Button } from '@mui/material';
import img from './img/images.png'

import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';



function App() {

  const [uname, setUname] = useState('')
  const [email, setEmail] = useState('')
  const [psswrd, setPsswrd] = useState('')
  const [confirm, setConfirm] = useState('')
  const [isPwd, setIsPwd] = useState(true)
  const [isUname, setIsUname] = useState(true)
  const [isEmail, setIsEmail] = useState(true)
  const [isConfirm, setIsConfirm] = useState(true)
  const [error, setError] = useState(true)
  const [isEmailVal, setIsEmailVal] = useState(true)

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault()
    setShowPassword(!showPassword);
  };

  const [showConfirm, setShowConfirm] = useState(false);
  const toggleConfirmVisibility = (e) => {
    e.preventDefault()
    setShowConfirm(!showConfirm);
  };


  const getUserDataName = (e) => {

    console.log(e.target.value);

    const {name,value} = e.target;
    
      if(name === 'uname'){
        setUname(value)
        setIsUname(true)
      }
      else if(name === 'email'){
        setEmail(value)
        setIsEmail(true)
      }
    
   
  }

   console.log(uname,email);

  const getUserData = (e) => {

    e.preventDefault();

    const {name,value} = e.target;
    console.log(value)

          if(!!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/)){
            if(name === 'psswrd'){
              setPsswrd(value)
              setIsPwd(false)
              
            }
            else if(name === 'confirm'){
              setConfirm(value)
              setIsConfirm(true)
            }
          }
          else{
            if(name === 'psswrd'){
              setPsswrd(value)
              setIsPwd(true)
            }
            else if(name === 'confirm'){
              setConfirm(value)
              setIsConfirm(true)
          }   
      
      
      }
    }

 

  const handleSubmit = (e) => {

    e.preventDefault();

    if(!uname && !email && !confirm){
      setIsUname(false)
      setIsEmail(false)
      setIsConfirm(false)
    }else if(!uname && !email){
      setIsUname(false)
      setIsEmail(false)
    }
    else if(!email && !confirm){
      setIsConfirm(false)
      setIsEmail(false)
    }else if(!uname && !confirm){
      setIsUname(false)
      setIsConfirm(false)
      }else if(!uname){
        setIsUname(false)
      }
      else if(!email){
        setIsEmail(false)
      }
      else if(!confirm){
        setIsConfirm(false)
      }
      else if(uname === null){
        setIsUname(false)
      }
    else{
      if(!email.includes('@')){
          setIsEmailVal(false)
      }
      else{

        setIsEmailVal(true)

        if(psswrd === confirm){
            alert(`Registration SuccessFull : ${uname} : ${email}`)
            handleReset();
        }
        else
        {
          setError(false)
          
        }
    }
    }
    
  }
  
  const handleReset = (e) => {
   
    setUname('')
    setEmail('')
    setPsswrd('')
    setConfirm('')
    setIsPwd(true)
    setError(true)
    setIsUname(true)
    setIsEmail(true)
    setIsConfirm(true)
    setIsEmailVal(true)
  }


  return (
    <div className="text-3xl bg-white w-96 shadow-xl mx-auto rounded h-auto mt-10">

     <div className='flex flex-wrap justify-center pt-7 pb-6'>

        <img className="max-h-20 w-12" src={img} alt="" />
          <h2 className=" text-blue-600 font-mono ps-2"> sign up</h2>
     </div>
      <form onSubmit={handleSubmit}>

        <div className="mx-auto">
        <TextField  label="Enter your Name" variant="outlined" className="w-64" name="uname" onChange={(e) => getUserDataName(e)} value={uname || ''} />
        </div>

        { !isUname && <div>
          <p className='text-danger text-xs mt-2'>* Mandatory Field *</p>
        </div>
        }

        <div className="mx-auto mt-3">
        <TextField  label="Email id" name="email" onChange={(e) => getUserDataName(e)}  variant="outlined" className="w-64" value={email || ''}/>
        </div>

        { !isEmailVal && <div>
          <p className='text-danger text-xs mt-2'>* Please enter valid Email *</p>
        </div>
        }

        { !isEmail && <div>
          <p className='text-danger text-xs mt-2'>* Mandatory Field *</p>
        </div>
        }

        <div className="mx-auto mt-3">
        <FormControl  variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            className="w-64"
            onChange={(e) => getUserData(e)} 
            name='psswrd'
            value={psswrd || ''}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={togglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          </FormControl>      
        </div>
        
        { !isPwd? " " : <div>
          <p className='text-success text-xs mt-2'>Password should contain [1,@,A,a,8]</p>
        </div>
        }
       

        <div className="mx-auto mt-2">
        <FormControl  variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            className="w-64"
            id="outlined-adornment-password"
            onChange={(e) => getUserData(e)} 
            name='confirm'
            value={confirm || ''}
            type={showConfirm ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleConfirmVisibility}
                  edge="end"
                >
                  {showConfirm ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
          </FormControl>

        </div>

        { !isConfirm && <div>
          <p className='text-danger text-xs mt-2'>* Mandatory Field *</p>
        </div>
        }

        { !error && <div>
          <p className='text-danger text-xs mt-2'>* Password Missmatch *</p>
        </div>
        }

        <div className="mx-auto mt-3 w-64 pb-3">
        <Button type='submit' disabled={!isPwd ? false : true} variant="contained">Register</Button>
        <Button onClick={handleReset} variant="outlined" className="ms-5">Reset</Button>
        </div>
        
      </form>
      <div>
        <p className="text-xs pb-5">Already have an account : <span className="text-blue-600">Login Here</span></p>
      </div>
    </div>
  );
}

export default App;
