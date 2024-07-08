import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Weather">
          <form>
            <div className="row">
              <div className="col-9 ">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control search-input"
                />
              </div>
              <div className="col-3 p-0">
                <input
                  type="submit"
                  className="btn btn-primary w-100"
                  value="Search"
                />
              </div>
            </div>
          </form>
          <div className="WeatherInfo">
            <div className="row">
              <div className="col-6">
                <h1>San Francisco</h1>
                <ul>
                  <li>
                    <span>Wednesday 17:11</span>, broken clouds
                  </li>
                  <li>
                    Humidity: <strong>90%</strong>, Wind:{" "}
                    <strong>8.75km/h</strong>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-8">
                <div className="temperature-container d-flex justify-content-end">
                  <canvas width="52" height="52"></canvas>
                  <div>
                    <span class="temperature">13</span>
                    <span class="unit">°C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="WeatherForecast row">
            <div class="col">
              <div class="WeatherForecastPreview">
                <div class="forecast-time">Wed</div>
                <canvas width="38" height="38"></canvas>
                <div class="forecast-temperature">
                  <span class="forecast-temperature-max">16°</span>
                  <span class="forecast-temperature-min">12°</span>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="WeatherForecastPreview">
                <div class="forecast-time">Thu</div>
                <canvas width="38" height="38"></canvas>
                <div class="forecast-temperature">
                  <span class="forecast-temperature-max">16°</span>
                  <span class="forecast-temperature-min">12°</span>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="WeatherForecastPreview">
                <div class="forecast-time">Fri</div>
                <canvas width="38" height="38"></canvas>
                <div class="forecast-temperature">
                  <span class="forecast-temperature-max">17°</span>
                  <span class="forecast-temperature-min">12°</span>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="WeatherForecastPreview">
                <div className="forecast-time">Sat</div>
                <canvas width="38" height="38"></canvas>
                <div clasName="forecast-temperature">
                  <span className="forecast-temperature-max">17°</span>
                  <span className="forecast-temperature-min">12°</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="WeatherForecastPreview">
                <div className="forecast-time">Sun</div>
                <canvas width="38" height="38"></canvas>
                <div className="forecast-temperature">
                  <span className="forecast-temperature-max">17°</span>
                  <span className="forecast-temperature-min">13°</span>
                </div>
              </div>
            </div>
          </div>
            <footer>
        This project was coded by&nbsp;
        <a href="https://nadika.name/index.html" rel="noreferrer" target="_blank">Nadika</a> and is <a href="https://github.com/nadika-zavodovska/forecast-app-react" rel="noreferrer" target="_blank"> open-sourced on GitHub</a>
      </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
