import React from 'react';
import Definitions from './Definitions';
import { InlineMath } from 'react-katex';
import WordSpan from './WordSpan';
import jsonDefinitions from '../static/definitions-ch10.json';
import correlation from '../static/scatter-plots-correlation.jpg'
import '../style/Chapter.scss';
import 'katex/dist/katex.min.css';

const wordList = {};
jsonDefinitions.forEach(item => {
  wordList[item.word.toLowerCase()] = item.definition;
});

const yInt = String.raw`a = \frac{(\sum y)(\sum x^2) - (\sum x)(\sum xy)}{n(\sum x^2) - (\sum x)^2}`;
const slope = String.raw`b = \frac{n(\sum xy) - (\sum x)(\sum y)}{n(\sum x^2) - (\sum x)^2}`;

export default function ChapterTen() {
  return (
      <div className="container">
        <h1>Chapter Ten</h1>
        <hr/>
        <h5>&bull; Regression and Correlation</h5>
        <div className="indent">
          <p>
            Asks "Is there a relationship between two variables?" and "How strong is that relationship?"
          </p>
          <p>
            The best fitting line is the linear relationship in the data. {}
            <WordSpan word="Residuals" definition={wordList['residuals']}/> are the distance each point
            is from the best fit line.
          </p>
          <div>
            The equation for linear regression is:<br/>
            <div className="spacer"/>
            <span className="inline-math indent">
              <InlineMath math={String.raw`y = a + bx`}/>
            </span>
            <div className="spacer"/>
            y is the <mark>dependent</mark> variable and x is the <mark>independent</mark> variable.
            a is the y-intercept and is found with the formula:<br/><br/>
            <span className="inline-math indent">
              <InlineMath math={yInt}/>
            </span>
            <div className="spacer"/>
            b is the slope and is found with the formula:
            <div className="spacer"/>
            <span className="inline-math indent">
              <InlineMath math={slope}/>
            </span>
            <div className="spacer"/>
            n is the sample size (number of rows on the table). This is a lot of work so just plug the values into
            a calculator like {}
            <a
                href="https://www.hackmath.net/en/calculator/linear-regression"
                target="_blank"
                rel="noopener noreferrer"
            >
              this one
            </a>.
            <div className="spacer"/>
            <WordSpan word="Linear correlation coefficient" definition={wordList['linear correlation coefficient']}/>
            {} (r) and {}
            <WordSpan word="Coefficient of Determination" definition={wordList['coefficient of determination']}/>
            {} (r<sup>2</sup>):
            <div className="spacer"/>


            <div
                style={{
                  width: 'fit-content',
                  border: '1px solid black',
                  padding: 16
                }}
            >
            <span className="inline-math">
              <InlineMath math={String.raw`r = \frac{SS_{xy}}{\sqrt{SS_xSS_y}}`}/>
            </span>
              <p>Where</p>
              <span className="inline-math">
              <InlineMath math={String.raw`SS_x = \sum{(x-\bar x)^2}`}/>
            </span>
              <br/>
              <span className="inline-math">
              <InlineMath math={String.raw`SS_y = \sum{(y - \bar y)^2}`}/>
            </span>
              <br/>
              <span className="inline-math">
              <InlineMath math={String.raw`SS_{xy} = \sum{(x - \bar x)(y - \bar y)}`}/>
            </span>
              <br/>
              <span className="inline-math">
              <InlineMath math={String.raw`\bar x`}/> and <InlineMath math={String.raw`\bar y`}/> are the mean
            </span>
            </div>

            <div className="spacer"/>
            <ul>
              <li>
                Positive r represents a positive association (goes up), negative r represents a negative
                association (goes down)
              </li>
              <li>r is always between -1 and 1</li>
              <li>The closer to 1 or -1 the stronger it gets</li>
              <li>The closer to 0 the weaker it gets</li>
              <li>If r is 0, this means that there is no <strong>linear</strong> correlation</li>
            </ul>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={correlation} alt="" className="img-responsive" height="100%"/>
            </div>
          </div>
        </div>
        <hr className="hr-spacing"/>
        <Definitions json={jsonDefinitions}/>
      </div>
  );
}