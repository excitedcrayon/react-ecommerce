import { Link } from "react-router-dom";

export default function About(){
    return(
        <div className="video_container video_background">
            <div className="video_player">
                <video muted={true} loop autoPlay={true} playsInline>
                    <source src="../../public/videos/about_us.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="video_player_overlay"></div>
            <article className="page_section_content text_white">
                <p>A professional team with more than 20 years expert advice.</p>
                <p>The team consists of highly- trained and dedicated specialists, offering the best in customer service, after- sales service and continual support.</p>
                <p>Whether you are looking for flooring options for your home, office or a specialised project, SA Flooring can assist.</p>
                <div className="btn_wrapper">
                    <Link to='#' className="btn btn_link btn_link_default btn_dark_inverted">Learn More</Link>
                </div>
            </article>
        </div>
    )
}