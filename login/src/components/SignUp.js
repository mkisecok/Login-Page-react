import React from 'react'
import '../App.css'
import {Button, Divider, TextField} from '@material-ui/core'
import { Link } from 'react-router-dom'
function SignUp() {
    return (
        <div>
         

          <div className='icon'>
              <div className='icon_class'> </div>
              <div className='text'> Sign Up</div>
          </div>

          <div className='row'>
              <div className='col-6'> 
              <TextField id='firstname' type='text' variant='outlined' label='Enter First Name' fullWidth />
              </div>
              <div className='col-6'>
              <TextField id='lastname' type='text' variant='outlined' label='Enter Last Name' fullWidth />  
            </div>
          </div>

          <div className='row m-2'>
          <TextField id='email' type='text' variant='outlined' label='Enter Email' fullWidth />
          <TextField id='password' type='text' variant='outlined' label='Enter Password' fullWidth />
          <Button variant='contained' color='primary'>Create Account</Button>
          </div>
          <Divider variant='middle'/>
          <p className='text-center'>
              <Link to='\login'>
                  Already have an Account?
              
              </Link>
          </p>

        </div>
    )
}

export default SignUp
