import React from "react";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa'

import * as C from './style'

import ResumeItem from '../ResumeItem/'

const Resume = ({ incomingValue, outgoingValue, totalValue }) => {

    return(
        <C.Container>
            <ResumeItem title="Incoming" Icon={FaRegArrowAltCircleUp} value={incomingValue} />
            <ResumeItem title="Outgoing" Icon={FaRegArrowAltCircleDown} value={outgoingValue} />
            <ResumeItem title="Total" Icon={FaDollarSign} value={totalValue} />
        </C.Container>
    )
}

export default Resume