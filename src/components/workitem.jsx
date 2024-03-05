import './workitem.css';

export default function WorkItem({ details }) {

    const { company, title, time_held, tasks } = details;

    const renderTasks = () => {
        return <ul className='task-list'>
            {tasks.map(task => <li key={task}>{task}</li>)}
        </ul>;
    };

    return (
        <div className='lato-regular work-item'>
            <h2>{company}</h2>
            <h3>{title}</h3>
            <p>{time_held}</p>
            {renderTasks()}
        </div>
    );
}
