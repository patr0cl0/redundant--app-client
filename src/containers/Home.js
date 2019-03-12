import React from 'react';
import { connect } from 'react-redux';
import { sendTextRequest } from '../redux/rootReducer';
import Form from './Form';

const Home = ({
  request,
  sendText,
}) => {
  const handleSubmit = data => event => {
    event.preventDefault();

    sendText(data)
  };

  return (
    <div className="row justify-content-center w-100">
      {request && (
        <div className="col-10">
          <div className="media">
            <code className="media-body">
              <p>status: {request.status} {request.statusText}</p>
              <p>response: {request.data}</p>
              {Object.entries(request.headers).map(([key, value]) => (
                <p key={key}>{key} {value}</p>
              ))}
              <p>response: {request.data}</p>
            </code>
          </div>
        </div>
      )}

      <div className="col-md-4 col-sm-8">
        <Form
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ requests }) => ({
  request: requests,
});

const mapDispatchToProps = {
  sendText: sendTextRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
