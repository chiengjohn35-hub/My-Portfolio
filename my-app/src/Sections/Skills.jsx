import React from "react";
import HTML from "../assets/images/html logo.png";
import CSS from "../assets/images/css logo.jpg";
import JavaScript from "../assets/images/Javacript logo.png";
import ReactImg from "../assets/images/react logo.png";
import Python from "../assets/images/python logo.png";
import django from "../assets/images/dj.jpg";
import Bootstrap from "../assets/images/bootstrap logo.png";
import gitHub from "../assets/images/gitub imge.png";

const Skills  = () => {
    // Skills data
    const skills = [
        { img: HTML, label: 'HTML', size: 80 },
        { img: CSS, label: 'CSS', size: 80 },
        { img: JavaScript, label: 'JAVASCRIPT', size: 80 },
        { img: ReactImg, label: 'REACT', size: 80 },
        { img: Python, label: 'PYTHON', size: 110 },
        { img: django, label: 'DJANGO', size: 80 },
        { img: Bootstrap, label: 'BOOTSTRAP', size: 80 },
        { img: gitHub, label: 'GITHUB', size: 80 },
    ];

    return (
        <div id="skills">
            <section className="container my-5 p-4 text-center text-white">
                <h3 className="text-center border-bottom border-danger mb-4">Skills</h3>

                <div className="row">
                    {/* Render each skill */}
                    {skills.map((s, idx) => (
                        <div key={idx} className="col-6 col-sm-3 mb-4">
                            <div className="shadow-sm p-3 h-100 d-flex flex-column align-items-center justify-content-center bg-dark">
                                <img src={s.img} alt={`${s.label} icon`} className="img-fluid mx-auto" style={{width: s.size}} />
                                <p className="mt-3 mb-0 fw-bold">{s.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

        </div>
    )
}

export default Skills;