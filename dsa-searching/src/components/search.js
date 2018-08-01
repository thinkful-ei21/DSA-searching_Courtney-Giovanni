import React from 'react';

const testArr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
testArr.sort((a,b) => a-b );


export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: ''
    }
  }

  linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return `Algorithm took ${i + 1} of tries to find value`; //how many tries it takes to search for value
      }
    }
    return `Value was not in list. Algorithm took ${arr.length} tries`;
  }

  binarySearch(arr, value, start = 0, end = arr.length, cycles=1){

    let index = Math.floor((start+end)/2);
    console.log(cycles, index, arr[index])


    if(arr[index]===value){
      return `Algorithm took ${cycles} of tries to find value`;
    }
    else if( start === end){
      return `Value was not in list. Algorithm took ${cycles} tries`;
    }
    else if(arr[index] > value){
      return this.binarySearch(arr, value, start, index -1, cycles +1);
    }
    else if(arr[index] < value){
      return this.binarySearch(arr, value, index +1, end, cycles +1);
    }
  }

  onLinearSubmit(e) {
    e.preventDefault();
    const result = this.linearSearch(testArr, Number(this.state.input));
    this.setState({
      output: result
    })
  }

  onBinarySubmit(e) {
    e.preventDefault();
    const result = this.binarySearch(testArr, Number(this.state.input));
    this.setState({
      output: result
    })

  }

  onValueChange(value) {
    this.setState({
      input: value
    });
  }

  render() {
    console.log(this.state.output);

    return (
      <form>
        <p>Choose a number between 1 - 100</p>
        <input type="text"
          onChange={e => this.onValueChange(e.currentTarget.value)} />
        <button onClick={e => this.onLinearSubmit(e)}>Linear Search</button>
        <button onClick={e => this.onBinarySubmit(e)}>Binary Search</button>

        <div>
          {this.state.output}
        </div>
      </form>
    );
  }

}
