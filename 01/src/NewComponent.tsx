import React from "react";

type moneyType = {
    banknote: string
    nominal: number
    number: string
}

type moneyTypeProps = {
    moneyName: Array<moneyType>
    callBack:(onClickFilterHandler:string)=>void
}

export const NewComponent = (props:moneyTypeProps) => {
    return (
        <div>
            <ul>
                {props.moneyName.map((objFromMoneyArr, index) => {
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
                <button onClick={() => props.callBack('all')}>all</button>
                <button onClick={() => props.callBack('ruble')}>rubles</button>
                <button onClick={() => props.callBack('dollar')}>dollars</button>
            </div>
        </div>
    )
}