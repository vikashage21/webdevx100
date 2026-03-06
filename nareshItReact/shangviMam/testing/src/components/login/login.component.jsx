import "./login.component.css";
function LoginComponent() {
  return (
    <div className="form-container">
      <form className=" d-flex input-form justify-content-center mt-5 border w-50 p-5 alert alert-warning alert-dismissible ">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
        ></button>
        <dl className="d-flex flex-column gap-3">
          <dd>login</dd>
          <label htmlFor="">Email</label>
          <input
            className="form-control"
            type="text"
            placeholder="enter Your email"
          />
          <label htmlFor="">password</label>

          <input
            className="form-control"
            type="password"
            placeholder="Enter your password"
          />
          <button className="btn btn-warning mt-3" value={"login"}>
            login
          </button>
        </dl>
      </form>
    </div>
  );
}

export default LoginComponent;
