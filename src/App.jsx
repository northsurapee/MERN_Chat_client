import axios from "axios"
import { UserContextProvider } from "./UserContext";
import Routes from "./Routes";

function App() {
  if (import.meta.env.VITE_NODE_ENV === "development") {
    axios.defaults.baseURL = import.meta.env.VITE_DEV_API_BASE_URL;
  } else {
    axios.defaults.baseURL = import.meta.env.VITE_PRO_API_BASE_URL;
  }
  axios.defaults.withCredentials = true;

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App
