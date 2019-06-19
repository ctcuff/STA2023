import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import { InlineMath } from 'react-katex';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'katex/dist/katex.min.css';
import '../style/Chapter.scss';
import globals from '../style/_globals.scss';

export default class ChapterTwo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth < parseInt(globals.screenBreakpoint)
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  onWindowResize = () => {
    this.setState({
      isMobile: window.innerWidth < parseInt(globals.screenBreakpoint)
    });
  };

  FrequencyTable = () => (
      <div style={{ margin: this.state.isMobile ? '0' : '0 32px 0 32px' }}>
        <Table bordered hover responsive size="sm">
          <thead>
            <tr>
              <th>Category</th>
              <th>Frequency</th>
              <th>Relative Frequency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ford</td>
              <td>5</td>
              <td>0.10</td>
            </tr>
            <tr>
              <td>Chevy</td>
              <td>12</td>
              <td>0.24</td>
            </tr>
            <tr>
              <td>Honda</td>
              <td>6</td>
              <td>0.12</td>
            </tr>
            <tr>
              <td>Toyota</td>
              <td>12</td>
              <td>0.24</td>
            </tr>
            <tr>
              <td>Nissan</td>
              <td>10</td>
              <td>0.20</td>
            </tr>
            <tr>
              <td>Other</td>
              <td>5</td>
              <td>0.10</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>50</td>
              <td>1.00</td>
            </tr>
          </tbody>
        </Table>
      </div>
  );


  chartOptions = () => {
    return {
      title: {
        text: 'Cars Driven by College Students',
        left: 'center',
        textStyle: {
          fontSize: 16
        }
      },
      tooltip: {
        formatter: "{b} : {c}%"
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
            { value: 10, name: 'Other' },
          ]
        }
      ],
    }
  };

  render() {
    const stemPlot = "" +
        "4|5 0\n" +
        "5|8\n" +
        "6|2 9 2 2\n" +
        "7|4 5 2\n" +
        "8|2 3";

    return (
        <div className="container">
          <h1>Chapter Two</h1>
          <hr/>
          <h5>&bull; Frequency</h5>
          {this.FrequencyTable()}
          <p className="indent">
            The total of the frequency column should be the number of observations in the data.
            The relative frequency is found by taking the frequency and dividing it by the total.
          </p>
          <ReactEchartsCore
              option={this.chartOptions()}
              echarts={echarts}
              style={{
                height: 400,
                width: '100%',
                padding: '32px 32px 0 32px'
              }}
          />
          <div className="indent">
            <p>
              A <mark>frequency distribution</mark> lists each category of data how many times
              that data occurs.
            </p>
            <p>
              The <mark>relative frequency</mark> is the proportion (or percent or probability which is what you
              are looking at divided by the total amount) of observations within a category and is
              found using the formula:
              <span className="inline-math">
              <InlineMath math={String.raw`\frac{\text{frequency}}{\sum \text{frequencies}}`}/>
            </span>
            </p>
            <p>
              A <mark>relative frequency distribution</mark> lists each category of data with the relative frequency.
              It is found using the formula {}
              <span className="inline-math">
              <InlineMath math={String.raw`\frac{\text{frequency}}{\text{\# of data points}}`}/>
            </span>
            </p>
          </div>
          <h5 className="header">&bull; Steps to make a frequency distribution</h5>
          <ol className="indent spacing">
            <li>Find the range (max - min).</li>
            <li>
              Pick the number of classes to use. Usually this is between 5 and 20. Pick 5 classes
              if there is a small amount of data and 20 classes if there is a lot (think 1,000).
            </li>
            <li>
              Find the class width: {}
              <span className="inline-math">
              <InlineMath math={String.raw`\frac{\text{range}}{\text{\# of classes}}`}/>
            </span>
              {} <strong>always</strong> round up to the next whole number.
            </li>
            <li>
              Create the classes. Each class has limits that determine which values fall in
              each class. To find the class limits, set the smallest value as the lower class
              limit for the first class then add the class width to the lower class limit to get
              the next lower class limit. Repeat until you get all the classes. The upper class
              limit for a class is one less than the lower limit for the next class.
            </li>
            <li>
              Find the class boundary by subtracting 0.5 from lower class limit and adding 0.5
              to the upper class limit.
            </li>
            <li>
              To find the class boundaries, subtract 0.5 from the lower class limit and add 0.5 to the upper
              class limit.
            </li>
            <li>
              To find the class midpoint (you might not always need it): Midpoint = {}
              <span className="inline-math">
              <InlineMath math={String.raw`\frac{\text{lower limit + upper limit }}{2}`}/>
            </span>
            </li>
            <li>
              To figure out the number of data points that fall in each class, go through each
              data value and see which class boundaries it is between
            </li>
          </ol>
          <hr className="hr-spacing"/>
          <h5>&bull; Stem and Leaf Plot</h5>
          <div className="indent">
          <pre>
            <code style={{ fontSize: 16 }}>{stemPlot}</code>
          </pre>
            <p>This data is read as 45, 40, 58, 62, 69, 62, 62, 74, 75, 72, 82, 83</p>
          </div>
        </div>
    );
  }
}