import { Button } from '@mui/material'
import { styled } from '@mui/system'
import { LoadingButton } from '@mui/lab'


export const Button_v1 = styled(Button)(({ theme }) => ({
    width: '100%',
    borderRadius: 0,
    borderStyle: 'dashed',
}))

export const Button_v2 = styled(Button)(({theme}) => ({
    borderStyle : 'none',
    height: 'auto'
}))

export const Button_v3 = (props: any) => <Button variant='contained' {...props } /> 

export const LoadingButton_v1 = styled(LoadingButton)(({ theme }) => ({
    borderStyle: 'none',
    borderRadius: '0',
    width: '100%'
}))

