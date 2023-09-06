import useTitle from "../../../Utils/UseTitle";
import "./ContactUs.css";

function ContactUs(): JSX.Element {
    useTitle("Contact us");
    return (
        <div className="ContactUs">
			<p>Call us: 0523456789</p>
        </div>
    );
}

export default ContactUs;
