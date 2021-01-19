import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
    padding: '1rem',
    backgroundColor: '#f5f5f5',
  },
  h5: {
    marginBottom: '1.3rem',
    fontSize: '1.3rem',
    fontFamily: 'Roboto Slab',
  },
  formControl: {
    marginBottom: 12,
    paddingBottom: 12,
    width: '100%',
    color: '#757575',
    fontSize: '.9rem',
    // borderBottom: '1px solid #bdbdbd',
  },
  input: {
    marginTop: '0.4rem !important',
    color: '#424242',
    fontFamily: 'Roboto Slab',
  },
  errorMessage: {
    color: '#e53935',
    fontSize: '0.8rem',
    fontStyle: 'italic',
  },
  btnImg: {
    lineHeight: 1.25,
    fontSize: '0.75rem',
  },
  formSelect: {
    width: '100%',
  },

});
