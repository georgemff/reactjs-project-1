import { ContentWrapper } from "../../shared/styled-components/ContentWrapper";
import TitleHeader from "../../shared/title-header/TitleHeader";
import Input from "./styled/Input";
import "./Contact.css"
import Button from "../../shared/button/Button";


function Contact(props) {
    return (
        <section className="contact bg-yellow py-100">
            <ContentWrapper>
                <TitleHeader  title="let's discuss project" labelText="Contact" />
                <div className="contact-content">
                    <div className="contact-form">
                        <h4>get in touch</h4>
                        <p>Our friendly team would love to hear from you.</p>
                        <form>
                            <div className="form-row">
                                <div className="form-col">
                                    <Input label="First Name" placeholder="Name" required={true} />
                                </div>
                                <div className="form-col">
                                    <Input label="Your Email" placeholder="Email" required={true} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-col">
                                    <Input label="Subject" placeholder="Subject" required={true} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-col">
                                    <Input type="textarea" label="Your message" placeholder="Your message" required={true} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-col">
                                    <Button text="Send Message"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="contact-info">

                    </div>
                </div>
            </ContentWrapper>
        </section>
    )
}

export default Contact;