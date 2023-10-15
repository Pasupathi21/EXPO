import { Button } from '@mui/material'
import { styled } from '@mui/system'


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


