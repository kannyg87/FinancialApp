import styled from 'styled-components'

export const DivSc = styled.div`
background-color: ${props =>props.bgc || "purple"};
width:400px;
height: 400px;
color:white
`;
//sc
export const H1S = styled.h1`
text-align: center;
color: purple;
`;


export const Paper = styled.div`

    box-shadow: 0 4px 8px 0 rgba(0,0,0,1);
    transition: 0.3s;
    background-color:#f5f5dc;
    border-radius: 5px; /* 5px rounded corners */
    width:300px;
    height: ${props => props.height || "90px"};
    margin-left:auto;
    margin-right: auto;
    padding: 10px;
    font-family: "Lucida Console", "Courier New", monospace;
`;
export const Body  = styled.body`
background-color:#FBFBF1 ;
  width: 1000px;
  margin: 0 auto;
`;
export const Container = styled.div`
margin-left: 0 !important;
    margin-right: 0 !important;
    max-width: 100% !important;
    width: auto;
    display: flex;
    flex-wrap: wrap;


`;

export const ChartDiv = styled.div`
  height:70%;
  width:70%;
  
  margin:auto;
  background:#f5f5dc ;

`;

export const ChartDivImg = styled.div`
  height:70%;
  width:70%;
  
  margin:auto;
  background:#f5f5dc ;

`;

export const Img = styled.img`
  padding: 60px;
  width: 100%;
  height:auto;
  padding: 5px;
  background:#f5f5dc ;
  margin-left: auto;
  text-align: center;
  
  
  
  
`;
