import axios from "axios"
import { useState,useEffect} from "react"
import { useNavigate } from "react-router-dom"
import Carousel from "./Carousel"
const Getproducts =()=>{
    let navigate =useNavigate()
    // declare the states for getting products 
    const[loading , setLoading]=useState("")
    const[products, setProducts]=useState([])
    const[error, setError]=useState("")

    // function to getproducts 
    const getproducts = async()=>{
        setLoading ("please wait...")
        try {
        const  response = await axios.get("http://abigael.alwaysdata.net/api/getproducts")
        setProducts (response.data)
        setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")
            
        }
    }
    // call the function 
    useEffect(()=>{
        getproducts()
    },[])
    // log to see if we have products 
    console.log(products);
    // image path 
    const imagepath="http://abigael.alwaysdata.net/static/images/"

    return(
        <div className="row  container-fluid">
            {/* carousel goes here  */}
            <Carousel/>
            <h1 className="text-dark">Available Cars</h1>
            {/* map the products  */}
            {products.map( singleproduct=>(

            
            <div className="col-md-3 mb-5">
                <div className="card shadow p-2">
                    {/* image goes here  */}


                    <img src= {imagepath + singleproduct.product_photo} alt="" height={300} />
                    <div className="card-body">
                        <h5 className="text-info">{singleproduct.product_name} </h5>
                        <p>{singleproduct.product_description.slice(0,30)}... </p>
                        <b className="text-warning">Ksh{ singleproduct.product_cost} </b> <br />
                        <span className="badge bg-dark">{singleproduct.product_category} </span> <br /> <br />
                        <button className="btn btn-danger w-90" onClick={()=> navigate("/mpesa" , {state : {singleproduct}}) }> Purchase Now </button>

                    </div>

                </div>

            </div>
            ))}
            
        </div>
    )
}
export default Getproducts