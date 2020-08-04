import React from "react";
import "./Sortingvisualizer.css";
import {
  getMergeSortAnimations,
  getHeapSortAnimations,
} from "../SortingAlgorithms/SortingAlgorithms.js";
import { getInsertionSortAnimations } from "../SortingAlgorithms/SortingAlgorithms.js";
import { getBubbleSortAnimations } from "../SortingAlgorithms/SortingAlgorithms.js";
import { getQuickSortAnimations } from "../SortingAlgorithms/SortingAlgorithms.js";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 15;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 50;
var mx = 0;
export default class sortingvisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      let a = randomIntFromInterval(10, 500);
      array.push(a);
    }
    this.setState({ array });
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const colourChange = i % 4;
      if (colourChange == 0 || colourChange == 1) {
        const [bar1Idx, bar2Idx] = animations[i];
        const bar1Style = arrayBars[bar1Idx].style;
        const bar2Style = arrayBars[bar2Idx].style;
        const colour = i % 4 === 0 ? " red" : "lightskyblue";
        setTimeout(() => {
          bar1Style.backgroundColor = colour;
          bar2Style.backgroundColor = colour;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const colour = i % 4 == 2 ? "blue" : "lightskyblue";
        setTimeout(() => {
          const [barId, barHeight] = animations[i];
          const barStyle = arrayBars[barId].style;
          barStyle.backgroundColor = colour;
          barStyle.height = `${barHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  quickSort() {
    const animations = getQuickSortAnimations(this.state.array);
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < animations.length; i++) {
      const [bar1, bar2] = animations[i];
      if (bar2 == 1) {
        setTimeout(() => {
          arrayBars[bar1].style.backgroundColor = "red";
        }, i * ANIMATION_SPEED_MS);
      } else if (bar2 == 3) {
        setTimeout(() => {
          arrayBars[bar1].style.backgroundColor = "green";
        }, i * ANIMATION_SPEED_MS);
      } else if (bar2 == 2) {
        setTimeout(() => {
          arrayBars[bar1].style.backgroundColor = "lightskyblue";
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [bar11, bar22] = animations[i + 1];
        setTimeout(() => {
          arrayBars[bar1].style.backgroundColor = "red";
          arrayBars[bar11].style.backgroundColor = "red";
          arrayBars[bar1].style.height = `${bar2}px`;
          arrayBars[bar11].style.height = `${bar22}px`;
        }, i * ANIMATION_SPEED_MS);
        setTimeout(() => {
          arrayBars[bar1].style.backgroundColor = "lightskyblue";
          arrayBars[bar11].style.backgroundColor = "lightskyblue";
        }, i * ANIMATION_SPEED_MS);
        i++;
      }
    }
  }
  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < animations.length; i++) {
      const [bar1, bar2] = animations[i];

      if (bar2 <= 3) {
        setTimeout(() => {
          if (bar2 == 1) arrayBars[bar1].style.backgroundColor = "red";
          if (bar2 == 2) arrayBars[bar1].style.backgroundColor = "lightskyblue";
          if (bar2 == 3) arrayBars[bar1].style.backgroundColor = "green";
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          arrayBars[bar1].style.height = `${bar2}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  insertionSort() {
    const animations = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const [idx, cmd] = animations[i];
      const arrayBars = document.getElementsByClassName("array-bar");
      if (cmd == 1) {
        setTimeout(() => {
          const barStyle = arrayBars[idx].style;
          barStyle.backgroundColor = "red";
        }, i * ANIMATION_SPEED_MS);
      } else if (cmd == 2) {
        setTimeout(() => {
          const barStyle = arrayBars[idx].style;
          barStyle.backgroundColor = "blue";
        }, i * ANIMATION_SPEED_MS);
      } else if (cmd == 3) {
        setTimeout(() => {
          const barStyle = arrayBars[idx].style;
          barStyle.backgroundColor = "green";
        }, i * ANIMATION_SPEED_MS);
      } else if (cmd == 4) {
        setTimeout(() => {
          const barStyle = arrayBars[idx].style;
          barStyle.backgroundColor = "lightskyblue";
        }, i * ANIMATION_SPEED_MS);
      } else if (cmd >= 5) {
        setTimeout(() => {
          const [barId, barHeight] = animations[i];
          const barStyle = arrayBars[barId].style;
          barStyle.height = `${barHeight}px`;
          barStyle.backgroundColor = "green";
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  heapSort() {
    const animations = getHeapSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const [idx, cmd] = animations[i];
      const arrayBars = document.getElementsByClassName("array-bar");
      if (cmd == 1) {
        setTimeout(() => {
          const barStyle = arrayBars[idx].style;
          barStyle.backgroundColor = "red";
        }, i * ANIMATION_SPEED_MS);
      } else if (cmd == 2) {
        setTimeout(() => {
          const barStyle = arrayBars[idx].style;
          barStyle.backgroundColor = "darkmagenta";
        }, i * ANIMATION_SPEED_MS);
      } else if (cmd == 3) {
        setTimeout(() => {
          const barStyle = arrayBars[idx].style;
          barStyle.backgroundColor = "blue";
        }, i * ANIMATION_SPEED_MS);
      } else if (cmd == 4) {
        setTimeout(() => {
          const barStyle = arrayBars[idx].style;
          barStyle.backgroundColor = "green";
        }, i * ANIMATION_SPEED_MS);
      } else if (cmd == 5) {
        setTimeout(() => {
          const barStyle = arrayBars[idx].style;
          barStyle.backgroundColor = "lightskyblue";
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barId, barHeight] = animations[i];
          const barStyle = arrayBars[barId].style;
          barStyle.height = `${barHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  render() {
    const { array } = this.state;

    return (
      <>
        <div className="navbar">
          <button className="generate" onClick={() => this.resetArray()}>
            Generate new array
          </button>
          <button className="srt" onClick={() => this.mergeSort()}>
            Merge Sort
          </button>
          <button className="srt" onClick={() => this.quickSort()}>
            Quick Sort
          </button>
          <button className="srt" onClick={() => this.bubbleSort()}>
            Bubble Sort
          </button>
          <button className="srt" onClick={() => this.insertionSort()}>
            Insertion Sort
          </button>
          <button className="srt" onClick={() => this.heapSort()}>
            Heap Sort
          </button>
        </div>
        <div className="array-container">
          <div className="array-bar1" style={{ height: 500 }}></div>
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{ height: value }}
            ></div>
          ))}
        </div>
      </>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
