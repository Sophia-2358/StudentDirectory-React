import { useState } from "react";
import FormContainer from "../components/FormContainer";
import HeaderContainer from "../components/HeaderContainer";
import ListContainer from "../components/ListContainer";

const StudentPage = () => {
    const [students, setStudents] = useState([]);

    const getData = async () => { //async means non blocking code hindi iintayin ni react na matapos lahat bago mag proceed sa susunod na code
        const reponse = await fetch('http://127.0.0.1:3000/student/');
        if(!reponse.ok) {
            throw new Error('Unable to fetch data');

        }
        const data = await reponse.json(); //napapunta sa variable data
        return data;
    }
    getData().then((result) => {
        setStudents(result);
    }).catch((e) => {
        console.log(e.message);
    })

//try catch. service magthothrow ng error yung .then mag tatray catch


    return (
        <>
            <HeaderContainer />
            <FormContainer />
            <ListContainer data={students} />
        </>
    )
}

export default StudentPage;
