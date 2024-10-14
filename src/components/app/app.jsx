import NavPanel from "../nav-panel/nav-panel";
import Promo from "../promo/promo";

import './_app.scss';

export const linksData = [
    { href: '#', label: 'Coffee house', id: 1 },
    { href: '#', label: 'Our coffee', id: 2 },
    { href: '#', label: 'Four your pleasure', id: 3 },
];

const App =  () => {

    return (
        <div className='app'>
            <header className='header'>
                <NavPanel />
            </header>
            <Promo />
        </div>
    )
}

export default App;