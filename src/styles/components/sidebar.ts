import { styled } from '../stitches.config'

export const DivSideBarContainerStyled = styled('div', {
    height: '100vh',
    width: '15.625rem',
    backgroundColor: '$green',
})

export const DivLogoStyled = styled('div', {
    height: '4.75rem',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: '0 2rem 0 1.75rem'
})

export const DivNavtyled = styled('div', {
    height: '4.25rem',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    padding: '0 2rem 0 1.75rem',

    img: {
        marginRight: '1rem'
    }
})

export const DivFooter = styled('div', {
    border: 'solid',

    height: '3.75rem',

    
})