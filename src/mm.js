import React from 'react';
// import Corecontent from './corecontent'
import Hovercontent from './hovercontent'
import Menu from './menu'
import styled from "@emotion/styled";

const Corecontent  = styled.div`
    border-radius: 4px;
    box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12) !important;
    text-align: left;
    background-color: rgba(0,0,0,0.65);
    font-family: 'Lato', sans-serif;
    flex: 3;
    color: white;
    padding: 20px;
    margin: 10px
    display: inline-block;
`
const Main = styled.div`
    display: flex;
    width: 75%;
    margin: 0 auto 60px auto;
    overflow: auto;
`
const Hovercontainer = styled.div`
    flex: 2;
`
const Title = styled.h1`
    text-align: center;
    margin: 0 5rem;
    padding: 1rem 0;
    font-size: 4rem;
    font-family: 'Libre Baskerville', serif;
`
export default class ContentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoverstuff: ''
        };    
    }
    myCallback = (dataFromChild) => {
        this.setState({ hoverstuff: dataFromChild });
    }
    render(){
        return (
            <div>
                <div>
                    <Title>Mapping the Midwest</Title>
                </div>
                <Menu page={this.props.page} callbackFromParent={this.myCallback} />
                <Main>
                <Corecontent>
                    <h2>Need a sub title here.</h2>
                    <p>Although regions are often determined by boundaries, consider how networks have influenced the distinct history of the Midwest. Waterways and transportation routes connected the interior to broader trade networks and markets for centuries. More recently, the movement of people and resources shaped the evolution of agricultural, extractive, and tourist industries in the Midwest. Navigate the maps below to explore how networks define the region.</p>
                    <p>Choose a section below and then use arrows to progress through each story map. Click pictures to view them with a magnifying glass; click a second time to open the full image in another tab.</p>
                    <p>The Newberry Library is located on Indigenous homelands. The Potawatomi, Odawa, Sauk, Ojibwe, Illinois, Kickapoo, Miami, and others resided and traded along Lake Michigan\'s shoreline into the nineteenth century. The Newberry honors and respects Chicago's diverse American Indian community.</p>
                </Corecontent>
                    <Hovercontainer>
                        <Hovercontent content={this.state.hoverstuff} />
                    </Hovercontainer>
                </Main>
            </div>
        )
    }
}