import React from 'react';
import style from './inventory.module.css';
import Sidebar from '../../../components/Sidebar';
import Topbar from '../../../components/Topbar';
import PageHeading from '../../../components/PageHeading';
import Footer from '../../../components/Footer';

import '../../../assets/css/sb-admin-2.min.css';
import '../../../assets/vendor/fontawesome-free/css/all.min.css';
import '../../../assets/vendor/datatables/dataTables.bootstrap4.min.css';

const Inventory = () => {
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
              <PageHeading title="Inventory" />

              <button type="button" className="btn btn-outline-primary mb-4" data-bs-toggle="modal" data-bs-target="#create">
                Add Product
              </button>
              <table className="table table-hover table-responsive">
                <thead>
                  <tr>
                    <th scope="col" className="align-middle text-center py-2">
                      Images
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Id
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Airlines Name
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Website
                    </th>

                    <th scope="col" className="align-middle text-center">
                      Email
                    </th>
                    <th scope="col" className="align-middle text-center">
                      No Telpon
                    </th>
                    <th scope="col" className="align-middle text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* <ModalUpdateAirlines airline={''} /> */}
                  <tr>
                    <td className="align-middle py-3">
                      <img src={''} style={{ height: '25px', objectFit: 'cover' }} alt="airline" />
                    </td>
                    <td className={`align-middle ${style.tableColumn}`}>{'data.id'}</td>
                    <td className={`align-middle ${style.tableColumn}`}>{'data.name'}</td>
                    <td className={`align-middle ${style.tableColumnWebsite}`}>
                      <a href={'data.website'}> {''}</a>
                    </td>

                    <td className={`align-middle ${style.tableColumnWebsite}`}>{'email'}</td>
                    <td className={`align-middle ${style.tableColumn}`}>{'phone number'}</td>

                    <td className="align-middle text-center">
                      <div className="container d-flex gap-1">
                        <button type="button" className="btn btn-warning btn-sm me-2" onClick={() => {}}>
                          <i className="bi bi-eye-slash" />
                        </button>

                        <button type="button" className="btn btn-success btn-sm me-2" data-bs-toggle="modal" data-bs-target={`#update${'data.id'}`}>
                          <i className="bi bi-pencil-square" />
                        </button>

                        <button className="btn btn-danger btn-sm" onClick={() => {}}>
                          <i className="bi bi-trash-fill" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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

export default Inventory;
