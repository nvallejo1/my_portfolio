import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;

    let workStyle = {
        backgroundImage: `url(" ${resumeData.BG} ")`,
        backgroundRepeat: 'repeat',
        bacgroundColor: 'white',
        paddingBottom: '50px',
        paddingTop: '50px',
    }

    let buttonStyle = {
      color: 'white',
      backgroundColor: '#FFAACC',
    }

    let titleStyle = {
      paddingBottom: '10px',
      fontSize: '40px',
      fontStyle: 'italic',
      fontFamily: 'librebaskerville-bold',
      color: 'black'
    }

    return (


      <div style={workStyle}>
        <div class="container">
          <div>
            <div class="col-md-10 col-md-offset-1 text-center fh5co-heading">
              <p style={titleStyle}>{resumeData.outtro}</p>
              <button style={buttonStyle}>Download my Resume</button>
            </div>
          </div>
        </div>
      </div>

        );
  }
}
