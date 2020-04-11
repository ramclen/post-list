import Axios from "axios"

const base = "https://jsonplaceholder.typicode.com"

export default Axios.create({
  baseURL: base,
})