import { ContentWrapper } from "../../shared/styled-components/ContentWrapper";
import TitleHeader from "../../shared/components/title-header/TitleHeader";
import Input from "./styled/Input";
import "./Contact.css"
import Button from "../../shared/components/button/Button";
import ContactInfo from "./styled/ContactInfoCard";
import { faEnvelope, faMapLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const contacts = [
    {
        label: 'Phone',
        value: "+01 123 654 8096",
        icon: faEnvelope
    },
    {
        label: 'Mail',
        value: "info@domainname.com",
        icon: faPhone
    },
    {
        label: 'Visit My Studio',
        value: "Warnwe Park Streetperrine, FL 33157 New York City",
        icon: faMapLocationDot
    },
]


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
                        {
                            contacts.map((c, i) => (
                                <div key={i} className="contact-item">
                                    <ContactInfo icon={c.icon} label={c.label} value={c.value} />
                                </div>
                            ))
                        }

                        <div style={{'padding-top': '3rem'}}>
                            <img src="/images/contacts-avatar.svg" alt="joy"/>
                        </div>
                       
                    </div>
                </div>
            </ContentWrapper>
        </section>
    )
}

export default Contact;