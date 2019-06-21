import React from 'react';
import jsonDefinitions from '../static/definitions-ch1';
import WordSpan from './WordSpan';
import Definitions from './Definitions';
import '../style/Chapter.scss';

const wordList = {};
jsonDefinitions.forEach(item => {
  wordList[item.word.toLowerCase()] = item.definition;
});

export default function ChapterOne() {
  return (
      <div className="container">
        <h1>Chapter One</h1>
        <hr/>
        <h5>&bull; Nominal vs Ordinal vs Interval vs Ratio</h5>
        <p className="indent">
          First, if the variable is <WordSpan word="qualitative" definition={wordList['qualitative']}/> (words
          instead of numbers) then it is either nominal or ordinal. Now ask yourself if you can put the data
          in a particular order. If you can it is <WordSpan word="ordinal" definition={wordList['ordinal']}/>.
          Otherwise, it is <WordSpan word="nominal" definition={wordList['nominal']}/>. If the variable
          is <WordSpan word="quantitative" definition={wordList['quantitative']}/> (numbers),
          then it is either interval or ratio. For ratio data, a value of 0 means there is no measurement. This
          is known as the absolute zero. If there is an absolute zero in the data, then it means it is
          ratio. If there is no absolute zero, then the data are interval.
        </p>
        <h5 className="header">&bull; Example 1.1.1 - Stating Definitions for Qualitative Variable</h5>
        <p className="indent">
          In 2010, the Pew Research Center questioned 1500 adults in the U.S. to estimate
          the proportion of the population favoring marijuana use for medical purposes. It
          was found that 73% are in favor of using marijuana for medical purposes. State
          the individual, variable, population, and sample.
        </p>
        <ul className="ul-indent-level-1">
          <li>Individual – a U.S. adult</li>
          <li>
            Variable – the response to the question "should marijuana be used for medical purposes?"
            This is qualitative data since you are recording a person’s response – yes or no.
          </li>
          <li>Population – set of all responses of adults in the U.S.</li>
          <li>Sample – set of 1500 responses of U.S. adults who are questioned.</li>
          <li>Parameter – proportion of those who favor marijuana for medical purposes calculated from population</li>
          <li>Statistic – proportion of those who favor marijuana for medical purposes calculated from sample</li>
        </ul>
        <h5 className="header">&bull; Example 1.1.3 - Stating Definitions for Quantitative Variable</h5>
        <p className="indent">
          A biologist wants to estimate the average height of a plant that is given a new
          plant food. She gives 10 plants the new plant food. State the individual, variable,
          population, and sample.
        </p>
        <ul className="ul-indent-level-1">
          <li>Individual - a plant given the new plant food</li>
          <li>
            Variable - the height of the plant (Note: it is not the average height since you
            cannot measure an average - it is calculated from data.) This is quantitative data
            since you will have a number.
          </li>
          <li>Population - set of all the heights of plants when the new plant food is used</li>
          <li>Sample - set of 10 heights of plants when the new plant food is used</li>
          <li>Parameter - average height of all plants</li>
          <li>Statistic - average height of 10 plants</li>
        </ul>
        <hr className="hr-spacing"/>
        <h5>&bull; Sampling</h5>
        <p className="indent">Simple random sample</p>
        <ul className="ul-indent-level-2">
          <li>Put all names in a hat and draw a certain number of names out.</li>
          <li>
            Assign each individual a number and use a random number table or a calculator or
            computer to randomly select the individuals that will be measured.
          </li>
        </ul>
        <p className="indent">Stratified sampling</p>
        <ul className="ul-indent-level-2">
          <li>
            If you want to look at musical preference, you could divide the individuals into
            age groups and then conduct simple random samples inside each group.
          </li>
          <li>
            If you want to calculate the average price of textbooks, you could divide the
            individuals into groups by major and then conduct simple random samples inside
            each group.
          </li>
        </ul>
        <p className="indent">Systematic sampling</p>
        <ul className="ul-indent-level-2">
          <li>You select every 5th item on an assembly line.</li>
          <li>You select every 10th name on the list.</li>
          <li>You select every 3rd customer that comes into the store.</li>
        </ul>
        <p className="indent">Cluster sampling</p>
        <ul className="ul-indent-level-2">
          <li>
            A large city wants to poll all businesses in the city. They divide the city into
            sections (clusters), maybe a square block for each section, and use a random
            number generator to pick some of the clusters. Then they poll all businesses in
            each chosen cluster.
          </li>
          <li>
            You want to measure whether a tree in the forest is infected with bark beetles.
            Instead of having to walk all over the forest, you divide the forest up into sectors,
            and then randomly pick the sectors that you will travel to. Then record whether a
            tree is infected or not for every tree in that sector.
          </li>
        </ul>
        <p className="indent">Convenience sample (should be avoided)</p>
        <ul className="ul-indent-level-2">
          <li>
            An example of a convenience sample is if you want to know the opinion of people about
            the criminal justice system, and you stand on a street corner near the county court house,
            and questioning the first 10 people who walk by. The people who walk by the county
            court house are most likely involved in some fashion with the criminal justice system,
            and their opinion would not represent the opinions of all individuals.
          </li>
        </ul>
        <hr className="hr-spacing"/>
        <Definitions json={jsonDefinitions}/>
      </div>
  );
}