    script src="https://unpkg.com/react@15/dist/react.min.js"
    script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"
    script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"
    <div id="root"></div>
    script(src="../components/reactTest.js", type="text/babel")
const element = (<h1>Hello, World!</h1>);
const domContainer = document.getElementById('root');
ReactDOM.render(element, domContainer);

