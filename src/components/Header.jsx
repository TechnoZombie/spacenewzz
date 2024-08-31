const Header = () => {
  const handleReloadPage = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  const handleHeaderClick = (e) => {
    e.preventDefault();
    handleReloadPage(e);
  };

  return (
  <>
    <header className="Header">
      <img onClick={handleReloadPage} className="logo" src="./satellite_dish.png" alt="sattelite_logo" />
      <h1 onClick={handleHeaderClick}>Spacenewzz!</h1>
      </header>
      </>
  );
};

export default Header;