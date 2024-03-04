import Project from './project';
import './projectlist.css';

export default function ProjectList() {

    const projects =
        [
            {
                id: 1,
                name: "ballotbot",
                description: "A small polling application used to get responses from your group lightning-fast",
                repo_link: "https://github.com/richwblake/ballotbot-backend"
            },
            {
                id: 2,
                name: "sudoku",
                description: "A program written in C++ that solves arbitrarily complex sudoku boards",
                repo_link: "https://github.com/richwblake/sudoku"
            },
            {
                id: 3,
                name: "winterbot",
                description: "A discord bot written in Javascript to help with classroom participation",
                repo_link: "https://github.com/richwblake/winterbot.js"
            },
            {
                id: 4,
                name: "state soleil",
                description: "A portfolio site for a local Tampa Bay floral business",
                repo_link: "https://github.com/richwblake/state_soleil_frontend"
            },
        ]

    return (
        <div className='project-list'>
            <h1 className="lato">Current Projects</h1>
            <div className="lato-regular project-items">
                {projects.map(project => <Project key={project.id} project={project} />)}
            </div>
        </div>
    );
}
