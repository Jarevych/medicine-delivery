import axios from 'axios'

const BASE_URL = 'http://localhost:3001/api'

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