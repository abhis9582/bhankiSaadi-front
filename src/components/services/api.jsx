import axios from "axios";


export function getdata(url){
    axios.get(url)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    })
}

export function postData(url, data){
    axios.post(url, data)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    })
}