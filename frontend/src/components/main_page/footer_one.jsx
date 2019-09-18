import React from 'react';
import WhiteLogo from '../../assets/images/forest_icon_white.png'
import { Link, withRouter } from 'react-router-dom';

class FooterOne extends React.Component {
    render() {
        return(
            <div className="footer1">
                <div className="back-to-top">
                    <a href={`#${this.props.history.location.pathname}`}><span>Back to top</span></a>
                </div>
                <div className="footer-links-groups">
                    <div className="footer-group">
                        <div>Get to Know Us</div>
                        <ul>
                            <li><a href="https://github.com/AbbyTunes">Abby</a></li>
                            <li><a href="https://github.com/tbbennett1">Brock Bennett</a></li>
                            <li><a href="https://github.com/ropfa0604">Brett Meyer</a></li>
                            <li><a href="https://github.com/catly1">Carlos Catly</a></li>
                        </ul>
                    </div>
                    <div className="footer-group">
                        <div>Make Money with Us</div>
                        <ul>
                            <li><a href="">Sell your pet</a></li>
                            <li><a href="">Sell pet food</a></li>
                        </ul>
                    </div>

                    <div className="footer-group">
                        <div>Let Us help You</div>
                        <ul>
                            <li><a href="">Your Account</a></li>
                            <li><a href="">Your Orders</a></li>
                            <li><a href="">Help</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-logo">
                    <a href={`#${this.props.history.location.pathname}`}><img src={WhiteLogo} alt=""/></a>
                </div>
            </div>
        )
    }
}

export default withRouter(FooterOne);