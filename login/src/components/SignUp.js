import React from 'react'
import {Grid,Paper,Avatar,Typography,TextField,Button,Checkbox} from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import '../App.css'

function SignUp() {
    const paperStyle={padding:20, height:'70vh', width:300, margin:'auto'};
    const avatarStyle={backgroundColor:'#1bbd7d'}
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
             <form>
                 <TextField label='Name' variant="standard" placeholder='Enter your name' fullWidth  required/>
                 <TextField label='Email' variant="standard" placeholder='Enter your Email'fullWidth  required/>
                 <TextField label='Phone Number' variant="standard" placeholder='Enter your Phone' fullWidth  />
                 <FormControl component="fieldset" style={{marginTop:5}}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    defaultValue="female"
                    name="radio-buttons-group"
                    style={{display:'initial'}}
                >
                    <FormControlLabel value="female" control={<Radio color="success"/>} label="Female"  />
                    <FormControlLabel value="male" control={<Radio color="success"/>} label="Male" />
                    <FormControlLabel value="other" control={<Radio color="success"/>} label="Other" />
                </RadioGroup>
                </FormControl>
                 <TextField label='Password' variant="standard" placeholder='Enter your Password'type='password' fullWidth  required/>
                 <TextField label='Confirm Password' type='password' placeholder='Confirm your Password'variant="standard" fullWidth  required/>
                 <FormControlLabel control={<Checkbox />} label="I accept the terms and conditions" />
                 <Button type='submit' color='primary' variant='contained'>Sign Up</Button>
             </form>
             
         </Paper>

     </Grid>
    )
}

export default SignUp
