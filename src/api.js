import axios from "axios"
const searchImages = async (term,set)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID qY6hkc6ErGbdzVnDQCsTaoGSLq2UaFj5cI10AjUUvF8'
        },
        params: {
            query: term
        }
    })
    set(response.data.results);
}
export default searchImages;