import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {StyledToolbar} from "./styled"
import Button from '@material-ui/core/Button';
import {gotoFeedPostsPage, gotoLogin } from "../../routes/coordinator";
import { useHistory } from 'react-router-dom';


const Header = () => {
 const history = useHistory()
    return (
    
      <AppBar position="static">
         <StyledToolbar>
             <Button onClick={() => gotoFeedPostsPage(history ) } color="inherit">Labedit </Button>
             <Button  onClick={() => gotoLogin (history ) } color="inherit">Login</Button>
         </StyledToolbar>
      </AppBar>
    );
}
export default Header