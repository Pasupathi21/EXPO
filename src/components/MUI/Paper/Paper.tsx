import React from 'react'

// *********** MUI
import { Paper } from '@mui/material'
import { theme } from '../../../theme/AppTheme'


export const PaperContainer = ({ children }: any) => {
    return <Paper sx={{
        padding: '10px 10px 10px 10px',
        height: '100%',
        width:'100%',
        opacity: `${theme.palette.action.activatedOpacity}`,
        borderRadius: 2
        // background: 'green',
    }}>{children}</Paper>
}