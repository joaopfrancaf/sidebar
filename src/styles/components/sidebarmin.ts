import { styled } from '../stitches.config'

export const DivSidebarminStyled = styled('div', {
    height: '100vh',
    width: '4.875rem',
    backgroundColor: '$green',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px',
})

export const DivLogoStyled = styled('div', {
    height: '4.75rem',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: '0 2rem 0 1.75rem',

    button: {
        backgroundColor: '$green',
        borderStyle: 'none',
    },

    '&:hover': {
        backgroundColor: '$lightgreen',

        button: {
            backgroundColor: '$lightgreen',
        }
    },
})

export const DivNavtyled = styled('div', {
    height: '4rem',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    padding: '0 2rem 0 1.75rem',

    fontWeight: '500',

    '&:hover': {
        backgroundColor: '$lightgreen',
        borderRadius: '1rem',
    }
})

export const DivFooter = styled('div', {
    backgroundColor: '$lightgreen',

    height: '3.75rem',
    marginTop: 'auto', //faz ficar em baixo

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: 'stretch',
})