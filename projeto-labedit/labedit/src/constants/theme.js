import { createTheme} from '@material-ui/core/styles';
import { primaryColor, neutraColor  } from './colors';


const theme = createTheme({
  palette: {
    primary: {
        main: primaryColor ,
        contrastText: "black"
    },

    text: {
        primary:neutraColor
    }
  }
    
});
export default theme