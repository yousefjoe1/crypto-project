import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const crptNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_CRYPTO_API_KEY
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'


const crptNewsRequiest = (url)=> ({url,headers:crptNewsApiHeaders})

export const crptNewsApi = createApi({
    reducerPath:'crptNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=> ({
        getCryptosNews: builder.query({
             query: ({newsCategory,count})=> crptNewsRequiest(`/news/search?q=${newsCategory}&safesearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const {useGetCryptosNewsQuery} = crptNewsApi;