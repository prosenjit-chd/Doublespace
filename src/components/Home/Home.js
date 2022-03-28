import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className="top-margin">
        <main>
        <section class="container first-sec">
            <div class="row g-4">
                <div class="col-lg-8">
                    <div class="blog">
                        <div class="blog-img">
                            <div class="first-sec-left">
                                <img src="https://portella.com/wp-content/uploads/2019/08/1.-1024x577.jpg" class="img-fluid"
                                    alt=""/>
                            </div>
                        </div>
                        <div class="blog-detail">
                            <p>FOR MANUFACTURERS</p>
                            <h3>Call for Entries: The 2021 A+Product Awards Is Now Open!</h3>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="row g-4">
                        <div class="col-lg-12">
                            <div class="blog">
                                <div class="blog-img">
                                    <div class="first-sec-right">
                                        <img src="https://i.pinimg.com/originals/78/77/c1/7877c117eaef64dba0e9895c818eb103.png"
                                            class="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div class="blog-detail">
                                    <p>COMPETITIONS</p>
                                    <h5>One Drawing Challenge 2021: Send Us a Drawing. Tell Us a Story. Win $2,500!</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="blog">
                                <div class="blog-img">
                                    <div class="first-sec-right">
                                        <img src="https://renodots.com.my/home/admin/assets/designer/concept-8.jpg"
                                            class="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div class="blog-detail">
                                    <p>INSIDE ARCHITIZER • UPDATES</p>
                                    <h5>Find Your Dream Architecture Job Through Architizer!</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="container second-sec">
            <div class="row g-4">
                <div class="col-lg-8">
                    <div class="blog">
                        <div class="blog-img">
                            <div class="second-sec-left">
                                <img src="https://www.metalocus.es/sites/default/files/styles/mopis_fullslider_desktop/public/lead-images/metalocus_moshe-safdie-habitat-67-unit_01_p3_0.jpg?itok=STH2uGlk"
                                    class="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div class="blog-detail">
                            <p>PROJECTS</p>
                            <h5>Origami House // Bernardes Arquitetura</h5>
                            <small>an hour ago</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="blog">
                        <div class="blog-img">
                            <div class="second-sec-right">
                                <img src="https://media.architecturaldigest.com/photos/5d3f6c8084a5790008e99f37/master/w_3000,h_2123,c_limit/GettyImages-1143278588.jpg"
                                    class="img-fluid" alt=""/>
                            </div>
                        </div>
                        <div class="blog-detail">
                            <h4>Sign Up for the Architizer Newsletter</h4>
                            <h5>Architectural inspiration straight to your inbox.</h5>
                            <button class="btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="container third-sec">
            <div class="row g-4">
                <div class="col-lg-8">
                    <div class="row row-cols-lg-3 g-3">
                        <article class="border border-1">
                            <div class="third-sec-left">
                                <img src="https://media.architecturaldigest.com/photos/5d3f6c8084a5790008e99f37/master/w_3000,h_2123,c_limit/GettyImages-1143278588.jpg"
                                    class="img-fluid" alt=""/>
                            </div>
                            <p>
                                "Better Products, Better Architecture": Architects Reflect on the Immense Value of the A+Product
                                Awards <br/>
                                <small class="text-secondary">2 hours ago • For Manufacturers</small>
                            </p>
                        </article>
                        <article class="border border-1">
                            <div class="third-sec-left">
                                <img src="https://www.tripsavvy.com/thmb/kzxM1lD_Margd8htEwrEZrxOG2o=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-921456778-bcfe4a6e759145899fe2e8dc86dc978a.jpg"
                                    class="img-fluid" alt=""/>
                            </div>
                            <p>
                                "Better Products, Better Architecture": Architects Reflect on the Immense Value of the A+Product
                                Awards <br/>
                                <small class="text-secondary">2 hours ago • For Manufacturers</small>
                            </p>
                        </article>
                        <article class="border border-1">
                            <div class="third-sec-left">
                                <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                    class="img-fluid" alt=""/>
                            </div>
                            <p>
                                "Better Products, Better Architecture": Architects Reflect on the Immense Value of the A+Product
                                Awards <br/>
                                <small class="text-secondary">2 hours ago • For Manufacturers</small>
                            </p>
                        </article>
                        <article class="border border-1">
                            <div class="third-sec-left">
                                <img src="data:image/jpeg;base64,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"
                                    class="img-fluid" alt=""/>
                            </div>
                            <p>
                                "Better Products, Better Architecture": Architects Reflect on the Immense Value of the A+Product
                                Awards <br/>
                                <small class="text-secondary">2 hours ago • For Manufacturers</small>
                            </p>
                        </article>
                        <article class="border border-1">
                            <div class="third-sec-left">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcyH00-8h4w2o0r5F7k3mcjiro3BTU6aBTrShuzIT-wzxuoZlWuCaq7_kEbyCkYo9UzZU&usqp=CAU"
                                    class="img-fluid" alt=""/>
                            </div>
                            <p>
                                "Better Products, Better Architecture": Architects Reflect on the Immense Value of the A+Product
                                Awards <br/>
                                <small class="text-secondary">2 hours ago • For Manufacturers</small>
                            </p>
                        </article>
                        <article class="border border-1">
                            <div class="third-sec-left">
                                <img src="https://media.architecturaldigest.com/photos/5d3f6c8084a5790008e99f37/master/w_3000,h_2123,c_limit/GettyImages-1143278588.jpg"
                                    class="img-fluid" alt=""/>
                            </div>
                            <p>
                                "Better Products, Better Architecture": Architects Reflect on the Immense Value of the A+Product
                                Awards <br/>
                                <small class="text-secondary">2 hours ago • For Manufacturers</small>
                            </p>
                        </article>
                        <article class="border border-1">
                            <div class="third-sec-left">
                                <img src="data:image/jpeg;base64,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"
                                    class="img-fluid" alt=""/>
                            </div>
                            <p>
                                "Better Products, Better Architecture": Architects Reflect on the Immense Value of the A+Product
                                Awards <br/>
                                <small class="text-secondary">2 hours ago • For Manufacturers</small>
                            </p>
                        </article>
                        <article class="border border-1">
                            <div class="third-sec-left">
                                <img src="https://media.architecturaldigest.com/photos/5d3f6c8084a5790008e99f37/master/w_3000,h_2123,c_limit/GettyImages-1143278588.jpg"
                                    class="img-fluid" alt=""/>
                            </div>
                            <p>
                                "Better Products, Better Architecture": Architects Reflect on the Immense Value of the A+Product
                                Awards <br/>
                                <small class="text-secondary">2 hours ago • For Manufacturers</small>
                            </p>
                        </article>
                        <article class="border border-1">
                            <div class="third-sec-left">
                                <img src="https://media.architecturaldigest.com/photos/5d3f6c8084a5790008e99f37/master/w_3000,h_2123,c_limit/GettyImages-1143278588.jpg"
                                    class="img-fluid" alt=""/>
                            </div>
                            <p>
                                "Better Products, Better Architecture": Architects Reflect on the Immense Value of the A+Product
                                Awards <br/>
                                <small class="text-secondary">2 hours ago • For Manufacturers</small>
                            </p>
                        </article>
                    </div>
                </div>
                <div class="col-lg-4">
                    <p>TRENDING ARTICLES</p>
                    <div class="d-flex tranding">
                        <div class="third-sec-right">
                            <img src="https://media.architecturaldigest.com/photos/5d3f6c8084a5790008e99f37/master/w_3000,h_2123,c_limit/GettyImages-1143278588.jpg"
                                class="img-fluid" alt=""/>
                        </div>
                        <div class="third-sec-right-text">
                            <p>"One of the Biggest Mistakes I Made Was Thinking That I Needed To Be an 'Architect'"</p>
                            <small>Stories • Inspiration</small>
                        </div>
                    </div>
                    <div class="d-flex tranding">
                        <div class="third-sec-right">
                            <img src="https://media.architecturaldigest.com/photos/5d3f6c8084a5790008e99f37/master/w_3000,h_2123,c_limit/GettyImages-1143278588.jpg"
                                class="img-fluid" alt=""/>
                        </div>
                        <div class="third-sec-right-text">
                            <p>"One of the Biggest Mistakes I Made Was Thinking That I Needed To Be an 'Architect'"</p>
                            <small>Stories • Inspiration</small>
                        </div>
                    </div>
                    <div class="d-flex tranding">
                        <div class="third-sec-right">
                            <img src="https://media.architecturaldigest.com/photos/5d3f6c8084a5790008e99f37/master/w_3000,h_2123,c_limit/GettyImages-1143278588.jpg"
                                class="img-fluid" alt=""/>
                        </div>
                        <div class="third-sec-right-text">
                            <p>"One of the Biggest Mistakes I Made Was Thinking That I Needed To Be an 'Architect'"</p>
                            <small>Stories • Inspiration</small>
                        </div>
                    </div>
                    <div class="d-flex tranding">
                        <div class="third-sec-right">
                            <img src="https://media.architecturaldigest.com/photos/5d3f6c8084a5790008e99f37/master/w_3000,h_2123,c_limit/GettyImages-1143278588.jpg"
                                class="img-fluid" alt=""/>
                        </div>
                        <div class="third-sec-right-text">
                            <p>"One of the Biggest Mistakes I Made Was Thinking That I Needed To Be an 'Architect'"</p>
                            <small>Stories • Inspiration</small>
                        </div>
                    </div>
                    <div class="d-flex tranding">
                        <div class="third-sec-right">
                            <img src="https://media.architecturaldigest.com/photos/5d3f6c8084a5790008e99f37/master/w_3000,h_2123,c_limit/GettyImages-1143278588.jpg"
                                class="img-fluid" alt=""/>
                        </div>
                        <div class="third-sec-right-text">
                            <p>"One of the Biggest Mistakes I Made Was Thinking That I Needed To Be an 'Architect'"</p>
                            <small>Stories • Inspiration</small>
                        </div>
                    </div>
                    <div class="d-flex tranding">
                        <div class="third-sec-right">
                            <img src="https://media.architecturaldigest.com/photos/5d3f6c8084a5790008e99f37/master/w_3000,h_2123,c_limit/GettyImages-1143278588.jpg"
                                class="img-fluid" alt=""/>
                        </div>
                        <div class="third-sec-right-text">
                            <p>"One of the Biggest Mistakes I Made Was Thinking That I Needed To Be an 'Architect'"</p>
                            <small>Stories • Inspiration</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
        </div>
    );
};

export default Home;