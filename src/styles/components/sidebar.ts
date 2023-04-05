import { styled } from '../stitches.config'

export const DivSideBarContainerStyled = styled('div', {
    height: '100vh',
    width: '15.625rem',
    backgroundColor: '$green',

    display: 'flex',
    flexDirection: 'column',

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
    height: '4rem',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    padding: '0 2rem 0 1.75rem',

    fontWeight: '500',

    img: {
        marginRight: '1rem',
    },

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
    paddingLeft: '1.75rem',

    img: {
        borderRadius: 10,
    },

    div: {
        lineHeight: '1rem',
        marginLeft: 10,
        marginRight: '1.85rem',

        p: {
            fontSize: 'smaller'
        }
    },

    
})