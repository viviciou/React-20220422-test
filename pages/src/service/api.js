import ajax from '../utils/ajax';
const apiUrl = window.loaction.href;
console.log('apiUrl',apiUrl)

// api
export const getApiUrl = ({token}) => {
  const url = `${apiUrl}getApi`;
  return ajax(url,'GET',token)
}