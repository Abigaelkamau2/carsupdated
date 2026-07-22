import axios from "axios"
import {useState } from "react"
import { Link } from "react-router-dom"


const Signup=()=>{
    // declare the states here
    const [ username, setUsername]=useState("")
    const [ Email, setEmail]=useState("")
    const [ Password, setPassword]=useState("")
    const [ Phone, setPhone]=useState("")

    // three states for posting data 
    const [loading , setLoading] =useState ("")
    const [success, setSuccess]=useState("")
    const[error, setError]=useState("")

    // state for showing and hiding password 
    const [ showPassword, setShowPassword]=useState(false);


    // function to signup 
    const handlesubmit =async(e)=>{
          e.preventDefault()
          setLoading("Please wait...")
        //   create an empty digital envelope to store user input 
        const formdata = new FormData()
        formdata.append("username", username)
        formdata.append("email",Email)
        formdata.append("password",Password)
        formdata.append("phone",Phone)

        try {
            const response = await axios.post("https://abigael.alwaysdata.net/api/signup",formdata)
            setSuccess(response.data.message)
            setLoading("")
            
        } catch (error) {
            setError ("Something went wrong")
            setLoading ("")
            
        }
     }



    

    return(
        <div className="row justify-content-center mt-2">
            <div className="col-md-6 card shadow p-3">
                <h1 className="text-danger">Signup 👤</h1>
                {/* Bind the states here */}
                <h4 className="text-primary">{loading} </h4>
                <h1 className="text-success">{success} </h1>
                <h1 className="text-danger">{error} </h1>
                <form action="" onSubmit={handlesubmit}>
                    <input type="text" className="form-control" required placeholder="👤 Enter Username" 
                    onChange={(e)=>setUsername(e.target.value)}
                    /> <br />
                    <input type="Email" className="form-control" required placeholder=" ✉️ Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    {/* <input type="Password" className="form-control" required placeholder=" 🔑 Enter password" 
                    onChange={(e)=> setPassword(e.target.value)}
                    /> <br /> */}
                    <div className="input-group">
                        <input type={showPassword? "text":"password"}
                        className="form-control"
                        placeholder="🔑 Enter password"
                        onChange={(e) => setPassword(e.target.value)} />
                        <span className="input-group-text"
                        style={{ cursor : "pointer"}}
                        onClick={()=> setShowPassword(!showPassword)}
                        >
                            {showPassword?"🔒" : "👁️"}
                            
                        </span>
                    </div>
                    <br />


                    <input type="tel" className="form-control"required placeholder=" 📱Enter Phone"
                    onChange={(e)=> setPhone(e.target.value)}
                    />
                    <br />
                    <button className="btn btn-dark w-100"> Signup 👥 </button>
                    <br /> <br />

                    <p>Already have an account ? <Link to = "/signin"> Signin</Link></p>
                </form>
            </div>
        </div>  
    )
}
export default Signup