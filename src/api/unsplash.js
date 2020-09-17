import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 5FQ7B3GzLv0ahlODVKjkuLisOPIU_Sl2MAVuREQ6pQw"
    }
})