import '../styles/globals.css'
import { useState } from 'react';
import type { AppProps } from 'next/app'
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core'
import { ApplicationContainer } from "../components/ApplicationContainer";

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{colorScheme}}
      >
        <ApplicationContainer>
        <Component {...pageProps} />
        </ApplicationContainer>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
