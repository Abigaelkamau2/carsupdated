import { useState } from "react"
import axios from "axios"

const Addproduct =()=>{
    // declare the states here 
    const [ productname, setProductname] = useState ("")
    const [ productcategory,setProductCategory] = useState ("")
    const [ productdescription, setProductDescription] = useState ("")
    const [ productcost, setProductCost] = useState("")
    const [ productphoto, setProductPhoto]= useState("")

     {/* 3 states of posting data  */}
            const[ loading , setLoading ] = useState ("")
            const[ success, setSuccess ] = useState ("")
            const[ Error , setError] = useState ("")

        // function to handlesubmit for uploading 
        const handlesubmit = async (e) => {
            e.preventDefault()
            setLoading ("Please wait...")
        // creating an empty digital envelope 
        const formdata = new FormData()
        formdata.append ("product_name", productname)    
        formdata.append ("product_category", productcategory)
        formdata.append ("product_description", productdescription)    
        formdata.append ("product_cost", productcost)
        formdata.append ("product_photo", productphoto)   
        
        try {
            const response = await axios.post ("http://abigael.alwaysdata.net/api/addproduct" , formdata) 
            setSuccess (response.data.message)
            setLoading ("")
        } catch (error)
        {   setLoading ("")
            setError("Something went wrong ...")
            

        }
    } 

     return(
    
     <div className="row mt-2 justify-content-center">
        <div className="col-md-6 card shadow p-4 ">
            
            <h2> <i>Upload Products 📦📦 </i></h2>
            {/* bind the states here  */}
            <h4 className="text-warning">{loading} </h4>
            <h5 className="text-success">{success} </h5>
            <h5 className="text-danger">{Error} </h5>
        
            
           
                <form action="" onSubmit={handlesubmit}>
                <input type="Product name" className="form-control" placeholder=" 📋      Enter Product name" required  onChange={(e) => setProductname (e.target.value)}/> <br />
                <input type="Product" className="form-control" placeholder="📊 👩‍🔬 Enter Product category" required onChange={(e) => setProductCategory (e.target.value)}
                    /> <br />
                <textarea placeholder=" 📓   Describe your product" className="form-control" required onChange={(e) => setProductDescription (e.target.value)}></textarea> <br />

                <input type="cost" className="form-control" placeholder=" 💰 Product cost" required onChange={(e) => setProductCost (e.target.value)}/>
                <br />
                <p><b>Browse/Upload Product image</b></p>
                <input type="file" className="form-control" required  accept="image/*" onChange={(e) => setProductPhoto (e.target.files[0])} /> 
                <br />
                <button className="btn btn-primary "> Upload product  📤 </button>
                
            </form>
                    



        </div>
     </div>
    )
}
export default Addproduct