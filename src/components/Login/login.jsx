
const login = () => {
    return (
        <div className="container text-center">
            <div className="row d-flex ">
                <div className="col p-5 justify-content-center">
                    <div className="border border-2 border-warning rounded rounded-5">
                        <h1 className="text-center pt-2">Log In</h1>
                        <form className="p-5">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control bg-dark text-light" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control bg-dark text-light" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Log in</button>
                            <div class="form-check">
                                    <label class="form-check-label" for="exampleCheck1">Not have account ? <a href="/register">Register</a></label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default login;