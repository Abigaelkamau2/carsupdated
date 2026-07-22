import React from 'react'

const Navbar = () => {
  return (
    <section class="row">
        <div class="col-md-12">
            <nav class="navbar navbar-expand-md bg-dark">
                {/* <!-- brand  --> */}
                 <a href="/" class="navbar-brand"><b class="text-danger"> Signature Auto Dealership 🚗...</b></a>
                 {/* <!-- button  --> */}
                  <button class="navbar-toggler" data-bs-toggle="collapse"
                  data-bs-target="#navbarcollapse">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  {/* <!-- division containing links  --> */}
                   <div class="collapse navbar-collapse" id="navbarcollapse">
                    {/* <!-- left links   --> */}
                     <div class="navbar-nav" >
                        <a href="/" class="nav-link text-danger"  >Home</a> 

                        <a href="signin" class="nav-link text-danger" >Signin</a>

                        <a href="signup" class="nav-link text-danger" >signup</a>
                        
                        <a href=" addproduct" class="nav-link text-danger" >Addproduct</a>
                        
                     </div>
                   </div>

            </nav>
        </div>
     </section> 

  )
}

export default Navbar