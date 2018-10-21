import React, {Component} from 'react';
import SlideInOut from './Slide';
import './styles.css';

const SlideDisplay = ({data, defaultPageDisplay}) => (
    <div className= "flex-it" style={{marginTop: '10vh'}}>
      <div className= "flex-it">
          <div className="slideIn-titles">
              <SlideInOut
                targetId = "content-slideIn-contact"
                targetGroup = {["slideIn-content", 'sub-group-list']}
                className="slideIn-title">
                <div className="rotate-text">Contact</div>
              </SlideInOut>
              <SlideInOut
                targetId = "section-list"
                className="slideIn-title"
                targetGroup = {["slideIn-content"]}
                >
                <div className="rotate-text">Resume</div>
              </SlideInOut>
          </div>
        <div id="list-wrapper">
          <div id="section-list" className="sub-group-list showHide">
            { displaySubGroup(data)}
          </div>
        </div>
      <div className="displaySpace">
        {/* <div id="content-slideIn-technical-skills" className="slideIn-content showHide">
          <Skills />
        </div> */}
        <div id="content-slideIn-contact" className="slideIn-content showHide visible" style={{paddingTop: '20vh'}}>
          {defaultPageDisplay()}
        </div>
          {displayData(data)}
        </div>
      </div>
    </div>
);

export default SlideDisplay;


const displayData = data => (
  data.filter(item => item.data).map(box => (
      <table
       key={`content-slideIn-${box.headingId}`}
       id={`content-slideIn-${box.headingId}`}
       className="slideIn-content showHide"
       >
       <tbody>{
        box.data.map(row => (
          <tr key={row.title}>
            <td className="minor-col">
              <b className="title">{row.title}</b>
              {row.date &&
                <div className="small-text">
                  <i>
                    {row.date}
                    <br />
                    {row.location && row.location}
                  </i>
                </div>
              }
            </td>
            <td className="majof-col">
              <b className="company">{row.company}</b>
              {row.list ?
                <ul className="data">
                  {row.list.map(item => (
                        <li key={item}>{item}</li>
                      ))
                  }
                </ul>
                :
                <div className="data">
                {row.info}
                  </div>
              }
            </td>
          </tr>
          ))
      }</tbody>
     </table>
    ))
);

const displaySubGroup = data => (
  data.map((dataGroup) => (
    <SlideInOut
      key={dataGroup.heading}
      targetId = {`content-slideIn-${dataGroup.headingId}`}
      targetGroup= {['slideIn-content']}
      className="slideIn-subGroup-title"
      >
        <br />
        <i className="material-icons">{dataGroup.symbol}</i>
        <br />
        {dataGroup.heading}
    </SlideInOut>
    ))
);
