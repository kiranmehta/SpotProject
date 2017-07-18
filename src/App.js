import React from 'react';
import './App.css';
import ReactHover from 'react-hover';
import ToggleButton from './ButtonToggle.js';

var request = require('superagent-bluebird-promise');

function TableComponent(props){
  var seatData = props.data;

 return (<div className="table-container clearfix col-lg-3 col-md-3 col-sm-3 col-xs-3">
         <SeatComponent occupancyStatus={seatData} />
       <div className="table col-lg-3 col-md-3 col-sm-3 col-xs-3">
             <p> {props.data.table_name}</p>
         </div>
         </div>
         );
}

function fillColorInSeats(occupancyData){
  if(occupancyData === "0") {
    return {fill: '#C0C0C0'}; 
  }
  else {
    return {fill: '#2F4F4F'};
  }
}

 function onHoverr(key, e){
    return( <div>
            <ReactHover>
            <span>ddd</span>
            <ReactHover.Hover>
              <HoverComponent />
            </ReactHover.Hover>
            </ReactHover>  
            </div>      
            );
  }


function SeatComponent(props){
  const optionsCursorTrueWithMargin = {
    attachment: 'together',
  followCursor: false,
  shiftX: -160,
  shiftY: -200
};

  return ( <ReactHover
          options={optionsCursorTrueWithMargin}>
          <ReactHover.Trigger>
            <svg id="seat1">
               <circle cx="30" cy="30" r="25" style={fillColorInSeats(props.occupancyStatus.seat_1)} onMouseOver = {onHoverr.bind(this, props.occupancyStatus.table_id+'~~1')} />
             </svg>
             <svg id="seat2">
                <circle cx="30" cy="30" r="25" style={fillColorInSeats(props.occupancyStatus.seat_2)} onMouseOver = {onHoverr.bind(this, props.occupancyStatus.table_id+'~~2')} />
            </svg>
            <svg id="seat3">
               <circle cx="30" cy="30" r="25" style={fillColorInSeats(props.occupancyStatus.seat_3)} onMouseOver = {onHoverr.bind(this, props.occupancyStatus.table_id+'~~3')} />
            </svg>
            <svg id="seat4">
               <circle cx="30" cy="30" r="25" style={fillColorInSeats(props.occupancyStatus.seat_4)} onMouseOver = {onHoverr.bind(this, props.occupancyStatus.table_id+'~~4')}/>
            </svg>
          </ReactHover.Trigger>
          <ReactHover.Hover>
            <HoverComponent />
          </ReactHover.Hover>
        </ReactHover>
        );
}
 
 function HoverComponent(){
  return(
  <div className = "hoverDialog">
    <div className="badge1 image clearfix"></div>
    <div className="empDetails">
      <nav id="empName">Saagar Takhi</nav>
      <nav id="empDesignation">UI developer</nav>
    </div>
    <div className="empTeam">
      <nav className="navTeam">Team</nav>
      <nav className="navTeamName">Mobile Frontend</nav>
      <nav className="navTeam">Current Product</nav>
      <nav className="navTeamName">Dell App Design</nav>
    </div>
  </div>);
}


class App extends React.Component {

    constructor(props) {
       super(props);
       this.state = {
        table : [],
        employee:{}
       };
     }

    componentDidMount() {
        request.get('/getTableData')
        .then((res) => {
           this.setState({table: res.body})
          });

        request.get('/getEmployeeData')
        .then((res) => {
           this.setState({employee: res.body});
          });       
    }

     handleChange = (e) => {
      var empNames=[];
      const employee= this.state.employee;
      var enteredName = e.target.value;

      if(enteredName != null){
        Object.keys(employee).forEach(function(empName) {
          (employee[empName].e_name).includes(enteredName)? console.log("hello") : console.log("hii");

          }
        });
      }




      // Object.keys(employee).forEach(function(empName) {
      //    empNames.push(employee[empName].e_name);
      // });
      //console.log(empNames);
     }

    render(){
      const table = this.state.table;
      const employee = this.state.employee;

      return (
      <div className="container col-lg-12 col-md-12 col-sm-12 col-xs-12">
    
      <div className="spot-logo">
          <p className="badge">Spòt</p>
      </div>
  
      <div className="spr-office"> Sprinklr Office </div>

      <div className="wrap">
        <div className="search">
          <i className="fa fa-search search-icon "></i>
         <input className="searchTerm" placeholder="Search" onChange={this.handleChange}/>
          <ToggleButton />
       </div>
      </div>

      <div className="table-renderer"> {table.map( obj => (<TableComponent data={obj} />))}
      </div> 
    </div>);

    }
}


export default App;
