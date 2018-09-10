import axios from "axios";

export function db(callBack) {
  console.log("Callback Function:", callBack);
  var results = "";
  //alert("Axios 1")
  axios
    .get("http://127.0.0.1:3050/api/dictionary/")
    .then(function(response) {
      console.log("Axios results: ", response.data.results[0].props);
      callBack(response.data.results[0].props); //response
      //  alert("InAxios", response)
    })
    .catch(function(error) {
      //alert("Axios ")
      callBack("Error occured retrieving data! " + error);
    });
}
