import React,{useState} from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import Login from '../components/Login';
import SignUp from '../components/SignUp';




function SignInOutContainer() {
    const[value,setValue]=useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const paperStyle={width:340, margin:'20px auto'}
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box >
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
    return (
<Paper elevation={20} style={paperStyle}>
<Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
  <Tab label="Sign In" />
  
  <Tab label="Sign Up" />
</Tabs>

<TabPanel value={value} index={0}>
 <Login handleChange={handleChange}/>
</TabPanel>
<TabPanel value={value} index={1}>
  <SignUp/>
</TabPanel>
</Paper>
)
}

export default SignInOutContainer
