import React from 'react';
import { Grid }  from '@material-ui/core';
import { NetworkGraphComponent } from './components/NetworkGraph/NetworkGraphComponent';
import { HeaderComponent } from './components/Header/HeaderComponent';
import { DetailsComponent } from './components/Details/DetailsComponent';
import PrintProvider, { Print, NoPrint } from 'react-easy-print';

export class App extends React.Component{
  state = { width: 0, height: 0 };
  render() {
    return <span>Window size: {this.state.width} x {this.state.height}</span>;
  }
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  
  render(){
    return (
      <PrintProvider>
      <div>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12}>
            <HeaderComponent />
          </Grid>
          <Grid item xs={12} sm={9} md={9}>
            <NetworkGraphComponent />
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
          <NoPrint>
            <DetailsComponent />
          </NoPrint>
          </Grid>
        </Grid>
      </div>
      </PrintProvider>
      );
  }

}
