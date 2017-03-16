import axios from 'axios';

const API_KEY = 'ee395530ff25b5c0d6826bbbd4caefeb';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  //axios allows us to make simple ajax-like get requests, without having to import the whole jQuery library
  const request = axios.get(url); //returns promise

  return {
    type: FETCH_WEATHER,
    payload: request //exported as a promise, goes through redux-promise middleware that stops the action, once the promise resolves it repackages the resolved promise as a new action to the reducer. Therefore, reducer never receives this raw, pending promise - only the resolved one. The reducer never has to deal with promises, only with the data that those promises spit out
  };//the action
}
