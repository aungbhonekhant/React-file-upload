import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3030/api",
  headers: {
    token:
      "ShwePuu eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjk5ODUzYmE1ZTZjNjAyY2E0NjI0MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTEzMTQ2MCwiZXhwIjoxNjQ5MzkwNjYwfQ.wdP1qGvR9LhO4mTUJbOZyccM9D9uya1RZ27rwSZExA8",
    Accept: "application/json",
  },
});

export default API;
