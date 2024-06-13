import axios from "axios";

const SCORE_API_URL = 'http://localhost:8080/score';

export const getScore = () => axios.get(SCORE_API_URL);

export const incrementScore = () => axios.post(`${SCORE_API_URL}/increment`);
