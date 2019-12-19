import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'i18n';
import HomeBarChart from 'view/home/HomeBarChart';
import HomeDoughnutChart from 'view/home/HomeDoughnutChart';
import HomeRadarChart from 'view/home/HomeRadarChart';
import HomeMixChartTwo from 'view/home/HomeMixChartTwo';
import HomeMixChartOne from 'view/home/HomeMixChartOne';
import HomeHorizontalBarChart from 'view/home/HomeHorizontalBarChart';
import HomePolarChart from 'view/home/HomePolarChart';
import HomeLineChart from 'view/home/HomeLineChart';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const styles = (theme) => ({
  chartWrapper: {
    border: '1px solid rgb(224, 224, 224)',
    borderRadius: '5px',
    backgroundColor: '#fff',
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

class HomePage extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div
        style={{
          padding: 0,
          marginLeft: '-12px',
          marginRight: '-12px',
        }}
      >
        <Grid container>
          <Grid
            item
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            xl={4}
            lg={4}
            md={6}
            sm={12}
            xs={12}
          >
            <div className={classes.chartWrapper}>
              <HomeDoughnutChart />
            </div>
          </Grid>
          <Grid
            item
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            xl={4}
            lg={4}
            md={6}
            sm={12}
            xs={12}
          >
            <div className={classes.chartWrapper}>
              <HomeMixChartTwo />
            </div>
          </Grid>
          <Grid
            item
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            xl={4}
            lg={4}
            md={6}
            sm={12}
            xs={12}
          >
            <div className={classes.chartWrapper}>
              <HomeBarChart />
            </div>
          </Grid>

          <Grid
            item
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
          >
            <div className={classes.chartWrapper}>
              <HomeMixChartOne />
            </div>
          </Grid>

          <Grid
            item
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
          >
            <div className={classes.chartWrapper}>
              <HomePolarChart />
            </div>
          </Grid>

          <Grid
            item
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            xl={4}
            lg={4}
            md={6}
            sm={12}
            xs={12}
          >
            <div className={classes.chartWrapper}>
              <HomeHorizontalBarChart />
            </div>
          </Grid>
          <Grid
            item
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            xl={4}
            lg={4}
            md={6}
            sm={12}
            xs={12}
          >
            <div className={classes.chartWrapper}>
              <HomeLineChart />
            </div>
          </Grid>
          <Grid
            item
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            xl={4}
            lg={4}
            md={6}
            sm={12}
            xs={12}
          >
            <div className={classes.chartWrapper}>
              <HomeRadarChart />
            </div>
          </Grid>
        </Grid>

        <p
          style={{
            marginTop: '16px',
            width: '100%',
            textAlign: 'center',
            color: 'grey',
          }}
        >
          {i18n('home.message')}
        </p>
      </div>
    );
  }
}

export default connect(null)(withStyles(styles)(HomePage));
