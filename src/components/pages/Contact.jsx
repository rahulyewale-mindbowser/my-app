import './card.css'
import './contact.css'
const Contact = () => {
    return (
        <div className="page contact">
            <h1>Contact me</h1> 
            <form className='contact_info'>
                <input type="text" id="name" placeholder='Enter Your Name'/>
                <input type="email"  id="email" placeholder='Enter Your Email'/>
                <input type="text" id="subject" placeholder='Enter subject' />
                <textarea  id="message" cols="30" rows="10" placeholder='Enter Your Messege Here!'></textarea>
                <button>Submit</button>
            </form>
            </div>
    )
}
export default Contact;