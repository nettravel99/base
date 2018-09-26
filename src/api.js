import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios
        .post("http://127.0.0.1:3050/api/auth", { credentials })
        .then(res => {
          console.log("returned data = ", res.data.data);
          return res.data.data;
        })
  }
};
