
import { useState } from 'react';
import './App.css';
import { TextField, Button } from '@mui/material';
import img from './img/images.png'

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

  const getUserDataName = (e) => {
    //console.log(e.target.value);

    const {name,value} = e.target;
    if(!!value){
      if(name === 'uname'){
        setUname(value)
        setIsUname(true)
      }
      else if(name === 'email'){
        setEmail(value)
        setIsEmail(true)
      }
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
    else{
      if(psswrd === confirm){
          alert(`Registration SuccessFull : ${uname} : ${email}`)
      }
      else
      {
        setError(false)
        
      }
    }
    
  }
  
  const handleReset = () => {
   
    setUname('')
    setEmail('')
    setPsswrd('')
    setConfirm('')
    setIsPwd(true)
    setError(true)
    setIsUname(true)
    setIsEmail(true)
    setIsConfirm(true)
  }


  return (
    <div className="text-3xl bg-white w-96 shadow-xl mx-auto rounded h-auto mt-10">

     <div className='flex flex-wrap justify-center pt-7 pb-6'>

        <img class="max-h-20 w-12" src={img} alt="" />
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

        { !isEmail && <div>
          <p className='text-danger text-xs mt-2'>* Mandatory Field *</p>
        </div>
        }

        <div className="mx-auto mt-3">
        <TextField  label="Password" type="password" name="psswrd" onChange={(e) => getUserData(e)} autoComplete="current-password" className="w-64" value={psswrd || ''} />        
        </div>
        
        { !isPwd? " " : <div>
          <p className='text-success text-xs mt-2'>Password should contain [1,@,A,a,8]</p>
        </div>
        }
        <div className="mx-auto mt-2">
        <TextField label="Confirm Password" type="password" name="confirm" onChange={(e) => getUserData(e)} className="w-64" value={confirm || ''} />        
        </div>

        { !isConfirm && <div>
          <p className='text-danger text-xs mt-2'>* Mandatory Field *</p>
        </div>
        }

        { !error && <div>
          <p className='text-danger text-xs mt-2'>Password Missmatch</p>
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
