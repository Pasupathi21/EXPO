import React from 'react'

// *********** MUI
import { Paper } from '@mui/material'


export const PaperContainer = ({ children }: any) => {
    return <Paper sx={{
        display: 'flex',
        justifyConstent: 'center',
        alignItems:'center',
        padding: '10px 10px 10px 10px',
        height: '100%',
        width:'100%',
        opacity: '0.4',
        borderRadius: 2
        // background: 'green',
    }}>{children}</Paper>
}