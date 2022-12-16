import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: 'nittcwind',
    apiKey: process.env.API_KEY,
})