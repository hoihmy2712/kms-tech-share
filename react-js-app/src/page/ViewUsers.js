// import React from "react";

// export default function ViewUsers() {

//     const [user, setUser] = useState({
//         username: "",
//         password: "",
//         firstName: "",
//         lastName: "",
//         gender: "",
//         age: ""
//     });

//     const { id } = useParams();

//     useEffect(() => {
//         loadUser();
//     }, []);

//     const loadUser = async () => {
//         ApiService.fetchUsers()
//             .then((res) => {
//                 console.log(res);
//                 setUser(res.data.result);
//             });
//     };



// }