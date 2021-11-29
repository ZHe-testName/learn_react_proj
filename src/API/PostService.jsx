import axios from "axios";

export default class PostService {
    static async getAll (){
        try {
            return await axios.get('https://jsonplaceholder.typicode.com/posts')
                        .then(res => res.data.slice(0, 40));
        } catch (error) {
            console.log(error);
        }
    }
};