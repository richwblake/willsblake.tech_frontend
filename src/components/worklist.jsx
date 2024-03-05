import WorkItem from './workitem';
import './worklist.css';

export default function WorkList() {

    const workItems = [
        {
            id: 1,
            company: "Flatiron School",
            title: "Amazon AAC Instructor of Software Engineering",
            time_held: "Feb 2023 - Oct 2024",
            tasks: [
                "Held daily office hours for +75 Amazon employees to provide live code review",
                "Graded projects and provided detailed feedback for 3 project cycles",
                "Created several programs to be used as demonstrations for lecture material",
            ],
        },
        {
            id: 2,
            company: "Flatiron School",
            title: "Technical Coach",
            time_held: "Oct 2020 - Feb 2023",
            tasks: [
                "Provided live code support 300+ students of Flatiron's software engineering program for any part of the curriculum",
                "Conducted daily Study Halls, 1 hour 30 minute sessions of supplimental lecture",
                "Founded Demo Days, self-wrote supplimentary material to the curriculum including Data Structures and Algorithms and Shell Scripting",
            ],
        },
        {
            id: 3,
            company: "Citi",
            title: "Time and Absence Specialist",
            time_held: "Oct 2018 - Oct 2020",
            tasks: [
                "Provided leave of absence and payroll support to the North America Citi workforce (~70,000)",
                "Developed streamlined Worker's Compensation procedures to reduce process time by 15%",
                "Contructed Execl Macros to facilitate process automation",
            ],
        },
    ];



    return (
        <div className='work-list' id='work-list'>
            <h1 className='lato'>Where I've Worked</h1>
            {workItems.map(item => <WorkItem key={item.id} details={item} />)}
        </div>
    );
}
