import axios from 'axios';
export default axios.create({
  baseURL: 'https://demoironcrm.azurewebsites.net',
  // headers: {
  //   Accept: 'application/json',
  //   'Content-Type': 'application/x-www-form-urlencoded',
  // },
});
