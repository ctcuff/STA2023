import React, { Component } from 'react';
import { InlineMath } from 'react-katex';
import Definitions from './Definitions';
import graph from '../static/freq.png';
import boxplot from '../static/boxplot.png';
import jsonDefinitions from '../static/definitions-ch3';
import 'katex/dist/katex.min.css';
import '../style/Chapter.scss';
import WordSpan from "./WordSpan";

export default class ChapterThree extends Component {

  constructor(props) {
    super(props);
    this.wordList = {};
    jsonDefinitions.forEach(item => {
      this.wordList[item.word.toLowerCase()] = item.definition;
    });
  }

  render() {
    return (
        <div className="container">
          <h1>Chapter Three</h1>
          <hr/>
          <h5 className="header">&bull; Mean, Median, and Mode</h5>
          <p className="indent">
            <mark>A data set can have more than one mode.</mark>
            If there is a tie between two values for the most
            number of times then both values are the mode and the data is called bimodal (two
            modes). If every data point occurs the same number of times, there is no mode. If there
            are more than two numbers that appear the most times, then usually there is no mode.
          </p>
          <div className="spacer"/>
          <p className="indent">
            If there are extreme values in the data, the median is a better measure of the center than
            the mean. If there are no extreme values, the mean and the median will be similar so
            most people use the mean.
          </p>
          <div className="spacer"/>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={graph} alt="" className="img-responsive" height="100%"/>
          </div>
          <div className="spacer"/>
          <p className="indent">&bull; Weighted Average</p>
          <br/>
          <div className="indent">
            <span className="inline-math">
              <InlineMath math={String.raw`\frac{\sum (xw)}{\sum w}`}/> where <InlineMath math="w"/> is
              the weight of the data value, <InlineMath math="x"/>
            </span>
          </div>
          <div className="spacer"/>
          <p className="indent">&bull; <WordSpan word="Standard deviation"
                                                 definition={this.wordList['standard deviation']}/>
          </p>
          <br/>
          <div className="indent">
            <span className="inline-math">
              <InlineMath math={String.raw`s = \sqrt{\frac{\sum (x - \bar x)^2}{n - 1}}`}/> where <InlineMath
                math={String.raw`\bar x`}/> is the mean and <InlineMath math="n"/> is the sample size.
            </span>
          </div>
          <div className="spacer"/>
          <p className="indent">&bull; Population variance</p>
          <br/>
          <div className="indent">
            <span className="inline-math">
              <InlineMath math={String.raw`\sigma^2=\sqrt{\frac{\sum(x-\mu)^2}{N}}`}/> where <InlineMath math="\mu"/> {}
              (greek letter mu) is the population mean and <InlineMath math="N"/> is the size of the population.
            </span>
            <p>
              <mark>Note: The sum of the deviation should always be zero. If is isn't, you made an error.</mark>
            </p>
          </div>
          <hr className="hr-spacing"/>
          <h5 className="header">&bull; Ranking</h5>
          <p className="indent">The kth percentile is the data value that has k% of the data at or below that value.</p>
          <h5 className="header">&bull; Example 3.3.1: Interpreting Percentile</h5>
          <div className="indent">
            <p>a) What does a score of the 90<sup>th</sup> percentile mean?</p>
            <p className="indent-2">This means that 90% of the scores were at or below this score. (A person did
              the same as or better than 90% of the test takers.)
            </p>
            <div className="spacer"/>
            <p>b) What does a score of the 70<sup>th</sup> percentile mean?</p>
            <p className="indent-2">This means that 70% of the scores were at or below this score.</p>
          </div>
          <h5 className="header">&bull; Example 3.3.2: Percentile Versus Score</h5>
          <div className="indent">
            <p>
              a) If the test was out of 100 points and you scored at the 80th percentile, what was
              your score on the test?
            </p>
            <p className="indent-2">
              You don’t know! All you know is that you scored the same as or better than
              80% of the people who took the test. If all the scores were really low, you
              could have still failed the test. On the other hand, if many of the scores were
              high you could have gotten a 95% or so.
            </p>
          </div>
          <div className="spacer"/>
          <h5 className="header">&bull; Quartiles</h5>
          <p className="indent">To find the quartiles:</p>
          <ol className="indent-2">
            <li>Sort the data in increasing order.</li>
            <li>Find the median, this divides the data list into 2 halves.</li>
            <li>Find the median of the data below the median. This value is Q1.</li>
            <li>Find the median of the data above the median. This value is Q3.</li>
          </ol>
          <p className="indent">
            The five-number summary is the minimum, the first quartile (Q1), the median, the third quartile (Q3), and
            the maximum (in that order).
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={boxplot} alt="" className="img-responsive" height="100%"/>
          </div>
          <hr className="hr-spacing"/>
          <Definitions json={jsonDefinitions}/>
        </div>
    );
  }
}
