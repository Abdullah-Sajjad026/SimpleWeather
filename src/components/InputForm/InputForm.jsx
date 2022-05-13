import React, {useState} from "react";

const InputForm = ({setLat, setLong}) => {
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setLat(latitude);
        setLong(longitude);
    };

    return (
        <div className="mb-5">
            <h2 className="mb-3">Enter your desired location</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="col-auto d-flex align-items-center">
                            <label htmlFor="latitude" className="form-label">
                                Enter your Latitude:{" "}
                            </label>
                        </div>
                        <div className="col-auto d-flex align-items-center">
                            <input
                                required
                                type="number"
                                className="form-control"
                                value={latitude}
                                onChange={(e) => setLatitude(e.target.value)}
                                id="latitude"
                            ></input>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="col-auto d-flex align-items-center">
                            <label htmlFor="longitude" className="form-label">
                                Enter your Longitude:{" "}
                            </label>
                        </div>
                        <div className="col-auto d-flex align-items-center">
                            <input
                                required
                                type="number"
                                className="form-control"
                                value={longitude}
                                onChange={(e) => setLongitude(e.target.value)}
                                id="longitude"
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

export default InputForm;
