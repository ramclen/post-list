import Axios from "axios"

base = "https://jsonplaceholder.typicode.com"

export default Axios.create({
  baseURL: base,
})