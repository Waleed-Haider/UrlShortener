import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand mb-0 h1" href="/">
            URL Shortener
          </a>
        </div>
      </nav>
      <form className="p-2">
        <input type="text" />
        <input className="ms-2" type="submit" value="Short It" />
      </form>
      <table className="table table-bordered table-striped">
        <thead className="fw-bold">
          <tr>
            <td>Full Url</td>
            <td>Short Url</td>
            <td>Clicks</td>
          </tr>
        </thead>
        <tbody className="font-bold table-group-divider">
          <tr>
            <td>
              <a href="dummyFullURL">Actual Full URL</a>
            </td>
            <td>
              <a href="dummyShortURL">RandomURL</a>
            </td>
            <td>Clicks Body</td>
          </tr>
          <tr>
            <td>
              <a href="dummyFullURL">Actual Full URL</a>
            </td>
            <td>
              <a href="dummyShortURL">RandomURL</a>
            </td>
            <td>Clicks Body</td>
          </tr>
          <tr>
            <td>
              <a href="dummyFullURL">Actual Full URL</a>
            </td>
            <td>
              <a href="dummyShortURL">RandomURL</a>
            </td>
            <td>Clicks Body</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
