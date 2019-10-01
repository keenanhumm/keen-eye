import { API_KEY } from "../config";

export const makeFetch = ({
  url = null,
  method = 'GET',
  params = null,
  body = null,
  onSuccess = null,
  onError = error => console.error(error),
  useKey = false
}) => {
  if(!url) {
    return;
  }

  const allParams = useKey ? { api_key: API_KEY, ...params } : params;
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

export const handleInputChange = (event, clientThis, stateProperty) => {
  event.preventDefault();
  clientThis.setState({
    [stateProperty]: event.target.value
  });
}

export const navigateTo = (path = null) => {
  if(!path){
    return;
  }
  window.location.replace(`${window.origin}${path}`);
}