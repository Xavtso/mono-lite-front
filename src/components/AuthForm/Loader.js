import Timer from "./Timer";

const Loader = function () {
  return (
    <div className="loader">
      <div className="load-message">
        Sorry server is down at the momemt and you need to wait for a little
        time. This is due to the fact that I have a free hosting plan that has a
        short period of activity and then goes into sleep mode
      </div>
      <div className="timer-text">
        Approximate time is less than:{" "}
        <span className="timer">
          <Timer />
        </span>
      </div>
      <div className="load">
        <div className="load-text">Loading</div>
        <div className="custom-loader"></div>
      </div>
    </div>
  );
};

export default Loader;
