import Sidenav from '../dashboard/sidenav/sidenav'
import Maincontent from "./maincontent/maincontent";

const Dashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2 p-0">
                    <Sidenav />
                </div>
                <div className="col-sm-10 p-0">
                    <Maincontent />
                </div>
            </div>
        </div>
    );
}
export default Dashboard;