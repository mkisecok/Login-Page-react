import React from 'react'
import {Grid,Paper,Avatar,Typography,TextField,Button,Checkbox} from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {Formik,Field,Form, ErrorMessage} from 'formik'
import { FormHelperText } from '@mui/material';
import * as Yup from 'yup'


function SignUp() {
    const paperStyle={padding:20, height:'70vh', width:300, margin:'auto'};
    const avatarStyle={backgroundColor:'#1bbd7d'};
    const initialValues={
        name:'',
        email:'',
        phoneNumber:'',
        gender:'',
        password:'',
        confirmPassword:'',
        termsAndConditions:false,
    }
    const validationSchema=Yup.object().shape({
        name:Yup.string().min(3, 'Your name is too short').required(),
        email:Yup.string().email('Enter valid email').required(),
        phoneNumber:Yup.number().typeError('Enter valid Phone Number'),
        gender:Yup.string().oneOf(['male','female','other']).required(),
        password:Yup.string().min(8,'Password must min 8 character').required(),
        confirmPassword:Yup.string().oneOf([Yup.ref('password')], 'Thats not same with your password').required(),
        termsAndConditions:Yup.string().oneOf(['true'], 'Accept terms and conditions').required()
    })
    const onSubmit=(values,props)=>{
        console.log(values);
        console.log(props);
        setTimeout(()=>{
            props.resetForm()
            props.setSubmitting(false)
        },2000)
    }
    return (
     <Grid>
         <Paper  style={paperStyle}>
             <Grid align='center'>
                 <Avatar style={avatarStyle}>
                     <AddCircleOutlineOutlinedIcon/>
                 </Avatar>
                 <h2 style={{margin:0}}> Sign Up</h2>
                 <Typography variant='caption'>Please fill this form to create an account</Typography>
             </Grid>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {(props)=>(
                <Form>
 
                 <Field as={TextField} label='Name' name='name' variant="standard" placeholder='Enter your name' fullWidth  required helperText={<ErrorMessage  name='name'/>}/>
                 <Field as={TextField} label='Email' name='email' variant="standard" placeholder='Enter your Email'fullWidth  required helperText={<ErrorMessage  name='email'/>}/>
                 <Field as={TextField} label='Phone Number' name='phoneNumber' variant="standard" placeholder='Enter your Phone' fullWidth helperText={<ErrorMessage  name='phoneNumber'/>} />
                 <FormControl component="fieldset" style={{marginTop:5}}>
                <FormLabel component="legend">Gender</FormLabel>
                <Field as={RadioGroup}
                    aria-label="gender"
                   
                    name="gender"
                    style={{display:'initial'}}
                   
                >
                    <FormControlLabel value="female" control={<Radio color="success"/>} label="Female"  />
                    <FormControlLabel value="male" control={<Radio color="success"/>} label="Male" />
                    <FormControlLabel value="other" control={<Radio color="success"/>} label="Other" />
                </Field>
                </FormControl>
                <FormHelperText> <ErrorMessage  name="gender"/></FormHelperText>
                 <Field as={TextField} label='Password' name='password' variant="standard" placeholder='Enter your Password'type='password' fullWidth  required  helperText={<ErrorMessage  name='password'/>}/>
                 <Field as={TextField} label='Confirm Password' name='confirmPassword' type='password' placeholder='Confirm your Password'variant="standard" fullWidth  required  helperText={<ErrorMessage  name='confirmPassword'/>}/>
                 <FormControlLabel control={<Field as={Checkbox}  name='termsAndConditions' />} label="I accept the terms and conditions" />
                 <FormHelperText> <ErrorMessage  name='termsAndConditions'/></FormHelperText>
                 <Button type='submit' color='primary' disabled={props.isSubmitting} variant='contained'>{props.isSubmitting?'Loading':'Sign Up'}</Button>
             

                    </Form>
                )}
            </Formik>

            
             
         </Paper>

     </Grid>
    )
}

export default SignUp
