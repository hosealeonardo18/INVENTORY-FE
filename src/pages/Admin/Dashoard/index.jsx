import React from 'react';
import Sidebar from '../../../components/Sidebar';
import Topbar from '../../../components/Topbar';
import PageHeading from '../../../components/PageHeading';
import DashboardDetail from '../../../components/DashboardDetail';
import Footer from '../../../components/Footer';

import '../../../assets/css/sb-admin-2.min.css';
import '../../../assets/vendor/fontawesome-free/css/all.min.css';
import '../../../assets/vendor/datatables/dataTables.bootstrap4.min.css';

const Dashboard = () => {
  return (
    <body id="page-top">
      <div id="wrapper">
        {/* sidebar */}
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            <Topbar />
            <div className="container-fluid px-4">
              <PageHeading title={`Welcome, Hosea Leonardo`} />

              <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                  <DashboardDetail title="Product" count={10} icon="bi bi-airplane" accsent="border-left-success" />
                </div>
              </div>
            </div>
          </div>
          {/* End of Main Content */}

          <Footer />
        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up" />
      </a>
    </body>
  );
};

export default Dashboard;
