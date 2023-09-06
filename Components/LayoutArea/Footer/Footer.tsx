import "./Footer.css";

function Footer(): JSX.Element {
    const now =new Date()
    const year = now.getFullYear()
    return (
        <div className="Footer">
			<h1>All rights reserved © {year}</h1>
        </div>
    );
}

export default Footer;
