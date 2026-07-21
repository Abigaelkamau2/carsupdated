import React from 'react'

const Footer = () => {
  return (
    <div>
        <section class="row bg-warning p-3">
            <div class="col-md-4">
                <h3 class="text-center text-white">About us</h3>
                <p class="text-white"> we are a high quality retailer of all your essential needs from bag packs to to your electronics we provide the best of the best for all our customers and also provide good customer service. </p>

            </div>
            <div class="col-md-4">
                <h3 class="text-center text-white">Contact Us</h3>
                <form action="">
                    <input type="email" placeholder="enter your email" class="form-control" /> <br />
                    <textarea placeholder="leave a comment" class="form-control"></textarea>

                </form> <br/>
                <input type="submit"  value="Send message" class="btn btn-outline-danger"/> <br />
            </div>
            <div class="col-md-4">
                <h3 class="text-center text-white"> Stay connected</h3>
                <a href="https://www.facebook.com">
                    <img src="images/fb.png" alt="facebook"/>

                </a>
                <a href="https://www.instagram.com">
                    <img src="images/in.png" alt="IG"/>
                </a>
                <a href="https://www.X.com">
                    <img src="images/x.png" alt="x"/>
                </a> <br />
                <p> With the above handles you can easily stay connected with us for any questions or help needed , this way you also get to see when we post on new rrival of goods from our shipment when we do the unboxing and post on all our socials, be sure to follow and leave your notification on our page on to receive the latest news on our items </p>
            </div>
            

        </section>
        <footer className="bg-dark p-4 text-center">
            <b className='text-white'> Developed by Bridget © 2026 . All rights resevered.</b>
        </footer>

    </div>
  )
}

export default Footer 