import React from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

const chartOptions = {
  title: {
    text: 'Cars Driven by College Students',
    left: 'center',
    textStyle: {
      fontSize: 16
    }
  },
  tooltip: {
    formatter: '{b} : {c}%'
  },
  series: [
    {
      type: 'pie',
      data: [
        { value: 10, name: 'Ford' },
        { value: 24, name: 'Chevy' },
        { value: 12, name: 'Honda' },
        { value: 24, name: 'Toyota' },
        { value: 20, name: 'Nissan' },
        { value: 10, name: 'Other' }
      ]
    }
  ]
};

const PieChart = () => (
  <ReactEchartsCore
    option={chartOptions}
    echarts={echarts}
    style={{
      height: 400,
      width: '100%',
      padding: '32px 32px 0 32px'
    }}
  />
);

export default PieChart;
