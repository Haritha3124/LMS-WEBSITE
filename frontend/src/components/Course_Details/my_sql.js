import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import authContext from "./context";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MySql() {
  const { setCourse, user } = useContext(authContext);
  const [courses, setCourses] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/courses/")
      .then((response) => {
        console.log("Courses:", response.data);
        const correct = response.data.filter(course => course.course_name.toLowerCase() === "my sql");
        setCourses(correct);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        // setLoading(false);
      });
  }, []);

  const addToCart = (course) => {
    axios.get("http://localhost:8000/mycourses/")
      .then((response) => {
        const existingCourses = response.data;
        const courseExist = existingCourses.find((item) => item.user_title === course.title);
        
        if (!courseExist) {
          setCourse([...user, course]);

          axios.post("http://localhost:8000/add_to_cart/", {
            user_course: course.course,
            user_title: course.title,
            user_duration: course.duration,
            user_link: course.link,
          })
            .then((response) => {
              console.log("Course added to cart successfully:", response.data);
              toast.success("Course added successfully!", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
              });
            })
            .catch((error) => {
              console.error("Error adding course to cart:", error);
              toast.error("Error adding course to cart!", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
              });
            });
        } else {
          toast.error("Course already exists!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
          });
        }
      })
      .catch((error) => {
        console.error("Error checking existing courses:", error);
      });
  };
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  
  return (
    <div> 
      <div className="container mt-3">
        <div className="row">
            <div className="col-4">
                <img src="/assats/mysql.jpeg" className="img-thumbnail" alt="..." />
            </div>
            <div className="col-8">
                <h3>MySQL</h3>
                <p className="fw-bold">C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972.</p>
                <p className="fw-bold">It is a very popular language, despite being old. The main reason for its popularity is because it is a fundamental language in the field of computer science.</p>
                <p className="fw-bold">C is strongly associated with UNIX, as it was developed to write the UNIX operating system.</p>
            </div>
        </div>
      
      {/* Course Videos */}
      <div className="card mt-4 mb-5">
        <div className="card-header">
            <h3>Course Videos</h3>
        </div>
        <ul className="list-group list-group-flush">
        <div>
          {courses.map((course) => (
            <li key={course.id} className='list-group-item'>{course.title}
              <span className='float-end'>
                  <span className='me-5'>{course.duration}</span>
                  <Link to={course.link}><button className='btn btn-sm btn-danger'><i className='bi bi-youtube'></i></button></Link>
                  <button onClick={() => addToCart(course)} className='btn btn-sm btn-primary m-2'><i className='bi bi-cart-plus'></i></button>
              </span>
            </li> 
          ))}
        </div>
        </ul>
      </div>
            
  </div>
  <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Flip}
  />
  </div>
  );
}

export default MySql;
