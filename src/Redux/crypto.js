import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const crptApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_CRYPTO_API_KEY
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const changesRequiest = (url)=> ({url,headers:crptApiHeaders})

export const crptApi = createApi({
    reducerPath:'crptApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=> ({
        getCryptos: builder.query({
             query: (count)=> changesRequiest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId)=> changesRequiest(`/coin/${coinId}`) 
        })
    })
})

export const {useGetCryptosQuery,useGetCryptoDetailsQuery} = crptApi;
