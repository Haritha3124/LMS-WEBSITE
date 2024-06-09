import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AuthContext from "./context";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Php() {
  const { setCourse, user, authTokens } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/courses/")
      .then((response) => {
        console.log("Courses:", response.data);
        const correct = response.data.filter(course => course.course_name.toLowerCase() === "php");
        setCourses(correct);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        // setLoading(false);
      });
  }, []);

  const addToCart = (course) => {
    axios.get("http://localhost:8000/mycourses/",{
      headers:{
        'Authorization':`Bearer ${authTokens.access}`
      }
    })
      .then((response) => {
        const existingCourses = response.data;
        // const courseExist = existingCourses.find((item) => item.user_title === course.title);
        const courseExist = existingCourses.find((item) => item.user_title === course.title && item.user_course_name === course.course_name);
        
        if (!courseExist) {
          setCourse([...user, course]);

          axios.post("http://localhost:8000/add_to_cart/", {
            user_course_name: course.course_name,
            user_title: course.title,
            user_duration: course.duration,
            user_link: course.link,
          },{
            headers:{
              'Authorization':`Bearer ${authTokens.access}`
            }
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
                <img src="/assats/php.jpeg" className="img-thumbnail" alt="..." />
            </div>
            <div className="col-8">
                <h3>php</h3>
                <p className="fw-bold">PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.</p>
                <p className="fw-bold">PHP is a widely-used, free, and efficient alternative to competitors such as Microsoft's ASP.</p>
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

export default Php;
