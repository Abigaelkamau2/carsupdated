import React from 'react'

const Videos = () => {
  return (
    <div className="container mt-5">
            {/* Section 1 */}
            <h2 className="text-center text-danger mb-4"> Car videos </h2>
            <section className="row">
                {/* child 1 goes here  */}
                <div className="col-md-4 mb-4">
                    <iframe width="330" height="220" src="https://www.youtube.com/embed/iPJDW5EaIzE?si=GLTLeQwoXdPO5AKu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h5 className="mt-2 text-center"> Tesla Model-Y </h5>
                    <p className="text-center text-muted">
                        A stylish all-electric SUV offering long range, advanced technology, and exceptional performance.</p>

                </div>
                <div  className="col-md-4 mb-4">
                    {/* child 2 goes here  */}
                     <iframe width="330" height="220" src="https://www.youtube.com/embed/KUe8Sb59cQ0?si=Xs_X-pze_A9EY3Vr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    
                    <h5 className="mt-2 text-center"> Sport car Races </h5>
                    <p className="text-center text-muted">
                        See what happens when speed meets the RACE COURSE  
                    </p>

                </div>
                <div className="col-md-4 mb-4">
                     {/* child 3 goes here  */}
                     
                    <iframe width="330" height="220" src="https://www.youtube.com/embed/rfFHW0R5NTk?si=KVeFFffy0GG0plMu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h5 className="mt-2 text-center"> Mercedez </h5>
                    <p className="text-center text-muted">
                        A luxurious high-performance roadster that blends elegant design, premium comfort, and powerful V8 performance.</p>

                </div>

            </section>

        </div>
  )
}

export default Videos