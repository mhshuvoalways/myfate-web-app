import "./home.scss";

const input = () => {
  return (
    <div className="form-main">
      <div>
        <p>Full Name</p>
        <input type="text" className="form-input" placeholder="Please Provide Your Full Name"/>
      </div>
      <div className="form-mt">
        <p>Email</p>
        <input type="email" className="form-input" placeholder="Please Provide Your Email"/>
      </div>
      <button className="btn btn__submit">Submit</button>
    </div>
  );
};

export default input;
