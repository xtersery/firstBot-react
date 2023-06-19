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
            <div className="App-header">InnoBooking Bot</div>
            <div className="close-button"><button onClick={onClose}>Close</button></div>
        </div>
    );
}

export default App;
