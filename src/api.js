import axios from 'axios'

//development URL
// const BASE_URL = 'http://localhost:3001/api'    

// production URL
const BASE_URL = 'https://pharmacy-vs3p.onrender.com/api'


export async function fetchStores() {

    try {
        const response = await axios.get(`${BASE_URL}/pharmacies`)

        if(response.status !== 200) {
            throw new Error('THere is no result')
        }
        console.log(response.data)
        return response.data
    } catch (error) {
        throw new Error('There is no result for your query');

    }
}

export async function addOrderHandler(formData) {

    try {
        const response = await axios.post(`${BASE_URL}/orders`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(response.status !== 200) {
            throw new Error('THere is no result')
        }
        console.log(response.data)
        return response.data
    } catch (error) {
        throw new Error('There is no result for your query');

    }
}