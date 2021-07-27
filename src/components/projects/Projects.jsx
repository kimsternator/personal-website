import "./Projects.scss"

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <div className="projectsTitle">
                <h2>Projects</h2>
            </div>
            <div className="squares">
                <div className="square">
                    <img src="icons/c++.png" alt="C++" />
                    <h2>Relational Database</h2>
                </div>
                <div className="square">
                    <img src="icons/python.png" alt="Python" />
                    <h2>Anime Recommender System</h2>
                </div>
                <div className="square">
                    <img src="icons/python.png" alt="Python" />
                    <h2>Community Posting Board MVP</h2>
                </div>
                <div className="square">
                    <img src="icons/js.png" href="https://stephenskim.codes/sorting-visualizer/" alt="React" />
                    <h2>Sorting Algorithm Visualizer</h2>
                </div>
                <div className="square">
                    <img src="icons/python.png" alt="React" />
                    <h2>Path Finding Visualizer</h2>
                </div>
            </div>
            <a className="next" href="#contact">
                <img src="assets/down.png" alt="arrowDown" />
            </a>
        </div>
    )
}