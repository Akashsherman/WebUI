import React from 'react';
import { WorkHours } from './work-hours';
import SimpleMap from './simple-map';
import RequestForm from './request-appointment-form';
// eslint-disable-next-line
export const Accordion = () => (


  <div id="accordion">
    <div className="card">
      <div className="card-header" id="headingOne">
        <h5 className="mb-0">
          <button
            className="btn btn-link"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
                Request an Appointment
          </button>
        </h5>
      </div>

      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
        <div className="card-body">
          <RequestForm />
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header" id="headingTwo">
        <h5 className="mb-0">
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Operational Hours
          </button>
        </h5>
      </div>
      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
        <WorkHours />
      </div>
    </div>
    <div className="card">
      <div className="card-header" id="headingThree">
        <h5 className="mb-0">
          <button
            className="btn btn-link collapsed"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
                Our location
          </button>
        </h5>
        <SimpleMap />
      </div>
      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
        <div className="card-body">

        </div>
      </div>
    </div>
  </div>
);
