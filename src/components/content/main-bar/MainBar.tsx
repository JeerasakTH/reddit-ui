import React from 'react'

import CloseIcon from '@material-ui/icons/Close';
import Whatshot from '@material-ui/icons/Whatshot';
import NewReleases from '@material-ui/icons/NewReleases';
import TrendingUp from '@material-ui/icons/TrendingUp';
import Menu from '@material-ui/icons/Menu';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';



import './MainBar.css'
import Posts from '../posts/Posts';

function MainBar() {
    return (
        <div className="main-bar">
            <div className="update-card">
                <div className="top-section">
                    <span>UPDATES FROM REDDIT</span>
                    <CloseIcon className="hoverable" />
                </div>
                <div className="body hoverable">
                    <div className="context">
                        <span className="title">Lorem ipsum dolor sit amet.</span>
                        <br />
                        <span className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas mollitia ex molestias esse, in harum!</span>
                    </div>
                    <img src="/assets/images/pin.jpg" alt="" />
                </div>
            </div>
            <div className="filter-container">
                <div className="filter-element hoverable">
                    <Whatshot />
                    <span>Hot</span>
                </div>
                <div className="filter-element hoverable">
                    <span>Everywhere</span>
                    <ArrowDropDown />
                </div>
                <div className="filter-element-secondary hoverable">
                    <NewReleases />
                    <span>New</span>
                </div>
                <div className="filter-element-secondary hoverable">
                    <TrendingUp />
                    <span>New</span>
                </div>
                <MoreHoriz className="filter-element-tertiary hoverable" />
                <div className="spacer"></div>
                <div className="filter-element-menu hoverable">
                    <Menu />
                    <ArrowDropDown />
                </div>
            </div>
            <Posts />
        </div>
    )
}

export default MainBar
