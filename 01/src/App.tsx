import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./components/Button";
import {NewComponent} from "./NewComponent";
import {NewComponent2} from "./NewComponent2";

type FilterType = string

function App() {
    // const Button1Foo=(subscriber:string, age:number)=> {
    //     console.log(subscriber,age)
    // }
    //
    // const Button2Foo=(subscriber:string, age:number)=> {
    //     console.log(subscriber,age)
    // }
    //
    // const Button3Foo=()=> {
    //     console.log("I'm stupid button")
    // }

    // let [a, setA] = useState(1)
    //
    // const onClickHandler = () => {
    //   setA(++a)
    //   console.log(a)
    // }
    //
    // const onClickHand = () => {
    //   setA(a=0)
    // }

    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
        {banknote: 'rouble', nominal: 100, number: ' w1234567890'},
        {banknote: 'dollar', nominal: 100, number: ' e1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
        {banknote: 'rouble', nominal: 100, number: ' r1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' x1234567890'},
        {banknote: 'rouble', nominal: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money
    if (filter === 'dollar') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'dollar')
    }
    if (filter === 'rouble') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'rouble')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <div className="App">
            <NewComponent2 moneyName={currentMoney} callBack={onClickFilterHandler}/>

            {/*<NewComponent moneyName={currentMoney} callBack={onClickFilterHandler} />

            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('all')}>all</button>
                <button onClick={() => onClickFilterHandler('rouble')}>rubles</button>
                <button onClick={() => onClickFilterHandler('dollar')}>dollars</button>
            </div>

            <button>MyYouTubeChanel-1</button>
            <button>MyYouTubeChanel-2</button>

            <Button name={'MyYouTubeChanel-1'} callBack={()=>Button1Foo("I'm Vasya",21)}/>
            <Button name={'MyYouTubeChanel-2'} callBack={()=>Button2Foo("I'm Ivan", 31)}/>
            <Button name={'MyYouTubeChanel-3'} callBack={Button3Foo}/>

            <h1>{a}</h1>
              <button onClick={onClickHandler}>Number</button>
              <button onClick={onClickHand}>0</button>*/}
        </div>
    );
}

export default App;
