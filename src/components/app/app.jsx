import NavPanel from "../nav-panel/nav-panel";
import Promo from "../promo/promo";
import Footer from "../footer/footer";

import './_app.scss';

const App =  () => {

    return (
        <div className='app'>
            <header className='header'>
                <NavPanel />
            </header>
            <Promo />
            <Footer />
        </div>
    )
}

export default App;