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
            <h5>
                Portfolio
            </h5>
            <h2>
                Some of my projects
            </h2>
            <div className="projects">
                {projects.map((value, key) => (
                    <div className="project" key={key}>
                        <div className="left">
                            <h5>
                                {value.type}
                            </h5>
                            <h3>
                                {value.name}
                            </h3>
                            <p>
                                {value.description}
                            </p>
                            <>
                                {showSourceCodeButton(value.source_code)}
                                {showDemoButton(value.demo)}   
                            </>
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