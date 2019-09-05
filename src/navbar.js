import React from 'react';
import styled from "@emotion/styled";
import logo from './images/logo.png';
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';

const Bar = (props) => (
    <div css={css`
        width: 35px;
        height: 5px;
        background-color: #333;
        margin: 6px 0;
        transition: 0.1s;
        &.change.bar1 {
            -webkit-transform: rotate(-45deg) translate(-9px, 6px);
            transform: rotate(-45deg) translate(-9px, 6px);
        }
        &.change.bar2 {opacity: 0;}
        &.change.bar3 {
            -webkit-transform: rotate(45deg) translate(-8px, -8px);
            transform: rotate(45deg) translate(-8px, -8px);
        }
    `} className={props.change ? 'change bar' + props.no : 'bar' + props.no}></div>
)
const Navchunk = styled.div`flex: 1;`
const Menu = (props) => (
    <div className={props.change ? 'change exmenu': 'exmenu'} css={css`
        background-color: rgba(255,255,255,0.7);
        position: absolute;
        top: 5px;
        right: 50px;
        margin: 5px;
        padding: 3px;
        display: none;
        font-family: 'Lato', sans-serif;

        transition: 0.1s;
        &.change {
            display: block;
        }
        & a {
            text-transform: uppercase;
            padding: 5px;
            display: block;
            height: 2rem;
            color: black;
            line-height: 2rem;
            text-decoration: none;
        }
        & ul {
            padding: 3px;
            margin: auto;
            list-style-type: none;
            z-index: 2;
        }
        & li {
            cursor: pointer;
        }
        & li:hover {
            & a {
                color: white;
            }
            background-color: rgba(0,0,0,0.7);
        }
    `}>
        <ul>
            <li><a>Waterways</a></li>
            <li><a>Agriculture</a></li>
            <li><a>Extractive Industry</a></li>
        </ul>
    </div>
)

export default class Navbar extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            change: false
        }
    }
    handleClick() {
        this.setState(prevState => ({
            change: !prevState.change
        }));
    }
    render(){
        return(
            <Router>
                <header>
                    <div className="navbar" css={css`
                        width: 75%;
                        margin: 5px auto 0 auto;
                        height: 50px;
                        display: flex;
                        &:hover {
                            background-color: rgba(0,0,0,0.65);
                            & .navmenu div {
                                background-color: white;
                            }
                            & a {
                                color: white;
                            }
                            & li a {
                                // expanded menu has a white background by default so font shouldn't be white when clicked open
                                color: black;
                            }
                            & .navleft img {
                                background: url('${logo}') 0 40;
                            }
                        }
                        & .navleft img {
                            margin-top: 3px;
                            background: url('${logo}') 0 0;
                            height: 40px;
                            width: 40px;
                        }
                    `}>
                        <Navchunk className="navleft" css={css`
                        `}>
                            <Link to="/" exact>
                                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                                <span css={css`
                                    height: 100%;
                                    padding: 10px 0 15px 10px;
                                `}>
                                    &gt; Digital Newberry
                                </span>
                            </Link>
                        </Navchunk>
                        <Navchunk className="navmid" css={css`
                            text-align: center;
                            font-size: 2rem;
                            font-family: 'Libre Baskerville', serif;
                        `}>
                             {/* <Link to="/" exact>Mapping the Midwest</Link> */}
                            {/* {this.props.match.path === '/' ? <Link to="/" exact>Mapping the Midwest</Link> : '' } */}
                        </Navchunk>
                        <Navchunk className="navright" css={css`
                            display: flex;
                            justify-content: flex-end;
                            position: relative;
                        `}>
                            <Menu change={this.state.change} />
                            <div className="navmenu" css={css`padding-top: 4px; z-index: 3; cursor: pointer;`} onClick={this.handleClick}>
                                <Bar change={this.state.change} no={1} />
                                <Bar change={this.state.change} no={2} />
                                <Bar change={this.state.change} no={3} />
                            </div>
                        </Navchunk>
                    </div>
                </header>
            </Router>
        )
    }
}