import axios from 'axios';
//const STUDENT_BASE_REST_API_URL2 ="http://localhost:8080/api/v1/books";
const STUDENT_BASE_REST_API_URL ="http://localhost:8080/api/v1/books/get";
const STUDENT_BASE_REST_API_URL1 ="http://localhost:8080/api/v1/books/get/book_id";
 const CREATE_URL="http://localhost:8080/api/v1/books/post";
 const UPDATE_URL="http://localhost:8080/put/book_id";
 const DELETE_URL=`http://localhost:8080/api/v1/books/delete`;
 
class ArtService{
    getUsers(){
        return axios.get(STUDENT_BASE_REST_API_URL)
    }
    create(Art)
    {
        return axios.post(CREATE_URL,Art)
    }
    getuserid(book_id){                                                                                                            
        return axios.get(STUDENT_BASE_REST_API_URL1+'/'+book_id);
    }
    delete(book_id)
    {
        return axios.delete(DELETE_URL+'/'+book_id);
    }
    update(book_id){
        return axios.put(UPDATE_URL + '/' + book_id);
    }
   
}
export default new ArtService();