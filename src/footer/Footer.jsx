
import SocialMedia from "../social-media/SocialMedia";
import "./footer.scss";

export default function Footer(){
    
    return(
        <footer>
            <SocialMedia isFooter={true}/>
            <p>
                © 2022 Federico Canali
            </p>
        </footer>
    );
}