import axios from "axios"
import {useState } from "react"
import { Link,useNavigate } from "react-router-dom"

const Signin =()=>{
    let navigate =useNavigate()
    // Declare the states here 
    const [ Email, setEmail]=useState("")
    const [ Password, setPassword]=useState("")

    // define the three states of posting data 

    const[loading , setLoading] = useState ("")
    const[success, setSuccess] = useState("")
    const[error, setError ]= useState ("")

    // function to handlesubmit 
    const handlesubmit = async (e) => {
        e.preventDefault ()
        setLoading ("please wait ...")
        // creating an empty digital envelope  to store the input 
        const formdata = new FormData ()
        formdata.append("email", Email)
        formdata.append("password", Password )

        try{
            const response = await axios.post("http://abigael.alwaysdata.net/api/signin" , formdata)
            setSuccess (response.data.message)
            setLoading ("")
            // redirect user to get products page 
            // NB;upon successful login 
            if (response.data.user){
                // it means login successful
                navigate("/") 
            }

        } catch (error){
            setError ("Something went wrong..")
            setLoading("")
        }

    }



    return(
        <div className="row mt-2 justify-content-center">
            <div className="col-md-6 card shadow p-4 "> <br />
                <h1>Sign In ✍️</h1>

                {/* bind the states here  */}
                <h1 className="text-primary">{loading} </h1>
                <h2 className="text-info">{success} </h2>
                <h2 className="text-info">{error} </h2>


                <form action="" onSubmit={handlesubmit}>
                    <input type="Email" className="form-control" placeholder=" ✉️  Enter Email"
                    onChange={(e)=>setEmail(e.target.value)}
                    /> <br />
                    <input type="Password" className="form-control" placeholder=" 🔑 Enter Password" 
                    onChange = {(e)=> setPassword(e.target.value)}
                    /> <br />
                    <button className="btn btn-primary w-100"> Sign in 📋 </button> <br /> <br />
                    <p>Don`t have and account?  <Link to = "/signup"> Sign Up </Link></p>
                    

                </form>

            </div>
            

        </div>
        
    )
}
export default Signin

