import React from 'react'

const Carousel = () => {
  return (
      
         <section class="row">
        <div class="col-md-12">
            <div class="carousel slide" data-bs-ride="carousel" id="mycarousel">
                {/* <!-- division containing images  --> */}
                 <div class="carousel-inner">
                    {/* <!-- div with image 1  --> */}
                     <div class="carousel-item active">
                        <img src="images/carad3.avif" alt="slide1" class="d-flex w-100"height="500px"/>
                     </div>
                    {/* <!-- div with image 2 --> */}
                     <div class="carousel-item">
                        <img src="images/adcar3.jpg" alt="slide 2" class="d-flex w-100 " height="500px"/>
                     </div>
                    {/* <!-- div with image 3  --> */}
                     <div class="carousel-item">
                        <img src="images/ad1.jpg" alt="slide3" class="d-flex w-100"height="500px"/>
                     </div>

                    {/* <!-- div with image 4  --> */}
                     <div class="carousel-item">
                        <img src="images/slide4wheels.jpeg" alt="slide 4"class="d-flex w-100"height="500px"/>
                     </div>
                 </div>
                 {/* <!-- previous control icon  --> */}
                  <a href="#mycarousel"  class="carousel-control-prev" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bg-dark"> </span>
                  </a>
                  {/* <!-- next control icon  --> */}
                   <a href="#mycarousel" class="carousel-control-next" data-bs-slide="next">
                    <span class="carousel-control-next-icon bg-dark"></span>
                   </a>
            </div>
        </div>
       </section> 
  )
}

export default Carousel