import axios from "axios";

const INSTRUCTOR = "v1";
const COURSE_API_URL = "http://localhost:8080";
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/madeye/${INSTRUCTOR}`;

class PersonDataService{
    initNote(){
        let data = axios.get(`${INSTRUCTOR_API_URL}/note`);
      console.log('response', data);
    return data;
    }

    AddNote(major, note){
      console.log('data..', note.major);
      return axios.post(`${INSTRUCTOR_API_URL}/note/${major}`, note);
      // let data = axios.get(`${INSTRUCTOR_API_URL}/note`);
      // console.log('response', data);
      // return data;
    }
}
export default new PersonDataService();