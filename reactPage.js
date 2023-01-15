const head = (
    <div>
        <h1>Fun facts about React</h1>
    </div>
)

const list = (
    <nav>
        <ul>
            <li>Was first released in 2013</li>
            <li>was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by facebook</li>
            <li>Powers thousands of enterprise apps</li>
        </ul>
    </nav>
)

ReactDOM.createRoot(document.getElementById("root")).render(head);
ReactDOM.createRoot(document.getElementById("hood")).render(list)