import '../header/header.css'
const header = () => {
    const handleClick = () =>{
        window.location.href = '/home'
    }
    return (
        <div className='container-fluid'>
            <div className="row align-items-center">
                <div className="col-3 text-start" onClick={handleClick}>
                    <div className="logo pl-2 mt-2">
                        <h6>Bhan</h6>
                        <span>kiSaadi</span>
                    </div>
                </div>
                <div className="col-9 text-center">
                    <ul className='list'>
                        <li><a href='/home'>Home</a></li>
                        <li>Live Collectors</li>
                        <li>About</li>
                        <li><a href="/login">Login/Register</a></li>
                    </ul>
                </div>
            </div>
            <hr />
        </div>
    );
}
export default header; 