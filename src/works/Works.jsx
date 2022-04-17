import "./works.scss";

export default function Works() {

    const projects = [
        {
            type: "Android application",
            name: "Easy bill at the table",
            description: "You are at a restaurant with friends and it is time for the bill. You only have cash available. Don't you know how to divide the money between you so that everyone has the change? This app will solve your problems!",
            img: "/assets/projects/easy-bill-at-table.png"
        },
        {
            type: "Desktop application",
            name: "Electronic e-commerce",
            description: "Electronic e-commerce developed in java. There are three types of users who can use the desktop app: administrator, employee, and customer. Warehouse products can be bought, shipped, sold and managed.",
            img: "/assets/projects/electronic-ecommerce.png"
        },
    ];

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