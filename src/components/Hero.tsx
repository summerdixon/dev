import "../styles/global.css";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
      backgroundColor: 'var(--color-gray-tertiary)',
      marginLeft: 'var(--space-xl)',
      marginTop: 'var(--space-xl)',
    },
  });

export default function Hero() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1 className="title"> Summer Dixon Personal Website </h1>
        </div>
    );
}