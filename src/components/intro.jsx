import './intro.css';
import ProfilePhoto from '../assets/profile_photo.jpeg';

export default function Intro() {
    return (
        <div className='lato intro'>
            <div className='intro-text-dt'>
                <h5>Software Engineer</h5>
                <h1>Wills Blake</h1>
            </div>
            <img className="photo" src={ProfilePhoto} />
            <div className='intro-text-mb'>
                <h1>Hi there, I'm Wills</h1>
                <h3>Backend software engineer passionate about writing elegant and clean code. I love working with a team to create effecient solutions to unique problems. Specializing in Python, Flask, SQLAlchemy, with solid understanding of system administration</h3>
            </div>
        </div>
    );
}
