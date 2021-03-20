import "./Login.css";

import { Link } from 'react-router-dom';

function Login() {
  return (
   <fragment>
       <h2 className="page-title">LOG IN</h2>
       <section className="center">
            <article></article>
                <form>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="email" type="email" className="form-input-field" name="email" />
                            <span className="vaidation-error error-text-red">Email is required!</span>
                            <span className="vaidation-error error-text-red">Email is invalid!</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-field-group">
                            <input id="password" type="password" className="form-input-field" name="password"/>
                            <span className="vaidation-error error-text-red">Password is required!</span>
                            <span className="vaidation-error error-text-red">Password must be at least 6 characters!</span>
                        </div>
                        <span className="vaidation-error error-text-red form-error">ERROR MESSAGE HERE</span>
                    </div>
                    <div className="login-button">
                        <button className="btn waves-effect waves-light login-btn" name="action"><i className="material-icons left">input</i>Login</button>
                    </div>
                </form>
            </section>
                <div className="not-registered">Don't have an account? <Link to="./register" exact>REGISTER</Link></div>
            <article></article>
    </fragment>
  );
}

export default Login;