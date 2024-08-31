//REACT
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

//COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsCard from "./components/NewsCard";
import Blogs from "./components/Blogs";
import Reports from "./components/Reports";
import ErrorPage from "./components/ErrorPage";
import HeaderMenu from "./components/HeaderMenu";
import LoadingScreen from "./components/LoadingScreen";

//CSS
import "./App.css";
import "./components/Switch.css";
import "./components/Dropdown.css";

const NEWS_BASE_URL =
  "https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=0";
const NEWS_SEARCH_URL = NEWS_BASE_URL + "&search=";
const NEWS_SORT_RECENT = NEWS_BASE_URL + "&ordering=-published_at";
const NEWS_SORT_OLDER = NEWS_BASE_URL + "&ordering=published_at";

const BLOG_BASE_URL =
  "https://api.spaceflightnewsapi.net/v4/blogs/?limit=10&offset=0";
const REPORTS_BASE_URL =
  "https://api.spaceflightnewsapi.net/v4/reports/?limit=10&offset=0";

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [newsList, setNewsList] = useState([]);
  const [blogsList, setBlogsList] = useState([]);
  const [reportsList, setReportsList] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [lightMode, setLightMode] = useState(false);
  const [sortLabel, setSortLabel] = useState("Sort by...");
  const [loading, setLoading] = useState(true); // Track loading state

  const handleSearch = async (event) => {
    event.preventDefault();
    if (searchInput.trim() === "") {
      return;
    }
    {
      const searchApi = NEWS_SEARCH_URL + searchInput;
      const searchData = await fetchData(searchApi);
      setNewsList(searchData.results);
      setNextPage(searchData.next);
      setPreviousPage(searchData.previous);
    }
  };

  const handleNextPage = async () => {
    if (nextPage) {
      const searchData = await fetchData(nextPage);
      setNewsList(searchData.results);
      setNextPage(searchData.next);
      setPreviousPage(searchData.previous);
    }
  };

  const handlePreviousPage = async () => {
    if (previousPage) {
      const searchData = await fetchData(previousPage);
      setNewsList(searchData.results);
      setNextPage(searchData.next);
      setPreviousPage(searchData.previous);
    }
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const togglelightMode = () => {
    setLightMode(!lightMode);
  };

  const handleSortLabel = async (label, sorting) => {
    setSortLabel(label);
    const searchData = await fetchData(sorting);
    setNewsList(searchData.results);
    setNextPage(searchData.next);
    setPreviousPage(searchData.previous);
  };

  useEffect(() => {
    const fetchInitialNewsData = async () => {
      setLoading(true); // Set loading to true before fetching data
      try {
        const initialNewsData = await fetchData(NEWS_BASE_URL);
        setNewsList(initialNewsData.results);
        setNextPage(initialNewsData.next);
        setPreviousPage(initialNewsData.previous);
      } catch (error) {
        // Handle the error here, e.g., display an error message
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched or if an error occurs
      }
    };
    fetchInitialNewsData();
  }, []);

  useEffect(() => {
    const fetchInitialBlogsData = async () => {
      setLoading(true); // Set loading to true before fetching data
      const initialBlogsData = await fetchData(BLOG_BASE_URL);
      setBlogsList(initialBlogsData.results);
      setLoading(false); // Set loading to false after data is fetched
    };
    fetchInitialBlogsData();
  }, []);

  useEffect(() => {
    const fetchInitialReportsData = async () => {
      setLoading(true); // Set loading to true before fetching data
      const initialReportsData = await fetchData(REPORTS_BASE_URL);
      setReportsList(initialReportsData.results);
      setLoading(false); // Set loading to false after data is fetched
    };
    fetchInitialReportsData();
  }, []);

  return (
    <>
      {/*     <body className={lightMode ? "light-mode" : ""}>
        {/* Apply dark mode class to entire body*/}

      <Header />
      <HeaderMenu />

      <div className="searchBar">
        <input
          id="searchInput"
          type="text"
          placeholder="Search news..."
          onChange={handleInputChange}
        />
        <button id="searchButton" type="button" onClick={handleSearch}>
          Search
        </button>

        <div className="dropdown">
          <button className="dropbtn">{sortLabel}</button>
          <div className="dropdown-content">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleSortLabel("Recent", NEWS_SORT_RECENT);
              }}
            >
              Recent
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleSortLabel("Older", NEWS_SORT_OLDER);
              }}
            >
              Older
            </a>
          </div>
        </div>

        <button
          id="previousButton"
          type="button"
          onClick={handlePreviousPage}
          disabled={!previousPage}
        >
          Previous Page
        </button>
        <button
          id="nextButton"
          type="button"
          onClick={handleNextPage}
          disabled={!nextPage}
        >
          Next Page
        </button>
        <div className="mode-toggle">
          <span>
            <img src="./moon-regular.svg" id="moon" alt="Moon" />
          </span>
          <label className="switch">
            <input
              type="checkbox"
              checked={lightMode}
              onChange={togglelightMode}
            />
            <span className="slider round"></span>
          </label>
          <span>
            <img src="./sun-regular.svg" id="sun" alt="sun" />
          </span>
        </div>
      </div>

      <div className={`Board ${lightMode ? "light-mode" : ""}`}>
        <Routes basename="/spacenewzz">
          <Route
            path="/spacenewzz"
            element={<NewsCard newsList={newsList} loading={loading} />}
          />
          <Route
            path="spacenewzz/news"
            element={<NewsCard newsList={newsList} loading={loading} />}
          />
          <Route
            path="spacenewzz/blogs"
            element={<Blogs blogsList={blogsList} loading={loading} />}
          />
          <Route
            path="spacenewzz/reports"
            element={<Reports reportsList={reportsList} loading={loading} />}
          />

          <Route path="spacenewzz/loading" element={<LoadingScreen />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
      {/* </body> */}
    </>
  );
}

export default App;
