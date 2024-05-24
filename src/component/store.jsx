import { createContext, useState } from "react";
import { arr } from "./catgories/laptops/Laptops";
export const procontext=createContext();
function Store(props){
 let [state,setstate]=useState(arr);
    return(
        <>
        <procontext.Provider value={state}>
{props.children}
        </procontext.Provider>
        </>
    )
}
export default Store;