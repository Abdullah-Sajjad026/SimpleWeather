import axios from "axios";
import React, {useState} from "react";

const ZipcodeForm = ({
    fetchHourlyDataByZipcode,
    fetchOneCallDataByCustomLatLong,
    country,
}) => {
    const [input, setInput] = useState("");

    const getCoordinatesFromZipcode = async (zipcode) => {
        const {data} = await axios.get(
            `http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_POSITIONSTACK_API_KEY}&query=${zipcode}%20${country}`
        );
        const latitude = data.data.latitude;
        const longitude = data.data.longitude;
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        getCoordinatesFromZipcode(input);
        fetchHourlyDataByZipcode(input);
        fetchOneCallDataByCustomLatLong(1.23, 2.78);
    };

    return (
        <div className="mb-5">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-auto d-flex align-items-center">
                        <label for="zipcode" class="form-label">
                            Enter your Zipcode:{" "}
                        </label>
                    </div>
                    <div className="col-auto d-flex align-items-center">
                        <input
                            type="number"
                            class="form-control"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            id="zipcode"
                        ></input>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ZipcodeForm;
