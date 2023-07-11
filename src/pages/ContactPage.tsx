import { FaEnvelope, FaDiscord, FaGithub } from 'react-icons/fa';


function ContactPage() {
    return (
        <div>
            <h1 className={"page-title"}>Contact</h1>
            <ContactInformation />
        </div>
    );
}

function ContactInformation() {
    return (
        <div className="center-content">
            <p className="contact-paragraph">
                <FaEnvelope /> Email <a href="mailto:contact@maximfiedler.com">contact@maximfiedler.com</a>
            </p>
            <p className="contact-paragraph">
                <FaDiscord /> Discord <a href="https://discord.com/users/759334613335670805">maximde</a>
            </p>
            <p className="contact-paragraph">
                <FaGithub /> Github <a href="https://github.com/MaximFiedler">MaximFiedler</a>
            </p>
        </div>
    );
}


export default ContactPage;