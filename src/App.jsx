// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  function intersectPoint(head1, head2) {
    // Find the length of both linked lists
    let len1 = 0;
    let len2 = 0;
    let curr1 = head1;
    let curr2 = head2;
    while (curr1) {
      len1++;
      curr1 = curr1.next;
    }
    while (curr2) {
      len2++;
      curr2 = curr2.next;
    }
  
    // Move the pointer of the longer linked list to match the length of the shorter linked list
    curr1 = head1;
    curr2 = head2;
    if (len1 > len2) {
      for (let i = 0; i < len1 - len2; i++) {
        curr1 = curr1.next;
      }
    } else {
      for (let i = 0; i < len2 - len1; i++) {
        curr2 = curr2.next;
      }
    }
  
    // Traverse both linked lists until they intersect
    while (curr1 && curr2) {
      if (curr1 === curr2) {
        return curr1.data;
      }
      curr1 = curr1.next;
      curr2 = curr2.next;
    }
  
    // If the linked lists do not intersect, return -1
    return -1;
  }
  let head1 = new Node(3);
head1.next = new Node(6);
head1.next.next = new Node(9);
let common = new Node(15);
common.next = new Node(30);
head1.next.next.next = common;

let head2 = new Node(10);
head2.next = common;

console.log(intersectPoint(head1, head2)); // Output: 15
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank" rel="noreferrer">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App


