import React from "react";

const Home = () =>{
    return (
            <main id="home" className="text-white my-5 p-4 container mt-1">
                <section className=" d-flex justify-content-center  vh-100 flex-column">
                    <h2 className=" text-center border-bottom  border-danger text-white mb-5">Welcome To My Portfolio</h2>
                    <div className="text-center mb-2">
                        <h2 className=" text-white text-start">Hey, My Name Is</h2>
                        <p className="fs-5 text-start"><span className=" fs-2 text-danger ">Chieng John</span> , I'm a Self Taught full-Stack Developer with a passionate 
                            for creating beautiful and well functional websites.
                        </p>
                    </div>

            </section>

        </main>

    )
}

export default Home;