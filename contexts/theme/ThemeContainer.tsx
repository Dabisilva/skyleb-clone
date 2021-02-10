import React from 'react'

import { ColorModeProvider, CSSReset, ChakraProvider as ChakraThemeProvider } from '@chakra-ui/react'
import {ThemeProvider as EmotionThemeProvider} from '@emotion/react'
import customTheme from '../../styles/theme'


const ThemeContainer: React.FC = ({children}) => {
    return (
        <ChakraThemeProvider theme={customTheme}>
            <ColorModeProvider options={{initialColorMode : 'dark', useSystemColorMode: false}}>
                <EmotionThemeProvider theme={customTheme}>
                    <CSSReset/>
                    {children}
                </EmotionThemeProvider>
            </ColorModeProvider>
        </ChakraThemeProvider>
    )
}

export default ThemeContainer