import './card.css'
import './about.css'

const About = () => {
    return (
        <div className="page about">
           <div className="about_content">
           <h1>Rahul Yewale</h1>
            <p>I am web developer.I have recently joined mindbowser as a Trainee Engineer.
            </p>
            <p> pursuing  MCA from Sinhgad institute of management.
            Completed Graduation In BCA .
                </p>
                <p>My Hobbies are Listening Music, Driving,Travelling etc.</p>
           </div>
           <img className='myimage' src="Rahul.jpg" alt="developer image" />
           </div>
    )
}
export default About;