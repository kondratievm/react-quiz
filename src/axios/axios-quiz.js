import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-f5dfc-default-rtdb.firebaseio.com/'
})
