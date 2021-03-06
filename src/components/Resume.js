import React from 'react';
//import ListGroup from 'react-bootstrap/ListGroup'

export default  class Resume extends React.Component {
  render() {
    let resumeData = this.props.resumeData;

    let listStyle = {
      display: 'list-item',
      listStyle:'square',
      marginLeft: '10px',
      marginRight: '10px',
      color: 'black',
    }

    let workStyle = {
        backgroundImage: `url(" ${resumeData.BG} ")`,
        backgroundRepeat: 'repeat',
        bacgroundColor: 'white',
        paddingBottom: '50px',
        paddingTop: '50px',
        borderRadius: '50px',
        
    }

    let workStyle2 = {
        backgroundImage: `url(" ${resumeData.BG2} ")`,
        backgroundRepeat: 'repeat',
        bacgroundColor: 'white',
        paddingBottom: '50px',
        paddingTop: '50px',
    }

    let sealStyle = {
      width: '100px',
      height: this.width,
      paddingLeft: '10px',
    }

    return (
      <section id="resume" style={workStyle2}>

         <div className="row education" style={workStyle}>

            <div className="columns header-col">
               <h1>Education</h1>
            </div>

            <div className="columns">
              <img style={sealStyle} src="images/ucsd.png" alt="not available"/>
            </div>

            <div className="eight columns">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfStart} {item.YearOfStart} - {item.MonthOfGrad} {item.YearOfGrad}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>

        <div className="row work" style={workStyle}>
            <div className="three columns header-col">
               <h1>Work</h1>
            </div>


            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfStart} {item.YearOfStart} - {item.MonthOfLeaving} {item.YearOfLeaving}</em></p>

                          <ul>
                             {
                               item.Responsibilities.map((thing) => {
                                 return(
                                   <li style = {listStyle}>{thing}</li>
                                 )
                               })
                             }
                					</ul>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div>
         </div>


         <div className="row skill" style={workStyle}>

            <div className="three columns header-col">
               <h1>Skills</h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div>

   				   <ul>
                {
                  resumeData.skills.map((item) => {
                    return(
                      <li style = {listStyle}>{item.skillname}</li>
                    )
                  })
                }
   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}
