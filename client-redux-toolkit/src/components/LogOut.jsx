import React from "react";
import { useEffect } from "react";
import { LOGOUT} from "../actions/types"

function Logout() {
    
    useEffect(() => {
        LOGOUT();
    })
}

export default Logout
