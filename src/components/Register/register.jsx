
const register = () => {
    return (
        <div className="container text-center">
            <div className="row d-flex ">
                <div className="col p-5 justify-content-center">
                    <div className="border border-2 border-warning rounded rounded-5">
                        <h1 className="text-center pt-2">Register</h1>
                        <form className="p-5">
                            <div className="row">
                                <div className="col-6">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">First Name</label>
                                        <input type="email" className="form-control bg-dark text-light" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter firstname" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Last Name</label>
                                        <input type="email" className="form-control bg-dark text-light" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter lastname" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control bg-dark text-light" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Phone number</label>
                                        <input type="email" className="form-control bg-dark text-light" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter phonenumber" max={10} min={10}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control bg-dark text-light" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Confirm Password</label>
                                        <input type="password" className="form-control bg-dark text-light" id="exampleInputPassword1" placeholder="Confirm Password" />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Create Account</button>
                            <div class="form-check">
                                <label class="form-check-label" for="exampleCheck1">Already have account ? <a href="/login">Login</a></label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
  )
}



export default register;