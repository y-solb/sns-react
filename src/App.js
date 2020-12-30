import React, { Fragment } from "react";
import Routes from "./route";
import GlobalStyles from "./styles/GlobalStyles";
import {SnackbarProvider} from "notistack";
import {ApolloProvider} from "@apollo/client";
import {client} from "./apollo/client"



function App() {

  return (
    <ApolloProvider client={client}>
      <SnackbarProvider 
        maxSnack={3} 
        anchorOrigin={{
          vertical:"top",
          horizontal:"center",
        }}
      >
        <Fragment> 
          <Routes/>
          <GlobalStyles />
        </Fragment>
      </SnackbarProvider>
    </ApolloProvider>
    );
}

export default App;

//Fragment -가상으로 만들어지는 div