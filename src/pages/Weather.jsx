import { useState } from "react";
import DisplayWeather from "../components/DisplayWeather";

const Weather = () => {
    const APIKey = "aba1b455a867aac044558dbde204e9d4"
    const [form, setForm] = useState({
        city: "",
        country: ""
    })

    const[weather,setWeather] = useState([])

    let handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        if (name === "city") {
            setForm({ ...form, city: value })
        }
        if (name === "country") {
            setForm({ ...form, country: value })
        }
    }

    let weatherData = async (e) => {
        e.preventDefault()
        if (form.city === "") {
            return (
                alert(`Please Enter the City!`)
            )
        }
        else {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKey}`)
            .then(res => res.json())
            .then(data => data)
            setWeather({data:data})
        }
    }

    return (
        <div className="weather mt-4">
            <div className="container p-1 border border-1 w-auto">
                <div className="title">
                    <h4 className="mt-3 font-weight-bolder font-size-1">Weather App Lite</h4>
                </div>
                <div style={{ margin: "30px",gap:"10px"}}>
                    <form className="container">
                        <div className="city p-auto mx-auto">
                            <input type="text" style={{ marginBottom:"10px"}} name="city" placeholder="Enter City" className="form-control" onChange={e => handleChange(e)} />
                        </div>
                        <div className="country p-auto mx-auto">
                            <input type="text" style={{ marginBottom:"10px"}} name="country" placeholder="Enter Country (Optional)" className="form-control" onChange={e => handleChange(e)} />
                        </div>
                        <button className="btn btn-success" onClick={e => weatherData(e)}>Check the Weather!</button>
                    </form>
                </div>
                {
                weather.data !== undefined ?(
                <div className="container w-auto mx-auto">
                    <DisplayWeather data={weather.data}/>
                </div>
                ):null
            }
            </div>
        </div>
        
    );
}

export default Weather;