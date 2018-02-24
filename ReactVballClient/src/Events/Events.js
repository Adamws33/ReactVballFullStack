import React, { Component } from "react";
import { Button, Container } from 'reactstrap';
import Register from '../Register/Register';


class Events extends Component {

  constructor(props) {
      super(props)
      this.state={
        showResultsApril: false,
        showResultsMay: false,
        showResultsJune: false,
        showResultsJuly: false,
        showResultsAug: false,
        showResultsSep: false,
      };

      this.registerClickApril = this.registerClickApril.bind(this);
      this.registerClickMay = this.registerClickMay.bind(this);
      this.registerClickJune = this.registerClickJune.bind(this);
      this.registerClickJuly = this.registerClickJuly.bind(this);
      this.registerClickAug = this.registerClickAug.bind(this);
      this.registerClickSep = this.registerClickSep.bind(this);
      this.registerCancel = this.registerCancel.bind(this);
  }

registerClickApril(){
  this.setState({
    showResultsApril: true,
  });
}
registerClickMay(){
  this.setState({
    showResultsMay: true,
  });
}
registerClickJune(){
  this.setState({
    showResultsJune: true,
  });
}
registerClickJuly(){
  this.setState({
    showResultsJuly: true,
  });
}
registerClickAug(){
  this.setState({
    showResultsAug: true,
  });
}
registerClickSep(){
  this.setState({
    showResultsSep: true,
  });
}
registerCancel(){
  this.setState({
    showResultsApril: false,
    showResultsMay: false,
    showResultsJune: false,
    showResultsJuly: false,
    showResultsAug: false,
    showResultsSep: false,
  });
}
  render() {
    return (
      <Container className='main'>
              <h1 className="text-center">Upcoming Events For 2018</h1><hr/>
              <h3 className="text-center lead"><strong>Below are the upcoming scheduled Indy V Baller events.  Check back regularly as new dates will be added regularly</strong></h3>
              <h2 className="text-center">April</h2>
              <hr/>
              <p className="text-center"><strong >April 1st  </strong><Button size="sm" onClick={this.registerClickApril}>Register </Button>
              <strong>  April 20th  </strong><Button size="sm" onClick={this.registerClickApril}>Register </Button> </p>
              {console.log("this", this)}
              {this.state.showResultsApril ? <Register />: null}
              {this.state.showResultsApril ? (<Button onClick={this.registerCancel}>Back</Button>) : null}
              <hr/>
              <h2 className="text-center">May</h2>
              <hr/>
              <p className="text-center"><strong>May 5th  </strong><Button size="sm" onClick={this.registerClickMay}>Register</Button>
              <strong>  May 20th  </strong><Button size="sm" onClick={this.registerClickMay}>Register</Button> </p>
              {this.state.showResultsMay ? <Register />: null}
              {this.state.showResultsMay ? (<Button onClick={this.registerCancel}>Back</Button>) : null}
              <hr/>
              <h2 className="text-center">June</h2>
              <hr/>
              <p className="text-center"><strong>June 5th  </strong><Button size="sm" onClick={this.registerClickJune}>Register</Button>
              <strong>  June 5th  </strong><Button size="sm" onClick={this.registerClickJune}>Register</Button> </p>
              {this.state.showResultsJune ? <Register />: null}
              {this.state.showResultsJune ? (<Button onClick={this.registerCancel}>Back</Button>) : null}
              <hr/>
              <h2 className="text-center">July</h2>
              <hr/>
              <p className="text-center"><strong>July 5th  </strong><Button size="sm" onClick={this.registerClickJuly}>Register</Button>
              <strong>  July 5th  </strong><Button size="sm" onClick={this.registerClickJuly}>Register</Button> </p>
              {this.state.showResultsJuly ? <Register />: null}
              {this.state.showResultsJuly ? (<Button onClick={this.registerCancel}>Back</Button>) : null}
              <hr/>
              <h2 className="text-center">August</h2>
              <hr/>
              <p className="text-center"><strong>Aug 5th  </strong><Button size="sm" onClick={this.registerClickAug}>Register</Button>
              <strong>  Aug 5th  </strong><Button size="sm" onClick={this.registerClickAug}>Register</Button> </p>
              {this.state.showResultsAug ? <Register />: null}
              {this.state.showResultsAug ? (<Button onClick={this.registerCancel}>Back</Button>) : null}
              <hr/>
              <h2 className="text-center">September</h2>
              <hr/>
              <p className="text-center"><strong>Sept 5th  </strong><Button size="sm" onClick={this.registerClickSep}>Register</Button>
              <strong>  Sept 5th  </strong><Button size="sm" onClick={this.registerClickSep}>Register</Button> </p>
              {this.state.showResultsSep ? <Register />: null}
              {this.state.showResultsSep? (<Button onClick={this.registerCancel}>Back</Button>) : null}

      </Container>
    );
}};

export default Events;
