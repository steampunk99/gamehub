import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params: {
        key:"c55e5859c51d4fb48a3993eaebc0fc6e"
    }
})