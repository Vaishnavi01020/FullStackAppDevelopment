import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import ArtService from './ArtService';
import './App.css';

const AddStudentComponent = () => {
    const [book_id, setbook_id] = useState('');
    const [book_name, setbook_name] = useState('');
    const [author, setauthor] = useState('');
    const [price, setprice] = useState('');
    const history = useNavigate();
    const { id } = useParams();

    const saveOrupdateStudent = (e) => {
        e.preventDefault();
        const book = { book_id, book_name, author, price };
        ArtService.create(book)
            .then((response) => {
                console.log(response.data);
                history('/ListArtComponent');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        ArtService.getuserid(id)
            .then((response) => {
                setbook_id(response.data.book_id);
                setbook_name(response.data.book_name);
                setauthor(response.data.author);
                setprice(response.data.price);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const title = () => {
        if (id) {
            return <h2 className="text-center">Update Employee</h2>;
        } else {
            return <h2 className="text-center">Add Recipes</h2>;
        }
    };

    return (
        <div >
            <br></br>
            <br></br>
            <br></br>
            <div className="back">
                <br></br>
                <div className="container" >
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <div className="card-body">
                                {title()}
                                <form>
                                    <div className="form-group mb-2">
                                        <label className="form-label">Id</label>
                                        <input
                                            type="text"
                                            placeholder="Enter Id"
                                            name="Id"
                                            className="form-control"
                                            value={book_id}
                                            onChange={(e) => setbook_id(e.target.value)}
                                        ></input>
                                    </div>
                                    <div className="form-group mb-2">
                                        <label className="form-label">Username</label>
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            name="Username"
                                            className="form-control"
                                            value={book_name}
                                            onChange={(e) => setbook_name(e.target.value)}
                                        ></input>
                                    </div>
                                    <div className="form-group mb-2">
                                        <label className="form-label">Project Name</label>
                                        <input
                                            type="text"
                                            placeholder="Project Name"
                                            name="projectname"
                                            className="form-control"
                                            value={author}
                                            onChange={(e) => setauthor(e.target.value)}
                                        ></input>
                                    </div>
                                    <br></br>
                                    <button className="btn btn-success" onClick={(e) => saveOrupdateStudent(e)}>Submit</button>
                                    <Link to="/ListArtComponent" className="btn btn-danger" >Cancel</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddStudentComponent;
