import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams} from 'react-router-dom';
//import { useHistory} from 'react-router-dom';
import ArtService from './ArtService'
//import "./App.css"
//import img from "./img6.PNG";
const UpdateStudentComponent = () => {

    const[book_id ,setbook_id] = useState('')
    const[book_name ,setbook_name] = useState('')
    const[author ,setauthor] = useState('')
    const[price ,setprice] = useState('')
    //const history =useHistory()
    const history =useNavigate()
const {id}=useParams();
    const saveOrupdateStudent = (e) =>{
        e.preventDefault();

        const book = { book_id,book_name, author, price }
       
//console.log(book);
        ArtService.create(book).then((response)=>{
   
             
            console.log(response.data)
            history("/ListEmployeeComponent");
 
           
   
        }).catch(error =>{
           console.log(error)
        })
    }
    const new_id=book_id;
    useEffect(() => {
        ArtService.getuserid(id).then((response)=>{
            setbook_id(response.data.book_id)
            setbook_name(response.data.book_name)
            setauthor(response.data.author)
            setprice(response.data.price)
        }).catch(error=>{
            console.log(error)
        })
    }, [])
    const title=()=>{
        if(id){
            return <h2 className='text-center'>update employee</h2>
        }
        else
        {
            return <h2 className='text-center' style={{top:"50px"}}>Add Recipes</h2>
        }
    }
    // const mystyle={
    //     backgroundImage:`url('${img}')`,
    //     height:'120vh',
    //     marginTop:'-149px',
    //     overview:'hidden',
    //     width:'1380px',
    //     paddingLeft:'400px',
    //     marginLeft:'-150px',
    //     marginRight:'50%',
    //     backgroundSize:'cover',
    //     backgroundRepeat: 'no-repeat',
    // };
  return (
    <div>
        <br></br><br></br><br></br>
        
        <div className="back"><br></br>
      <div className="container">
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3" style={{backgroundColor:'rgba(255,255,255,0.4)',marginLeft:"90px",marginTop:"50px",paddingTop:"-100px"}}><br></br><br></br><br></br><br></br><br></br>
            {
                title()
            }
           
            <div className="card-body" style={{paddingBottom:"-20px",height:"400px",bottom:"50px"}}>
            <form>
               
                <div className="form-group mb-2">
                    <label className="form-label">Recipe_id</label>
                    <input
                        type="text"
                        placeholder="Enter book_id"
                        name="book_id"
                        className="form-control"
                        value={book_id}
                        onChange={(e) => setbook_id(e.target.value)}
                    ></input>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Recipe_name</label>
                    <input
                        type="text"
                        placeholder="Recipe_name"
                        name="Recipe_name"
                        className="form-control"
                        value={book_name}
                        onChange={(e) => setbook_name(e.target.value)}
                    ></input>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label" style={{}}>Preparation</label>
                    <input
                        type="text"
                        placeholder="How to prepare?"
                        name="book author"
                        className="form-control" style={{paddingBottom:"50px"}}
                        value={author}
                        onChange={(e) => setauthor(e.target.value)}
                    ></input>
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Ingredients</label>
                    <input
                        type="text"
                        placeholder="Ingredients"
                        name="ingredients"
                        className="form-control"
                        value={price}
                        onChange={(e) => setprice(e.target.value)}
                    ></input>
                </div>
                <br></br>
                <button className="btn btn-success" style={{marginLeft:"150px"}}onClick={(e) =>saveOrupdateStudent(e)}>Submit</button>                <Link to="/ListEmployeeComponent" className="btn btn-danger"> Cancel </Link>
            </form>
            </div>
        </div>
      </div>
      </div><br></br><br></br><br></br>
      </div>
      </div>
    
  )
}

export default UpdateStudentComponent