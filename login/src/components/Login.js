import { Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Field, Form, Formik, ErrorMessage} from 'formik'
import *as Yup from 'yup'
import '../App.css'

function Login({handleChange}) {
    const paperStyle={padding:20, height:'70vh', width:300, margin:' 0 auto'};
    const avatarStyle={backgroundColor:'#1bbd7d'};
    const btnStyle={margin:'8px 0'};
    const initialValues={
        username:'',
        password:'',
        remember:false,
    };
    const validationSchema=Yup.object().shape({
        username:Yup.string().email('Enter a valid email adresse for username').required(),
        password:Yup.string().min(8,'Password must min 8 character').required()
    })
    const onSubmit=(values,props)=>{
        
        console.log(values);
        setTimeout(()=>{
            props.resetForm()
            props.setSubmitting(false)
        },2000)
       console.log(props);
    }
    return (
    <div>
            <Grid>
                <Paper  style={paperStyle}>
                    <Grid align='center'>  
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Sign In</h2>  
                    </Grid>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props)=>(
                    <Form>
                    <Field as={TextField }  label="Username" name='username' placeholder='Enter Username' variant="standard" fullWidth  required helperText={<ErrorMessage name='username'/>}/>
                    <Field as={TextField }  label="Password" name='password' placeholder='Enter Password' type='password' variant="standard" fullWidth  required helperText={<ErrorMessage name='password'/>}/>
                    <Field as={FormControlLabel}  name='remember' control={<Checkbox  color='primary' />} label="Remember me" />
                    <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting} style={btnStyle} fullWidth>{props.isSubmitting?'Loading':'Sign In'}</Button>
                    </Form>
                        )}
                   
                    </Formik>
                    <Typography>
                         <Link href="#" >Forget Password?</Link>
                    </Typography>
                    <Typography>Do you have an account?
                         <Link href="#" onClick={()=>handleChange('event',1)} >Sign Up</Link>
                    </Typography>

                </Paper>
            </Grid>
    </div>
    )
}

export default Login
