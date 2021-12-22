import React from 'react'

const UseStateObject = () => {
    const [myObject, setMyObject] = React.useState({
        myName:"Husain Burhanpurwala", myAge:20, degree:"B.Tech", rollNo: 55, channel:"will create" 
    });

    const changeObject = () => {
        setMyObject({...myObject, myAge:26});
    }

    return (
        <div>
            <h1 className="h1style">Name: {myObject.myName} & Age: {myObject.myAge}
            & Degree: {myObject.degree}</h1>
            <button className="btn" onClick={changeObject}>Update</button>
        </div>
    )
}

export default UseStateObject
