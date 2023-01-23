import React, { useState } from "react"
import * as C from './style'

import Grid from "../Grid"

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {

    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    let [isIncoming, setIsIncoming] = useState(true)

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {

        if (!description || !amount) {
            alert("Provide Description and Value!");
            return;
        } else if (amount < 1) {
            alert("The value cannot be negative!");
            return;
        }

        const transaction = {
            id: generateID(),
            description,
            amount,
            isIncoming
        }

        handleAdd(transaction)

        setDescription('')
        setAmount('')
    }
    
    return(

        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>Description</C.Label>
                    <C.Input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
                </C.InputContent>

                <C.InputContent>
                    <C.Label>Value</C.Label>
                    <C.Input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} />
                </C.InputContent>

                <C.RadioGroup>
                    <C.Input type='radio' id='rIncoming' name='radioGroup' defaultChecked onChange={(e) => setIsIncoming(isIncoming = true)}/>
                    <C.Label htmlFor='rIncoming'>Incoming</C.Label>
                    
                    <C.Input type='radio' id='rOutgoing' name='radioGroup' onChange={(e) => setIsIncoming(isIncoming = false)} />
                    <C.Label htmlFor='rOutgoing'>Outgoing</C.Label>
                </C.RadioGroup>

                <C.Button onClick={handleSave}>SAVE</C.Button>
            </C.Container>

            <Grid itens={transactionsList} setItens={setTransactionsList}/>
        </>
    )
}

export default Form