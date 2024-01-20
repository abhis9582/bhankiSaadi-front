import { useNavigate } from "react-router-dom";
import Header from '../header/header'
import Footer from '../footer/footer'
const Login = () => {

    const navigate = useNavigate();
    const logIn = () => {
        navigate('/dashboard')
    }
    const register = () => {
        navigate('/register')
    }
    return (
        <div className="container-fluid">
            <Header />
            <div className="continer justify-content-center text-center">
                <div className="row">
                    <div className="col p-5 justify-content-center">
                        <div className="border border-2 border-warning rounded rounded-5">
                            <h1 className="text-center pt-2">Log In</h1>
                            <form className="p-5">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control bg-dark text-light" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control bg-dark text-light" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <button type="submit" class="btn btn-primary" onClick={logIn}>Log in</button>
                                <div class="form-check">
                                    <label class="form-check-label" for="exampleCheck1">Not have account ?</label><span onClick={register}>Register</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;