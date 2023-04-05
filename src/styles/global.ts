import {globalCss} from "../styles/stitches.config"

export const globaStyles = globalCss ({
    /* default css */
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },

    body: {
        backgroundColor: '$bodybgcolor',
        color: '$textcolor',  /* texto cor */
        '-webkit-font-smoothing' : 'antialiased',
    },

    'body, input, textarea, button': {
        fontFamily: 'Poppins',
        fontWeight: 400,
    },

    
})