import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Cardplan from "./Cardplan";
function AllUsers() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
  
    const allUsers = async () => {
    {
      try {
        const res = await fetch("/api/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const dataobj = await res.json();
        setUsers(dataobj.data)
        if (res.status === 200) {
            // console.log(dataobj)
        //   window.alert(dataobj.message);
        } else {
          throw new Error("Some error occured");
        }
      } catch (err) {
        window.alert("Some error occured : " + err);
      }
    }
  };

const handleDeleteUser = async (id)=>{
    try {
        const res = await fetch("/api/users/"+id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if(res.status === 200){
            window.alert('User deleted Seccessfully')
            navigate('/users/allusers')
        }
        else{
            throw new Error('User deletion failed')
        }

}catch(err){
    window.alert(err)
}}

const handleUpdateUser = async()=>{

}

  useEffect(()=>{
    allUsers();
  }, [])

  return (
    <>
        <h1>All Users</h1>
        {
            users && users.map((user, index) => (
                <div key={index} className="card">
                  <h5 className="card-title">{user.name}</h5>
                  <div className="card-body">
                    <img src={user.profileImage} className="card-img-top" />
                    <p className="card-text">email: {user.email}</p>
              
                    {/* Delete User Button */}
                    <button
                      style={{
                        backgroundColor: 'red',
                        color: 'white',
                        border: 'none',
                        padding: '5px 10px',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleDeleteUser(user._id)}
                    >
                      Delete User
                    </button>
              
                    {/* Update User Button */}
                    <button
                      style={{
                        backgroundColor: 'green',
                        color: 'white',
                        border: 'none',
                        padding: '5px 10px',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleUpdateUser(index)}
                    >
                      Update User
                    </button>
                  </div>
                </div>
              ))
              
        }
    </>
  );
}

export default AllUsers;
