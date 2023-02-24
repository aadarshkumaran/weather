import React from "react";

const DisplayWeather = ({ data }) => {
    console.log('props', data);
    const iconUrl = `http://openweathermap.org/img/wn/${data.cod != 404 ? data.weather[0].icon : null}.png`
    return (<div className="display-weather">
        {
            data.cod != 404 ? (
                <React.Fragment>
                    <div className="card mt-3">
                        <div className="card-body" style={{background:"rgb(199, 199, 199)"}}>
                            <h3 className='text-danger'>{data.name}, {data.sys.country}</h3>
                            <span className="card-text font-italic">
                                As of {new Date().toLocaleTimeString()}
                            </span>
                            <div className="info d-flex align-items-center justify-content-around" style={{ margin: "auto 35%" }}>
                                <h1>
                                    {Math.floor(data.main.temp - 273.15)}<sup>o</sup>C / {Math.floor((data.main.temp - 273.15) * 9 / 5 + 32)}<sup>o</sup>F
                                </h1>
                                <img src={iconUrl} width="100px" alt="..." />
                                <span>{data.weather[0].main}</span><br />
                            </div>
                            <span>{data.weather[0].description}</span>
                        </div>
                    </div>
                    <div className="card my-3">
                    <div className="weather-details container mt-3 d-flex align-items-center justify-content-around">
                        <div className="section1">
                            <table className="">
                                <tr>
                                    <div className="">
                                        <td>
                                            <h6>High/Low Temperature (in <sup>o</sup>C):</h6>
                                        </td>
                                        <td>
                                            <span>{Math.floor(data.main.temp_max - 273.15)}</span> /  <span>{Math.floor(data.main.temp_min - 273.15)}</span>
                                        </td>
                                    </div>
                                    <hr />
                                    <div className="">
                                        <td>
                                            <h6>High/Low Temperature(in <sup>o</sup>F):</h6>
                                        </td>
                                        <td>
                                            <span>{Math.floor((data.main.temp_max - 273.15) * 9 / 5 + 32)}</span> /  <span>{Math.floor((data.main.temp_min - 273.15) * 9 / 5 + 32)}</span>
                                        </td>
                                    </div>
                                    <hr />
                                    <div className="">
                                        <td>
                                            <h6>Humidity:</h6>
                                        </td>
                                        <td>
                                            <span>{data.main.humidity} %</span>
                                        </td>
                                    </div>
                                    <hr />
                                    <div className="">
                                        <td>
                                            <h6>Pressure:</h6>
                                        </td>
                                        <td>
                                            <span>{data.main.pressure} hPa</span>
                                        </td>
                                    </div>
                                    <hr />
                                    <div className="">
                                        <td>
                                            <h6>Visibility:</h6>
                                        </td>
                                        <td>
                                            <span>{data.visibility / 1000} km</span>
                                        </td>
                                    </div>
                                </tr>
                            </table>
                        </div>
                        <div className="section2">
                            <table className="">
                                <tr>
                                    <div className="">
                                        <td>
                                            <h6>Wind:</h6>
                                        </td>
                                        <td>
                                            <span>{Math.floor((data.wind.speed * 18) / 5)} km/h</span>
                                        </td>
                                    </div>
                                    <hr />
                                    <div className="">
                                        <td>
                                            <h6>Wind Direction:</h6>
                                        </td>
                                        <td>
                                            <span>{data.wind.deg} <sup>o</sup> deg</span>
                                        </td>
                                    </div>
                                    <hr />
                                    <div className="">
                                        <td>
                                            <h6>Sunrise:</h6>
                                        </td>
                                        <td>
                                            <span>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</span>
                                        </td>
                                    </div>
                                    <hr />
                                    <div className="">
                                        <td>
                                            <h6>Sunset:</h6>
                                        </td>
                                        <td>
                                            <span>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</span>
                                        </td>
                                    </div>
                                </tr>
                            </table>
                        </div>
                    </div>
                    </div>
                    
                </React.Fragment>
            ) : (
                <div className="card mt-3">
                    <div className="card-body bg-muted">
                        <h2>{data.message}</h2>
                    </div>
                </div>
            )
        }
    </div>);
}

export default DisplayWeather;