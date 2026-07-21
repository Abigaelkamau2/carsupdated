import axios from "axios"
import React, { useState } from "react"
import { useLocation } from "react-router-dom"
const Mpesapayments =()=>{
    const {singleproduct}=useLocation().state||{}
    //  image path goes here
    const imagepath="http://abigael.alwaysdata.net/static/images/" 
    // declare states 
    const [ phone , setPhone]=useState("")
    const [ loading , setLoading]=useState("")
    const [ success , setSuccess]=useState("")
    const [ Error , setError]=useState("")


    const hanndlesubmit =async(e)=>{
        e.preventDefault()
        setLoading ("Please wait ...")
        // empty digital envelop
        const formdata = new FormData()
        formdata.append ("phone",phone)
        formdata.append ("amount",singleproduct.product_cost)

    try {
        const response = await axios.post("https://abigael.alwaysdata.net/api/mpesa_payment" , formdata)
        setSuccess(response.data.message)
        setLoading("")
    }catch(error){
        setError(error.message)
        setLoading("")
    }     

    }


    
    return(
        <div className="row justify-content-center ">
            <div className="col-md-6 card shadow  p-4 mt-3">
                 

                {/* image goes here  */}
                <img src={imagepath + singleproduct . product_photo} alt="" height={400} />

                <h5>{singleproduct.product_name}</h5>
                <p>{ singleproduct.product_description}</p>
                <b className="text-warning"> Ksh {singleproduct.product_cost}</b> <br />
                <span className="badge bg-success"> {singleproduct.product_category}</span>
                {/* bind states here  */}
                 <h4 className="text-warning">{loading} </h4>
                 <h5 className="text-success">{success} </h5>
                 <h5 className="text-danger">{Error} </h5>

                
                <form action="" onSubmit={hanndlesubmit}>
                    <input type="tel" className="form-control" placeholder="Enter phone 254xxxxxxx"  onChange= { ()=> setPhone ()} /> <br />
                    <button className="btn btn-primary w-100"> Make payment</button>
                </form>
            </div>
             
        </div>
       
    )
}
export default Mpesapayments