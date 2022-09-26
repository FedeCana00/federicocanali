import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { fontSize } from '@mui/system';

import "./socialMedia.scss";

export default function SocialMedia({isFooter}) {

    let GITHUB_URL = "https://github.com/FedeCana00";
    let LINKEDIN_UL = "https://www.linkedin.com/in/federico-canali-26b004211";
    let iconColor = isFooter ? "#fff" : "#c1332a";

    return(
        <div className="social-container">
            <a href={GITHUB_URL} target="_blank">
                <GitHubIcon sx={{fontSize: "48px", color: iconColor}}/>
            </a>
            <a href={LINKEDIN_UL} target="_blank">
                <LinkedInIcon sx={{ fontSize: "48px", color: iconColor}}/>
            </a>
        </div>
    );
}