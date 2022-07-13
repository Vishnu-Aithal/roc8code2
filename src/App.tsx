import React from "react";
import { Outlet } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { TopNav } from "./components/TopNav/TopNav";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    overflow-y: auto;
`;

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin:0;
        padding:0;
    }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <Main>
                <TopNav />
                <Outlet />
            </Main>
        </>
    );
}

export default App;
