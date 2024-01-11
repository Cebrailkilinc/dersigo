//provider.js
"use client";
import { store } from '@/app/redux/store'
import { Provider } from 'react-redux'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'


export function Providers({ children }: any) {
    return (
        <Provider store={store} >
            <CacheProvider>
                <ChakraProvider>
                    {children}
                </ChakraProvider>
            </CacheProvider>
        </Provider>
    )
}