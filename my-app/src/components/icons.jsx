import React from "react";
import Fb from "../assets/icons/fb icon.jpg";
import Youtube from "../assets/icons/youtube2 icon.png";
import Github from "../assets/icons/github2 logo.png";



// fb_link:'www.facebook.com/ChiengTech'
// youtube_link:'www.youtube.com/@ChiengTech'
// github_link:'github.com/chiengjohn35-hub'


const Icons = () => {
    // Social media icons data
    const icons = [
        { img: Fb, label: 'Facebook', size: 40, link: 'https://www.facebook.com/Chiengbul36/' },
        { img: Youtube, label: 'YouTube', size: 40, link: 'https://www.youtube.com/@ChiengTech' },
        { img: Github, label: 'GitHub', size: 40, link: 'https://github.com/chiengjohn35-hub' },
    ]

    return (
        // Social media icons section
        <div className="d-flex justify-content-center pb-4 gap-4 my-4 bg-dark mt-0">

            {/* Render each icon with link */}
            {icons.map((icon, idx) => (
                <a key={idx} href={icon.link} aria-label={icon.label} target="_blank" rel="noopener noreferrer">
                    <img src={icon.img} alt={`${icon.label} icon`} style={{ width: icon.size }} />
                </a>
            ))}
        </div>
    )
}




export default Icons;