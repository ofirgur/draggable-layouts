import styled from 'styled-components';

export default styled.div`
    transition: all 200ms ease;
    transition-property: left, top;
    background: #B0C4DE; 
    box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    margin: 10px;
    height: 50px;
    width: 80px;

    @media(min-width: 690px) {
        height: 100px;
        width: 140px;
    }
`;



