import React, { useState, useEffect } from 'react'; 
import CardList from '../components/CardList.js'
import SearchBox from '../components/SearchBox.js'
import Scroll from '../components/Scroll.js'
import ErrorBoundry from '../components/ErrorBoundry.js';
import './App.css'


function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            setRobots(users);
        })
        console.log(count)
    }, [count]) // []:componentDidMount() only run if count changed.


    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    const fiiteredrobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
 
    if (robots.length === 0) {
        return <h1>LOADING...</h1>
    } else {
        return (
            <div className='tc'>
                <h1 className='f1'>RobotFriends!</h1>
                <button onClick={()=>(setCount(count + 1))}>TEST BUTTON</button>
                <SearchBox searchchange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={ fiiteredrobots }/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );           
    }
}
export default App;
