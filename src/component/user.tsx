import React from "react";

type UserMother = "X"| "y" | "z";

type USER = {
    name: string;
    father?: string;
    mother: UserMother;
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

function User ({name,age,hasChild,sum,father,mother}: USER){
    
    return(
        <>
            <h2>Name:{name}</h2>
            {
                father && <h2>Father name:{father}</h2>
            }
            <h2>Mother name:{mother}</h2>
            <h2>age:{age}</h2>
            <h2>Has child ? {`${hasChild}`}</h2>
            <h2>{sum(8,2)}</h2>

        </>
    )
}

export default User