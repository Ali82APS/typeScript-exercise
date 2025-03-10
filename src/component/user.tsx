import React from "react";

type USER = {
    name: string;
    age: number;
    hasChild: boolean;
    sum: (a:number, b:number) => number; 
}

// const User:React.FC<USER> = ({name,age,hasChild,sum}) => {
    
//     return(
//         <>
//             <h2>{name}</h2>
//             <h2>{age}</h2>
//             <h2>{hasChild}</h2>
//             <h2>{sum(8,2)}</h2>

//         </>
//     )
// }

function User ({name,age,hasChild,sum}: USER){
    
    return(
        <>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>{hasChild}</h2>
            <h2>{sum(8,2)}</h2>

        </>
    )
}

export default User