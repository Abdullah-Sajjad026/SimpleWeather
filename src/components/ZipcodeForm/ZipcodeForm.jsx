import React, {useState} from "react";

const ZipcodeForm = ({fetchHourlyDataByZipcode, fetchOneCallDataByZipcode}) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        fetchHourlyDataByZipcode(input);
        fetchOneCallDataByZipcode(input);
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
