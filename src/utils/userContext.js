import { createContext } from "react"

const userDetail = createContext({
    user: {
        name: "User",
        email: "sachin@gmail.com",
    }
})
export default userDetail;