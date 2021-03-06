import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;

    let aboutStyle = {
        backgroundImage: `url(" ${resumeData.BG} ")`,
        backgroundRepeat: 'repeat',
        bacgroundColor: 'white',
        paddingBottom: '66px',
        paddingTop: '96px',
        color: 'black',
    }

    return (
      <section id="about" style={aboutStyle}>
         <div className="row">

            <div className="three columns">
               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
            </div>

            <div className="nine columns main-col">
               <h2 className="title">About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">
                  <div className="columns contact-details">

                  <h2 className="title">Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
