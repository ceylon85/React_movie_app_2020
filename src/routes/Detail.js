import React from 'react';
import "./Home.css";

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const {location} = this.props;
        if (location.state) {
        return <div className="movie"><span>{location.state.title}<br/><br/>
        {location.state.year}<br/><br/>
        {location.state.genres}<br/><br/>
        {location.state.rating}<br/><br/>
        {location.state.summary}<br/><br/>
        </span></div>
                   ;
        } else {
            return null;
        }
    }
}
export default Detail;