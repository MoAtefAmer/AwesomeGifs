import { httpService } from './http.service';

const apiEndPoint = "https://api.giphy.com/v1/gifs";


// This should be in a .env file and called from there
const key ="F0O4azZgU69W59x1RrmHHwNz67sEGCqn"

export const fetchGifsService = {
    fetchTrendingGifs,
    searchGifs,
};


async function fetchTrendingGifs(limit,offset){

const data = await httpService.get(`${apiEndPoint}/trending`,{
    params:{
        api_key:key,
        limit:limit,
        offset: offset,
    }
})

return data;
}



async function searchGifs(limit,offset,query){

    const data = await httpService.get(`${apiEndPoint}/search`,{
        params:{
            api_key:key,
            limit:limit,
            offset: offset,
            q:query,
        }
    })
    
    return data;
    }
    

