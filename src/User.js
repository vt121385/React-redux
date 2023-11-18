import React from "react";
const User = (props) => {
    console.log(props);
    const {data} = props
    return(
        <div>
            <h1>User Component</h1>
            <h4>Name : {data.name}</h4>
            <h4>Age : {data.age}</h4>
        </div>
    )
}
export default User;