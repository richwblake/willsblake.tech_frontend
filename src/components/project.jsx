import './project.css';

export default function Project({ project }) {

    const { name, description, repo_link } = project;

    return (
        <div className='project'>
            <a href={repo_link} target="_blank">
                <h3>{name}</h3>
                <p>{description}</p>
            </a>
        </div>
    );
}
