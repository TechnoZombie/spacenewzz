import PropTypes from 'prop-types';
import 'react';
import './ErrorPage.css';
import MenuButton from './MenuButton';
import LoadingScreen from "./LoadingScreen";

function ErrorPage({ loading }) {
    return (
        <div className={`container ${loading ? "loading" : ""}`}>
        {loading ? (
          <LoadingScreen />
        ) : (
            <div className='errorHolder'>
                <div className='errorCard'>
                    <p>404!</p>
                    <p>You&apos;ve drifted too far from the spaceship!</p>
                    <img className="astronaut" src="/astronaut.png" alt="astronaut_image" />
                </div>
                <MenuButton label='RETURN TO NEWS' link='spacenewzz/news'></MenuButton>
            </div>
                  )}
        </div>
    );
}

ErrorPage.propTypes = {
    loading: PropTypes.bool
};

export default ErrorPage;
