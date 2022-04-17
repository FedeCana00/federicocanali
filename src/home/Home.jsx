import "./home.scss";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { color } from "@mui/system";

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

                <h3>
                    I conceive and develop ideas to improve efficiency in people's lives.
                </h3>
                <div className="balls-container">
                    { [...Array(574)].map((_, index) => <div key={index} className="ball"/>) }
                </div>
                <div className="social-container">
                    <a href="https://github.com/FedeCana00">
                        <GitHubIcon sx={{ fontSize: 80, color: "#c1332a"}}/>
                    </a>
                    <a href="https://www.linkedin.com/in/federico-canali-26b004211">
                        <LinkedInIcon sx={{ fontSize: 80, color: "#c1332a"}}/>
                    </a>
                </div>
            </div>
            <div className="image-container">
                <div className="code">
                    <img src="/assets/code.png" alt="" />
                </div>
                <div className="myself">
                    <img src="/assets/federico_canali.png" alt="" />
                </div>
                <div className="android">
                    <img src="/assets/android.png" alt="" />
                </div>
                <div className="react">
                    <img src="/assets/react.png" alt="" />
                </div>
                <div className="java">
                    <img src="/assets/java.png" alt="" />
                </div>
                <div className="blob">
                    <img src="/assets/blob.svg" alt="" />
                </div>
            </div>
        </div>
    );
}