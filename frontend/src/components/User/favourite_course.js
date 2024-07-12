import React, {  useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../Course_Details/context";

function FavouriteCourses() {
  const [cartItems, setCartItems] = useState([]);
  const {authTokens} = useContext(AuthContext)

  useEffect(() => {
    axios.get("http://localhost:8000/favouritecourses/",{
      headers:{
        'Authorization':`Bearer ${authTokens.access}`
      }
    }) 
      .then((response) => {
        console.log("Fetched courses:", response.data);
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, [authTokens]);

  const removeCart = (id) => {
    axios.delete(`http://localhost:8000/favouritecourses/${id}/`,{
      headers:{
        'Authorization':`Bearer ${authTokens.access}`
      }
    })
      .then((response) => {
        console.log("Course removed successfully:", response.data);
        setCartItems(cartItems.filter(course => course.id !== id));
      })
      .catch((error) => {
        console.error("Error removing course:", error);
      });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <section className="col-md-12">
          <div className="card">
            <h5 className="BackHeader card-header d-flex justify-content-center">Favourite Courses</h5>
            <div className="BackBody card-body">
              <table className="table table-bordered roundedTable">
                <thead>
                  <tr>
                    <th>Course Name</th>
                    <th>Title</th>
                    <th>Duration</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.user_course_name}</td>
                      <td>{item.user_title}</td>
                      <td>{item.user_duration}</td>
                      <td>
                        <button
                          onClick={() => removeCart(item.id)}
                          className="btn btn-sm custom-remove m-2"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FavouriteCourses;
