import "./works.scss";
import { projects } from "./projects";

export default function Works() {

    // show or hide demo project button
    function showDemoButton(demoUrl){;
        if(demoUrl != "")
            return (<a href={demoUrl}><button>Demo</button></a> );
        
        return;
    }

    // show or hide source code project button
    function showSourceCodeButton(sourceCodeUrl){
        if(sourceCodeUrl != "")
            return (<a href={sourceCodeUrl}><button className="outline">View source code</button></a>);
        
        return;
    }

    return (
        <div className="works">
            <h1>
                Some of my projects
            </h1>
            <div className="projects">
                {projects.map((value, key) => (
                    <div className="project" key={key}>
                        <div className="left">
                            <div className="software-type">
                                {value.type}
                            </div>
                            <div className="title">
                                {value.name}
                            </div>
                            <p>
                                {value.description}
                            </p>
                            <div className="buttons-section">
                                {showSourceCodeButton(value.source_code)}
                                {showDemoButton(value.demo)}   
                            </div>
                        </div>
                        <div className="right">
                            <div className="image-container">
                                <img src={value.img} alt={value.name} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}