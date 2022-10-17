import http from '../lib/http';

const fetchRandomMessage = () => http.get('/messages/random');

export default fetchRandomMessage;
