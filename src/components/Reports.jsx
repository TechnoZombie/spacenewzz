import LoadingScreen from "./LoadingScreen";
import PropTypes from 'prop-types';
import "./LoadingScreen";

function Reports({ reportsList, loading }) {

  return (
     <div className={`cardHolder ${loading ? "loading" : ""}`}>
    {(loading || reportsList.length === 0 )? (
      <LoadingScreen />
    ) : (
        reportsList.map((reports) => (
        <div className="newsCard" key={reports.id}>
          <p className="newsTitle">{reports.title.toUpperCase()}</p>
          <div className="newsImageWrapper">
            {reports.url && (
              <img
                src={reports.image_url}
                className="newsImage"
                alt="news image"
              />
            )}
          </div>
          {reports.summary && <p className="newsSummary">{reports.summary}</p>}

          <div className="newsSite">
            <a
              href={reports.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button id="linkButton" type="button">
                {" "}
                {reports.news_site}{" "}
              </button>
            </a>
          </div>
        </div>
      ))
    )}
  </div>
  );
}

Reports.propTypes = {
    reportsList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      image_url: PropTypes.string,
      summary: PropTypes.string,
      url: PropTypes.string,
      news_site: PropTypes.string.isRequired
    })),
    loading: PropTypes.bool
  };

export default Reports;