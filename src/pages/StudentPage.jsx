import FormContainer from "../components/FormContainer";
import HeaderContainer from "../components/HeaderContainer";
import ListContainer from "../components/ListContainer";

const StudentPage = () => {
    const students = [
        {id: 1, name: "Arbella Grace", srcode: "24-12821", program: "BSIT" },
        {id: 2, name: "Nina Angela", srcode: "24-14263", program: "BSCS" },
        {id: 3, name: "Wilmarc Venn", srcode: "24-16571", program: "BSIT" },
    ];
    return (
        <>
            <HeaderContainer />
            <FormContainer />
            <ListContainer data={students} />
        </>
    )
}

export default StudentPage;
