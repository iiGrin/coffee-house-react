import Links from "../links/links";
import BeansLogo from "../beans-logo/beans-logo";

import './_footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <Links />
            <BeansLogo />
        </footer>
    )
}

export default Footer;