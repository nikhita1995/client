import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import ScrollTop from './Components/ToolBar/ScrollTop';
import AppBar from './Components/ToolBar/AppBar';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Home from './Components/Dashboard/Home';
import SignIn from './Components/Startup/SignIn';
import Users from './Components/Dashboard/Users';

const App = (props) => {

  const [login, setLogin] = useState(true)

  const [page, setPage] = useState("Home")

  const pages = ['Home', 'About', 'Users', 'Courses', 'Contact Us'];

  const handleLogin = () => {
    setLogin(!login)
  }

  const handlePage = (page) => {

    if (pages.includes(page))
    setPage(page)
  }


  return (
    <React.Fragment>
      {login ? <SignIn handleLogin={handleLogin} /> :
        <React.Fragment>
          <AppBar handleLogin={handleLogin} handlePage={handlePage} />
          <Toolbar id="back-to-top-anchor" />
          {page === "Users" ? < Users/> : <Home/>}

          <ScrollTop {...props}>
            <Fab size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />

            </Fab>
          </ScrollTop>
        </React.Fragment>}
    </React.Fragment>
  );
}
export default App;