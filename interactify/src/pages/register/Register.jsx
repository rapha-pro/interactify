import "./register.css";

function Register() {
  return (
    <div className="register-container d-flex align-items-center justify-content-center">
      <div className="register-wrapper d-flex justify-content-between">
        <div className="register-left d-flex flex-column justify-content-center">
            <h3 className="register-logo fs-1 mb-2">Interactify</h3>
            <span className="register-desc fs-4">
                Connect with friends and family around you on Interactify
            </span>
        </div>
        <div className="register-right">
            <div className="register-box d-flex flex-column justify-content-between h-100 p-4 justify-content-between rounded bg-white">
                <input type="text" placeholder="Username" className="registerInput" />
                <input type="text" placeholder="Email" className="registerInput" />
                <input type="text" placeholder="Password" className="registerInput" />
                <input type="text" placeholder="Confirm Password" className="registerInput" />
                <button className="registerButton rounded border-0 text-white cursor-pointer fs-6">Sign up</button>
                <span className="registerForgot text-center cursor-pointer">Already have an account?</span>
                <button className="register-register-button rounded border-0 text-white cursor-pointer fs-6 align-self-center w-50">
                    Log in
                </button>
            </div>
        </div>
      </div>
    </div>
  )
};

export default Register;