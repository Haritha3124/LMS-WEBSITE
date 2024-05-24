import {Link} from "react-router-dom";
import Sidebar from "./sidebar";
function FavouriteCourse(){
    return(
        /* eslint-disable jsx-a11y/anchor-is-valid */
        <div className="container mt-4">
            <div className="row">
                <aside>
                    <Sidebar/>
                </aside>
                <div className="container my-4">
        {/* Favourite Course */}
            <h3 className="border-bottom pb-1 mt-4">Favourite Courses  </h3> 
            <div className="row justify-content-center row-cols-auto">
                <div className="col-12 col-md-2 col-sm-4">
                    <div className="card">
                        <div className="image"><Link to='../css'><img src="/assats/css.jpeg" className="card-img-top" alt="..." /></Link></div>
                        <div className="card-body">
                            <Link to="../css" className="btn btn-primary float-end">CSS </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-2 col-sm-4">
                    <div className="card">
                        <div className="image"><Link to='../html'><img src="/assats/html.jpeg" className="card-img-top" alt="..." /></Link></div>
                        <div className="card-body">
                            <Link to="../html" className="btn btn-primary float-end">HTML </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-2 col-sm-4">
                    <div className="card">
                        <div className="image"><Link to='../javascript'><img src="/assats/js.jpeg" className="card-img-top" alt="..." /></Link></div>
                        <div className="card-body">
                            <Link to="../javascript" className="btn btn-primary float-end">Javascript </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-2 col-sm-4">
                    <div className="card">
                        <div className="image"><Link to='../java'><img src="/assats/java.jpeg" className="card-img-top" alt="..." /></Link></div> 
                        <div className="card-body">
                            <Link to="../java" className="btn btn-primary float-end">JAVA </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-2 col-sm-4">
                    <div className="card">
                        <div className="image"><Link to='../mongodb'><img src="/assats/mongodb.jpeg" className="card-img-top" alt="..." /></Link></div>
                        <div className="card-body">
                            <Link to="../mongodb" className="btn btn-primary float-end">Mongodb </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    );
}

export default FavouriteCourse;