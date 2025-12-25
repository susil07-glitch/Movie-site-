import axios from 'axios'
import { Api_key } from '../src/Geners/Geners'
 export const TMDBTOKEN='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTMzY2Y2NmIzMzVjMzIxN2ZkOWMyNmM5NGQ0YzhmNyIsIm5iZiI6MTc2Mjc0MzMwNy43NjE5OTk4LCJzdWIiOiI2OTExNTQwYmU5YTBlMTUyN2NkMjVhNzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MHYbgJvCgmPsRGMemrO-EISSOUN_JlJCn1hsFuchrwg'

 const  API=axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    headers:{
        'Content-Type' : "application/json",
        'accept':'application/json',
        Authorization:TMDBTOKEN
    }
})
export default API