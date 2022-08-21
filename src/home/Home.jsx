
import "./home.scss";
import "../global.scss";
import SocialMedia from "../social-media/SocialMedia";
import MouseScroll from "./mouse-scroll/MouseScroll";

export default function Home() {

    return (
        <div className="home">
            <div className="intro">
                <div className="software-engineer">
                    SOFTWARE ENGINEER
                </div>

                <h1>
                    Hi, I'm <font>F</font>ederico <font>C</font>anali<font>.</font>
                </h1>

                <p>
                    I conceive and develop ideas to improve efficiency in people's lives.
                </p>

                <a href="#contact-me"><button>Hire me</button></a>
                
                <SocialMedia isFooter={false}/>
                <MouseScroll />
            </div>
            <div className="image-container">
                <img src="/assets/my-preview.svg" alt="" />
            </div>
        </div>
    );
}