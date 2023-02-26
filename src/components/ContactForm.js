import "./ContactFormStyles.css"

function ContactForm(){
    return(
        <div className="from-container">
            <h1>Get in touch</h1>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Message" rows="4"/>
                <button>Send</button>
            </form>
        </div>
    )
}

export default ContactForm