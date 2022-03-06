import axios from "axios";

export default axios.create({
  baseURL: "https://react-crud-pi.vercel.app:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});
