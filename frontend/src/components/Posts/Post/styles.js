import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  
  media: {
    height: 0,
    paddingTop: '50.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
   
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '10px',
   
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px',
  },
  title: {
    marginTop: '5px',
    padding: '0 10px',
  },
  price: {
    marginTop: '2px',
    padding: '0 10px',
  },
  cardActions: {
    padding: '0 16px 8px 16pxx',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
