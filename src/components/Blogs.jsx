import LoadingScreen from "./LoadingScreen";
import PropTypes from 'prop-types';
import "./LoadingScreen";

function Blogs({ blogsList, loading }) {

  return (
     <div className={`cardHolder ${loading ? "loading" : ""}`}>
    {(loading || blogsList.length === 0) ? (
      <LoadingScreen />
    ) : (
        blogsList.map((blogs) => (
        <div className="newsCard" key={blogs.id}>
          <p className="newsTitle">{blogs.title.toUpperCase()}</p>
          <div className="newsImageWrapper">
            {blogs.url && (
              <img
                src={blogs.image_url}
                className="newsImage"
                alt="news image"
              />
            )}
          </div>
          {blogs.summary && <p className="newsSummary">{blogs.summary}</p>}

          <div className="newsSite">
            <a
              href={blogs.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button id="linkButton" type="button">
                {" "}
                {blogs.news_site}{" "}
              </button>
            </a>
          </div>
        </div>
      ))
    )}
  </div>
  );
}

Blogs.propTypes = {
    blogsList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      image_url: PropTypes.string,
      summary: PropTypes.string,
      url: PropTypes.string,
      news_site: PropTypes.string.isRequired
    })),
    loading: PropTypes.bool
  };

export default Blogs;
