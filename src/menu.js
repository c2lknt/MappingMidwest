import React from "react"
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hovercontent from './hovercontent'

export default class Menu extends React.Component {
    
    mouseEnter(i) {
        const hoverstuff = <Hovercontent img={i[0]} text={i[1]} />
        this.props.callbackFromParent(hoverstuff);
    }
    mouseLeave(i) {
        this.props.callbackFromParent('');
    }
    render() {
        const menuContent = [
            ['waterways', 'Waterways','waterways.jpg'],
            ['agri', 'Agriculture','agri.jpg','55% 60%','125%'],
            ['ei', 'Extractive Industry','ei.jpg',"20% 40%"],
            ['infra', 'Infrastructure','infra.jpg'],
            ['wparte','WPA Route 66','rte66.jpg','40% 45%','300%'],
            ['dp','Dialect Patterns','dialect.jpg','15% 67%',"400%"]]
        return (
            <div css={css`text-align: center;`}>
            <ul css={css`
                display: flex;
                width: 80%;
                border-top: 1px solid rgba(0,0,0,0.5);
                list-style-type: none;
                padding: 0;
                margin: 15px auto;
            `}>
                {menuContent.map((item, index) =>
                    <li key={index} href={item[0]} onMouseEnter={() => this.mouseEnter(item)} onMouseLeave={() => this.mouseLeave(index)} 
                    css={css`
                        padding: 15px 5px 5px 5px;
                        display: inline-block;
                        height: 50px;
                        overflow: wrap;
                        flex: 1;
                        text-align: center;
                        vertical-align: top; 
                        color: black;
                        text-decoration: none;
                        text-transform: uppercase;
                        font-family: 'Lato', sans-serif;
                            &:hover {
                                background: rgba(0,0,0,0.25);
                            }
                            & a {
                                color: black;
                            }
                        }
                    `}
                        >
                        { this.props.page === 'mm' ? <Link to={`/mm/${item[0]}`}>{item[1]}</Link> : <a href={item[0]}>{item[1]}</a>}
                    </li>
                )}

            </ul>
        </div>
        )
    }
};