import "./login.css";

function Login() {
  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <div className="login-wrapper d-flex justify-content-between">
        <div className="login-left d-flex flex-column justify-content-center">
            <h3 className="login-logo fs-1 mb-2">Interactify</h3>
            <span className="login-desc fs-4">
                Connect with friends and family around you on Interactify
            </span>
        </div>
        <div className="login-right">
            <div className="login-box mt-5 d-flex flex-column justify-content-between h-75 p-4 justify-content-between rounded bg-white">
                <input type="text" placeholder="Username" className="loginInput" />
                <input type="text" placeholder="Password" className="loginInput" />
                <button className="loginButton rounded border-0 text-white cursor-pointer fs-6">Log in</button>
                <span className="loginForgot text-center cursor-pointer">Forgot Password?</span>
                <button className="login-register-button rounded border-0 text-white cursor-pointer fs-6 align-self-center w-50">
                    Create a New Account
                </button>
            </div>
        </div>
      </div>
    </div>
  )
};

export default Login;