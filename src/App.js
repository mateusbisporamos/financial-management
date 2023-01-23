import React, { useState, useEffect } from 'react'
import GlobalStyle from './styles/global'

import Header from './components/Header'
import Resume from './components/Resume/'
import Form from './components/Form'
import Grid from './components/Grid'

const App = () => {

    const data = localStorage.getItem("transactions");
    const [transactionsList, setTransactionsList] = useState(data ? JSON.parse(data) : []);

    const [incomingValue, setIncomingValue] = useState(0)
    const [outgoingValue, setOutgoingValue] = useState(0)
    const [totalValue, setTotalValue] = useState(0)

    useEffect(() => {
        
        const incomingJSON = transactionsList.filter((item) => item.isIncoming === true )
        const incomingAmount = incomingJSON.reduce((prevoiusValue, element) => prevoiusValue + Number(element.amount), 0).toFixed(2)
        setIncomingValue(`R$ ${incomingAmount}`)

        const outgoingJSON = transactionsList.filter((item) => item.isIncoming === false )
        const outgoingAmount = outgoingJSON.reduce((prevoiusValue, element) => prevoiusValue + Number(element.amount), 0).toFixed(2)
        setOutgoingValue(`R$ ${outgoingAmount}`)

        const totalValue = Math.abs(incomingAmount - outgoingAmount).toFixed(2);
        setTotalValue(`${Number(incomingAmount) < Number(outgoingAmount) ? `R$ - ${totalValue}` : `R$ ${totalValue}`}`)

    })
    
    const handleAdd = (transaction) => {
        const newArrayTransactions = [...transactionsList, transaction];
        setTransactionsList(newArrayTransactions);
        localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
    };
    
    
    return(
        <>
            <Header />
            <Resume incomingValue={incomingValue} outgoingValue={outgoingValue} totalValue={totalValue} />

            <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList}/>

            <GlobalStyle />
        </>
    )
}

export default App