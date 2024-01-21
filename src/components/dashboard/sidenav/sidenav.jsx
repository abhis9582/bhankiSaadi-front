import '../sidenav/sidenav.css'
const Sidenav = () => {
    return (
        <div className="sidenav">
            <div className="profile p-2 border-bottom border-dark text-center">
                <div className="profile-image">

                </div>
                <span className='d-block'>Abhishek Kumar</span>
                <span>abhishek@gmail.com</span>
            </div>
            <nav>
                <div className="options p-2">
                    <span>Profile</span>
                </div>
                <div className="options p-2">
                    <span>My collections</span>
                </div>
                <div className="options p-2">
                    <span>Add More</span>
                </div>
                <div className="options p-2">
                    <span>History</span>
                </div>
                <div className="options p-2">
                    <span>Last transactions</span>
                </div>
                <div className="options p-2">
                    <span>Verification Status</span>
                </div>
                <div className="options p-2">
                    <span>Edit Details</span>
                </div>
                <div className="options p-2">
                    <span>Donate</span>
                </div>
                <div className="options p-2">
                    <span>View Myadd</span>
                </div>
                <div className="options p-2">
                    <span>My Collection</span>
                </div>
                <div className="options p-2">
                    <span>Total Collection</span>
                </div>
                <div className="options p-2">
                    <span>Marragies List</span>
                </div>
                <div className="options p-2">
                    <span>Log out</span>
                </div>
            </nav>
        </div>
    )
}
export default Sidenav;