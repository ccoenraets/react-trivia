var data = [
  {
    "category": "React 101",
    "questions": [
      {
        "points": 100,
        "question": "<p>What part of your application does React focus on?</p><ol><li>The Model</li><li>The View</li><li>The Controller</li><li>All of the above</li></ol>",
        "answer": "B. The View"
      },
      {
        "points": 200,
        "question": "_____ lets you create JavaScript objects using HTML syntax",
        "answer": "JSX"
      },
      {
        "points": 300,
        "question": "What tool can you use to transpile JSX?",
        "answer": "Babel"
      },
      {
        "points": 400,
        "question": "React uses a _____________ to limit direct manipulation of the DOM and improve performance",
        "answer": "Virtual DOM"
      }
    ]
  },
  {
    "category": "React 201",
    "questions": [
      {
        "points": 100,
        "question": "<p>Where can you define a component's initial state when you use the ES6 Class syntax?</p><ol><li>getInitialState()</li><li>getInitialProps()</li><li>The component's constructor</li></ol>",
        "answer": "C. The component's constructor"
      },
      {
        "points": 200,
        "question": "Using npm, which package should you require/import in addition to 'react' to render a React component in an existing DOM element of your HTML file?",
        "answer": "react-dom"
      },
      {
        "points": 300,
        "question": "<p>Which lifecycle function should you use to set default property values?</p><ol><li>getInitialState</li><li>getInitialProps</li><li>getDefaultProps</li></ol>",
        "answer": "C. getDefaultProps"
      },
      {
        "points": 400,
        "question": "Which lifecycle method is invoked once, immediately after the initial rendering occurs?",
        "answer": "componentDidMount"
      }
    ]
  },
  {
    "category": "ES 2015",
    "questions": [
      {
        "points": 100,
        "question": "<p>Constants (const) are:</p><ol><li>Block scoped</li><li>Function scoped</li><li>Global</li></ol>",
        "answer": "A. Block scoped"
      },
      {
        "points": 200,
        "question": "Name 3 new collection classes in ES2015",
        "answer": "<ul><li>Map</li><li>WeakMap</li><li>Set</li><li>WeakSet</li></ul>"
      },
      {
        "points": 300,
        "question": "<p>What's being logged and how is this new ES6 feature called?</p><code>var colors = ['red', 'blue', 'green'];<br/>var [primary, secondary, tertiary] = colors;<br/>console.log(secondary);</code>",
        "answer": "<ul><li>blue</li><li>Array destructuring</li></ul>"
      },
      {
        "points": 400,
        "question": "<p>What's being logged and name 4 new features of ES6 used in this code snippet?</p><code>let greeting = (name, msg='Hello') => `${msg}, ${name}`;<br/>console.log(greeting('Christophe');</code>",
        "answer": "<p>Hello, Christophe</p><ul><li>let variables</li><li>Arrow functions</li><li>Default parameters</li><li>Template strings</li></ul>"
      }
    ]
  },
  {
    "category": "Feeling Lucky",
    "questions": [
      {
        "points": 100,
        "question": "Using the proposed ECMAScript module syntax, how do you load the Mortgage.js module from the current directory and make all its members available in an object named mortgage?",
        "answer": "<code>import * as mortgage from './Mortgage';</code>"
      },
      {
        "points": 200,
        "question": "What are the colors of the olympic rings?",
        "answer": "<img src='assets/img/olympic_rings.png'/>"
      },
      {
        "points": 300,
        "question": "What's the date of the first React commit on GitHub?",
        "answer": "May 26th, 2013"
      },
      {
        "points": 400,
        "question": "What's the hex color of the React logo?",
        "answer": "#61DAFB"
      }
    ]
  }
];