import "./contact.scss";
import { useState } from "react";

export default function Contact() {
    // used to show message sent succesfully
    const [successMsg, SetSuccessMessage] = useState(false);

    // send message to telegram group
    const submit = (e) => {
        e.preventDefault();

        //fetch result
        fetch("https://api.telegram.org/bot2126273165:AAF3JH8x3SkXBPUKnqy9ukg7Gi_ZcErOUic/sendMessage?chat_id=-1001790348625&text=" + "Name: " + e.target[0].value + " - Email: " 
            + e.target[1].value + " - Message: " + e.target[2].value, {
            method: "GET",
            headers: {
                "Content-Type": "text/plain"
            }
        }).then(function(response) {
            // console.log(response);

            // clean fields after submit
            e.target[0].value = "";
            e.target[1].value = "";
            e.target[2].value = "";

            // show success message
            SetSuccessMessage(true);
            // set timeout of cancel message after 5s
            setTimeout(() => SetSuccessMessage(false), 5000);
        })
        .catch((error) => {
          // console.log(error)
          alert("An error has occurred! Please try again ...");
        });
    };

    // used to show success message under form
    function showSuccessMessage(){
        if(successMsg)
            return <div className="successMsg">Message sent succesfully!</div>

        return;
    }

    return(
        <div className="contact-me">
            <div className="left">
                <img src="/assets/contact-us.svg" alt="Contact me" />
            </div>
            <div className="right">
                <h1>
                    Contact me
                </h1>
                <p>
                    Do you want to <b>HIRE ME</b> for some work? Do you want to have more 
                    information about my person? <br />
                    Or do you just want to have a chat? <br />
                    Write to me without obligation and fear!
                </p>
                <form onSubmit={e => submit(e)}>
                    <label>Your name</label>
                    <input id="name" type="text" required/>
                    <label>Your email</label>
                    <input id="email" type="email" required/>
                    <label>Your message</label>
                    <textarea id="message" required/>
                    <input type="submit" value="Submit" />
                </form>
                {showSuccessMessage()}
            </div>
        </div>
    );
}