import React from 'reactjs';
import ReactDOM from 'react-dom'

function App()
{


    const onSubmitHandler = () => {
        console.log('hello');
    }

    return (
        <div>
            <input type="text" name="name" placeholder="name" id="name" />
            <input type="text" name="email" placeholder="email" id="email" />
            <input type="text" name="password" placeholder="password" id="password" />
            <input type="button" name="submit" value="submit" id="submit" onClick={onSubmitHandler} />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('body'));