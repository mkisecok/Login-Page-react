import { Grid, Paper } from '@mui/material'
import React from 'react'


function Login() {
    const paperStyle={padding:20, height:'70vh', width:300, margin:'auto'}
    return (
        <div>
            <Grid>
                <Paper  elevation={10} style={paperStyle}>
                Sign In
                </Paper>
            </Grid>
        </div>
    )
}

export default Login
