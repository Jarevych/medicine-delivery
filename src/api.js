import axios from 'axios'



export async function fetchStores() {


    try {
        const response = await axios.get('https://65e3847288c4088649f5e0a4.mockapi.io/api/Pharm')

        if(response.status !== 200) {
            throw new Error('THere is no result')
        }
        console.log(response.data)
        return response.data
    } catch (error) {
        throw new Error('There is no result for your query');

    }
}