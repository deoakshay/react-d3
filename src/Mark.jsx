import React, { Component } from 'react';
import {
  XYPlot,
  MarkSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  Hint
} from 'react-vis';
import _ from 'lodash';
import ReactToolTip from 'react-tooltip';

const tempData = [
  {
    network: 'SCIENCE',
    service_id: 65,
    selling_title: 'SCI EARLY MORNING /S1',
    hour: 7,
    date: '2019-11-19',
    broadcast_week: '2019-11-18',
    datetime: '2019-11-19T07:00:00',
    demographic_building_block_id: 22,
    gender: 'Females',
    rating_stream: 'C3',
    media_owner_impressions: 572,
    clypd_impressions: 591
  },
  {
    network: 'SCIENCE',
    service_id: 65,
    selling_title: 'SCI EARLY MORNING /S1',
    hour: 7,
    date: '2019-11-19',
    broadcast_week: '2019-11-18',
    datetime: '2019-11-19T07:00:00',
    demographic_building_block_id: 9,
    gender: 'Males',
    rating_stream: 'C3',
    media_owner_impressions: 2784,
    clypd_impressions: 4883
  },
  {
    network: 'SCIENCE',
    service_id: 65,
    selling_title: 'SCI EARLY MORNING /S1',
    hour: 7,
    date: '2019-11-19',
    broadcast_week: '2019-11-18',
    datetime: '2019-11-19T07:00:00',
    demographic_building_block_id: 8,
    gender: 'Males',
    rating_stream: 'C3',
    media_owner_impressions: 3332,
    clypd_impressions: 7750
  },
  {
    network: 'SCIENCE',
    service_id: 65,
    selling_title: 'SCI EARLY MORNING /S1',
    hour: 7,
    date: '2019-11-19',
    broadcast_week: '2019-11-18',
    datetime: '2019-11-19T07:00:00',
    demographic_building_block_id: 27,
    gender: 'Females',
    rating_stream: 'C3',
    media_owner_impressions: 3778,
    clypd_impressions: 7492
  },
  {
    network: 'SCIENCE',
    service_id: 65,
    selling_title: 'SCI EARLY MORNING /S1',
    hour: 7,
    date: '2019-11-19',
    broadcast_week: '2019-11-18',
    datetime: '2019-11-19T07:00:00',
    demographic_building_block_id: 17,
    gender: 'Females',
    rating_stream: 'C3',
    media_owner_impressions: 228,
    clypd_impressions: 349
  },
  {
    network: 'SCIENCE',
    service_id: 65,
    selling_title: 'SCI EARLY MORNING /S1',
    hour: 7,
    date: '2019-11-19',
    broadcast_week: '2019-11-18',
    datetime: '2019-11-19T07:00:00',
    demographic_building_block_id: 6,
    gender: 'Males',
    rating_stream: 'C3',
    media_owner_impressions: 467,
    clypd_impressions: 1106
  },
  {
    network: 'SCIENCE',
    service_id: 65,
    selling_title: 'SCI EARLY MORNING /S1',
    hour: 7,
    date: '2019-11-19',
    broadcast_week: '2019-11-18',
    datetime: '2019-11-19T07:00:00',
    demographic_building_block_id: 13,
    gender: 'Males',
    rating_stream: 'C3',
    media_owner_impressions: 8693,
    clypd_impressions: 29570
  },
  {
    network: 'SCIENCE',
    service_id: 65,
    selling_title: 'SCI EARLY MORNING /S1',
    hour: 7,
    date: '2019-11-19',
    broadcast_week: '2019-11-18',
    datetime: '2019-11-19T07:00:00',
    demographic_building_block_id: 26,
    gender: 'Females',
    rating_stream: 'C3',
    media_owner_impressions: 2650,
    clypd_impressions: 5243
  },
  {
    network: 'SCIENCE',
    service_id: 65,
    selling_title: 'SCI EARLY MORNING /S1',
    hour: 7,
    date: '2019-11-19',
    broadcast_week: '2019-11-18',
    datetime: '2019-11-19T07:00:00',
    demographic_building_block_id: 28,
    gender: 'Females',
    rating_stream: 'C3',
    media_owner_impressions: 3466,
    clypd_impressions: 6889
  },
  {
    network: 'SCIENCE',
    service_id: 65,
    selling_title: 'SCI EARLY MORNING /S1',
    hour: 7,
    date: '2019-11-19',
    broadcast_week: '2019-11-18',
    datetime: '2019-11-19T07:00:00',
    demographic_building_block_id: 2,
    gender: 'Males',
    rating_stream: 'C3',
    media_owner_impressions: 322,
    clypd_impressions: 1643
  }
];

const dataonbuild = _.keyBy(tempData, 'demographic_building_block_id');

class Mark extends Component {
  render() {
    return (
      <div className='my-graph'>
        <XYPlot width={300} height={300} className='something'>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis className='x-axis' />
          <YAxis className='y-axis' />
          <MarkSeries
            className='mark-series-example'
            strokeWidth={2}
            opacity='0.8'
            sizeRange={[5, 15]}
            data={_.map(tempData, t => {
              return {
                x: t.demographic_building_block_id,
                y:
                  ((t.clypd_impressions - t.media_owner_impressions) /
                    t.clypd_impressions) *
                  100
              };
            })}
            onValueClick={datapoint =>
              console.log(dataonbuild[datapoint.x].network)
            }
            onValueMouseOver={(datapoint, event) => {
              console.log(
                event,
                dataonbuild[datapoint.x].network,
                dataonbuild[datapoint.x].selling_title,
                dataonbuild[datapoint.x].datetime,
                dataonbuild[datapoint.x].hour,
                dataonbuild[datapoint.x].demographic_building_block_id,
                dataonbuild[datapoint.x].media_owner_impressions,
                dataonbuild[datapoint.x].clypd_impressions
              );
            }}
          />
        </XYPlot>
      </div>
    );
  }
}

export default Mark;
