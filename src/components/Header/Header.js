import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
    root: {
        color: theme.palette.primary.contrastText,
        background: theme.palette.primary.main,
        padding: '1em',
        fontFamily: theme.typography.fontFamily,
    },
});


const Header = (props) => {
    const { children, classes, className, variant, ...other } = props;
    return <header className={classNames(classes.root)} >
        <h1> This is my progressive web app</h1>
    </header>;
}

export default withStyles(styles)(Header); 