import React from "react";
import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featured__chart"></div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transcations processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult">
              <div className="resultAmount">$12.4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
