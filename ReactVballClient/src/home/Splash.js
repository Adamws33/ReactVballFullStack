import React from 'react';
// import WorkoutIndex from '../workouts/WorkoutIndex';

class Splash extends React.Component{

    render(){
        return (
            <div>
                {console.log('props from splash', this.props)}
                {/* <WorkoutIndex token={this.props.sessionToken}/> */}
            </div>
        )
    }
}

export default Splash;