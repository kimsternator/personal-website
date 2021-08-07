import "./Projects.scss"

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <div className="projectsTitle">
                <h2>Projects</h2>
            </div>
            <div className="squares">
                <div className="square" onClick={() => {window.open("https://github.com/kimsternator")}}>
                    <img src="icons/c++.png" alt="C++" />
                    <h2>Relational Database</h2>
                </div>
                <div className="square" onClick={() => {window.open("https://github.com/kimsternator/Anime-Recommender---Visualizer")}}>
                    <img src="icons/python.png" alt="Python" />
                    <h2>Anime Recommender System</h2>
                </div>
                <div className="square" onClick={() => {window.open("https://github.com/kimsternator/ServiceUp")}}>
                    <img src="icons/python.png" alt="Python" />
                    <h2>Community Posting Board MVP</h2>
                </div>
                <div className="square" onClick={() => {window.open("https://stephenskim.codes/sorting-visualizer/")}}>
                    <img src="icons/react.png" alt="React" />
                    <h2>Sorting Algorithm Visualizer</h2>
                </div>
                <div className="square" onClick={() => {window.open("https://stephenskim.codes/pathfinding-visualizer/")}}>
                    <img src="icons/react.png" alt="React" />
                    <h2>Path Finding Visualizer</h2>
                </div>
            </div>
            <a className="next" href="#contact">
                <img src="assets/down.png" alt="arrowDown" />
            </a>
        </div>
    )
}