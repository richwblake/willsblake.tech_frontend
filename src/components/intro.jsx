import './intro.css';
import ProfilePhoto from '../assets/profile_photo.jpeg';

export default function Intro() {
    return (
        <div className='lato intro'>
            <h5>Software Engineer</h5>
            <h1>Wills Blake</h1>
            <img className="photo" src={ProfilePhoto} />
        </div>
    );
}
