import './_nav-panel.scss';

import { linksData } from '../app/app';

const NavPanel = () => {

    const links = linksData.map(link => {

        return (
            <li key={link.id} className='nav-panel-item'>
                <a href={link.href}>
                    {link.label}
                </a>
            </li>
        )
    });


    return (
        <nav className='nav-panel'>
            <ul>
                {links}
            </ul>
        </nav>
    )
}

export default NavPanel;