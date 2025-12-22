import './TheForm.css';

function TheForm({showPassword, update}) {
    function show() {
        update(!showPassword);
    }

    return (
        <>
            <h2>Hello, welcome to my website</h2>
            <input type="email" placeholder="Email" />
            <br/>
            <input type={showPassword ? "text" : "password"} placeholder="Password" />
            <button className="show-password" onClick={show}>Show</button>
            <br/><br/>
            <div className="button-container">
                <button>Login</button>
                <button>Sign up</button>
            </div>
        </>
    )
}

export default TheForm;