import { API_KEY } from "../config";

export const makeFetch = ({
  url = null,
  method = 'GET',
  params = null,
  body = null,
  onSuccess = null,
  onError = error => console.error(error)
}) => {
  if(!url) {
    return;
  }

  const allParams = { api_key: API_KEY, ...params }
  const queryString = Object.keys(allParams).map(key => '?' + key + '=' + allParams[key]).join('&');

  fetch(url+queryString, {
    method,
    body,
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .then(response => {
      if(onSuccess) {
        onSuccess(response);
      } else {
        return response;
      }
    }).catch(error => onError(error));
}