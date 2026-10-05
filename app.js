function App() {

    const studentName = "Keerthana";
    const course = "B.Tech Biotechnology";
    const college = "KL University";

    const [message, setMessage] = React.useState(
        "Welcome to my React Demo!"
    );

    function handleClick() {
        setMessage("You clicked the button successfully!");
    }

    return (
        <div style={{
            fontFamily: "Arial",
            textAlign: "center",
            backgroundColor: "#f4f4f4",
            minHeight: "100vh",
            padding: "40px"
        }}>

            <h1 style={{color: "#4b0082"}}>
                React Demo Project
            </h1>

            <h2>Get Started with JSX</h2>

            <div style={{
                backgroundColor: "white",
                width: "350px",
                margin: "30px auto",
                padding: "25px",
                borderRadius: "10px",
                boxShadow: "0 0 10px #ccc"
            }}>

                <h2>Student Details</h2>

                <p><b>Name:</b> {studentName}</p>
                <p><b>Course:</b> {course}</p>
                <p><b>College:</b> {college}</p>

                <button
                    onClick={handleClick}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#4b0082",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                >
                    Click Me
                </button>

                <p style={{marginTop: "20px"}}>
                    {message}
                </p>

            </div>

            <h3>React JSX Features</h3>

            <p>✓ JSX Syntax</p>
            <p>✓ Variables</p>
            <p>✓ Components</p>
            <p>✓ Button Events</p>
            <p>✓ Dynamic Content</p>

        </div>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<App />);