import axios from "axios";
import React, {useEffect, useState} from "react";

const ZipcodeForm = ({
    fetchHourlyDataByZipcode,
    fetchOneCallDataByCustomLatLong,
}) => {
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [country, setCountry] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const getCoordinatesCustomCoordinates = async () => {
        const {data} = await axios.get(
            `http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_POSITIONSTACK_API_KEY}&query=${city}%20${zipcode}%20${country}`
        );
        setLatitude(data.data[0].latitude);
        setLongitude(data.data[0].longitude);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        getCoordinatesCustomCoordinates();
        fetchHourlyDataByZipcode(zipcode);
    };
    useEffect(() => {
        fetchOneCallDataByCustomLatLong(latitude, longitude);
    }, [longitude]);

    return (
        <div className="mb-5">
            <h2 className="mb-3">Enter your desired location</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="col-auto d-flex align-items-center">
                            <label htmlFor="zipcode" className="form-label">
                                Enter your Zipcode:{" "}
                            </label>
                        </div>
                        <div className="col-auto d-flex align-items-center">
                            <input
                                type="number"
                                className="form-control"
                                value={zipcode}
                                onChange={(e) => setZipcode(e.target.value)}
                                id="zipcode"
                            ></input>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="col-auto d-flex align-items-center">
                            <label htmlFor="city" className="form-label">
                                Enter your city:{" "}
                            </label>
                        </div>
                        <div className="col-auto d-flex align-items-center">
                            <input
                                type="text"
                                className="form-control"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                id="city"
                            ></input>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    {/* <div className="col-12 col-md-6">
                        <div className="col-auto d-flex align-items-center">
                            <label htmlFor="district" className="form-label">
                                Enter your district:{" "}
                            </label>
                        </div>
                        <div className="col-auto d-flex align-items-center">
                            <input
                                type="text"
                                className="form-control"
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                id="district"
                            ></input>
                        </div>
                    </div> */}
                    <div className="col-12 col-md-6">
                        <div className="col-auto d-flex align-items-center">
                            <label htmlFor="country" className="form-label">
                                Enter your country:{" "}
                            </label>
                        </div>
                        <div className="col-auto d-flex align-items-center">
                            <input
                                type="text"
                                className="form-control"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                id="country"
                            ></input>
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary mt-4">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ZipcodeForm;
