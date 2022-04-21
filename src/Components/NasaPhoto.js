import React from 'react';
import styled from 'styled-components'

const StyledDiv= styled.div`
    background-image: url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80');
    background-size: auto 100%;
    color: white;
    background-size: cover;
    height: 100vh;
`

const StyledImage = styled.img`
   max-width: 60%;
   display: flex;
   align-items: center;

   &:hover {
       max-width: 80%;
       border-radius: 10em;
       border: solid 2px lightblue;
   }
 `

const StyledH3 = styled.h3`
    padding-top: 3em;
    font-size: 2em;
`   

const StyledDate = styled.p`
    font-size: 1.5em;
`
const StyledExp = styled.p`
    padding-top: 1em;
    font-size: 1em;
    text-shadow: 2px 2px black;
    

    &:hover{
        background-color: grey;
        font-size: 1.4em;
        }
`

const NasaPhoto = (props) => {
    




    return (
        <StyledDiv className='nasa-photo-wrapper'>
            <StyledH3>{props.photo.title}</StyledH3>
            <label>Date Picker: </label>
            <input type='date' onChange={props.onChangeHandler} max={props.today} value={props.date}/>
            <StyledDate>{props.photo.date}</StyledDate>
            <StyledImage src={props.photo.hdurl} alt='Space' />
            <StyledExp>{props.photo.explanation}</StyledExp>
        </StyledDiv>
    )
};

export default NasaPhoto;