import { makeStyles } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: lightBlue[400],
        margin: '30px'
    },
    right: {
        paddingRight: '30px'
    }
}))

export default useStyles;
