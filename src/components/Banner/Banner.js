import React from 'react';

const Banner = () => {
    return (
        <div className="bannerComp">
            <div className="container mt-5 mb-5">
                <div style={{ margin: "0 auto" }} className="col-6">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control form-control-lg bg-light" placeholder="Search" aria-label="" aria-describedby="basic-addon2" />
                        <button class="input-group-text btn bg-color text-light px-5" id="basic-addon2">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;