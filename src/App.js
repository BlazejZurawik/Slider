import React from 'react';
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import logo from './logo.svg';
import './App.scss';
import data from './data'
import Slider from './Slider'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      weeks: data.weeks,
      week: data.weeks[0]
    }
  }

  nextWeek = () => {
    const newIndex = this.state.week.index+1;
    if (this.state.week.index < data.weeks.length-1) {
      this.setState({
        week: data.weeks[newIndex]
      })
    }
  }

  prevWeek = () => {
    const newIndex = this.state.week.index-1;
    if (this.state.week.index > 0) {
      this.setState({
        week: data.weeks[newIndex]
      }) 
    }
  }
  
  render() {
  
    return (
      <div className="slider">
        <div className="buttons">
          <div className="arrow left" onClick={() => this.prevWeek()} ><FontAwesomeIcon icon={faArrowLeft}/></div>
          <div className="arrow right" onClick={() => this.nextWeek()}><FontAwesomeIcon icon={faArrowRight}/></div>
        </div>
        <div className="week-slider">
          <div className={`week-slider-wrapper active-slide-${this.state.week.index}`} style={{
                  'transform': `translateX(-${this.state.week.index*(100/this.state.weeks.length)}%)`
                }}>
            {
              this.state.weeks.map(week => <Slider key={week.id} index={week.index} weeks={week.week}/> )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
