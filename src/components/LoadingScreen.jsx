import { useState, useEffect } from 'react';
import ChuckNorris from './ChuckNorris.json';
import './LoadingScreen.css';

function LoadingScreen() {
    const [fact, setFact] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const factArray = ChuckNorris.result;
                const randomIndex = Math.floor(Math.random() * factArray.length);
                const randomFact = factArray[randomIndex];
                setFact(randomFact);
            } catch (error) {
                console.error('Error fetching Chuck Norris facts:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='Board'>
            <div className='factsCard'>
            <span className='loadingHeader'>LOADING...</span>
            <span className='loadingGif'>
                <img src='./chuckie.gif'></img>
            </span>
            {fact && <p className="facts">{fact.value}</p>}

            <p className="loadingFooter">Facts provided by Chucknorris.io</p>
            <p className="loadingFooter">Attribution: Artwork &quot;Dancing Chuck&quot; by 
            <a href="http://jesgrad07.deviantart.com/"> jesgrad07</a> </p>
            </div>
        </div>
    );
}

export default LoadingScreen;
