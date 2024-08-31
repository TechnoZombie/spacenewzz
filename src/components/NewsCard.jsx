import LoadingScreen from "./LoadingScreen";
import PropTypes from 'prop-types';
import "./LoadingScreen";
import "./NewsCard.css";

function NewsCard({ newsList, loading }) {
  return (
    <div className={`cardHolder ${loading ? "loading" : ""}`}>
      {(loading || newsList.length === 0) ? ( //keeps loading screen showing if newsList array is empty (from  API call error or no data found)
        <LoadingScreen />
      ) : (
        newsList.map((news) => (
          <div className="newsCard" key={news.id}>
            <p className="newsTitle">{news.title.toUpperCase()}</p>
            <div className="newsImageWrapper">
              {news.url && (
                <img
                  src={news.image_url}
                  className="newsImage"
                  alt="news image"
                />
              )}
            </div>
            {news.summary && <p className="newsSummary">{news.summary}</p>}

            <div className="newsSite">
              <a
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button id="linkButton" type="button">
                  {" "}
                  {news.news_site}{" "}
                </button>
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

NewsCard.propTypes = {
  newsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    image_url: PropTypes.string,
    summary: PropTypes.string,
    url: PropTypes.string,
    news_site: PropTypes.string.isRequired
  })),
  loading: PropTypes.bool
};

export default NewsCard;
