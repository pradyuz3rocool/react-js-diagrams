import React from 'react';

export class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="navbar-header fixed-brand title-styles">
                    Process Design
        </div>
                <a className="navbar-toggle collapse in slidebtn" data-toggle="collapse" id="menu-toggle-2"><span className="glyphicon glyphicon-play" /></a>
                <ul className="nav navbar-nav navbar-left">
                    <li className="untitled-margin">Untitled</li>
                    <li>
                        <button type="button" className="btn add-img tools-imgsize tools-margin">
                        </button></li>
                    <li>
                        <button type="button" className="btn arrow-img tools-imgsize tools-margin">
                        </button></li>
                    <li>
                        <button type="button" className="btn download-img tools-imgsize tools-margin">
                        </button></li>
                    <li>
                        <button type="button" className="btn delete-img tools-imgsize tools-margin">
                        </button></li>
                </ul>
                <div className="navbar-headerx">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    {/* <a class="navbar-toggle collapse in" data-toggle="collapse" id="menu-toggle-2"><span class="glyphicon glyphicon-play"></span></a> */}
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="icons-space">
                            <button type="button" className="btn mail-img img-icon header-img-margin">
                            </button></li>
                        <li>
                            <button type="button" className="btn sett-img img-icon header-img-margin">
                            </button></li>
                        <li><a href="#" className="text-white">User Name</a>
                        </li>
                    </ul>
                </div>
                {/* bs-example-navbar-collapse-1 */}
            </div>
        )
    }
}