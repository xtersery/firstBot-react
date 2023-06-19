import './App.css';
import { useEffect } from 'react';

const tg = window.Telegram.WebApp;

function App() {

    useEffect(() => {
        tg.ready();
    }, [])

    const onClose = () => {
        tg.close();
    }

    return (
        <div className="App">
            <div className="App-header">
                tg.headerColor="#0055ff";
                <div className="header-text">InnoBooking Bot</div>
                <div className="close-button"><button onClick={onClose}>Close</button></div>
            </div>
        </div>
    );
}

export default App;
