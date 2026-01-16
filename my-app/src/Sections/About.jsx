import React from "react";


const About  = () => {
    return (
        <div id="about" className="text-white my-5 p-4 container">
            <h3 className="text-center fs-3 bor mb-4 border-bottom border-danger pb-2">About Me</h3>
            <section className=" d-flex justify-content-start align-items-center vh-100 flex-column">
                <div className="text-start">
                    <div className="align-items-start">
                        <p className=" fs-5">
                            <span className="fs-4" >Hello, Nice To Meet You,</span><span className="text-danger fs-2"> I'm Chieng John</span><br/>
                            I started to learn Web Development few years ago. And since then, 
                            I have been dedicated and working  to improving my skills and knowledge on this 
                            field.
                        </p>
                        <p className=" fs-5">
                            I have always been curious about how websites are built and function. This curiosity led me to explore web development, 
                            and I found myself fascinated by the endless possibilities it offers. 
                            Over time, I have honed my skills in both front-end and back-end development, 
                            allowing me to create seamless and engaging user experiences.

                        </p>
                        <p className=" fs-5">
                            Over years, I have worked on various projects, ranging from simple websites to complex web applications.
                            Each project has been an opportunity for me to learn and grow as a developer. 
                            I am passionate about creating beautiful and functional websites that not only meet but exceed client expectations.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About