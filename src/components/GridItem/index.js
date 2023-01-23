import React from 'react'
import * as C from './style'
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash } from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
    
    return(
        <C.Tr>
            <C.Td>{item.description}</C.Td>
            <C.Td>{item.amount}</C.Td>

            <C.Td alignCenter>
                {item.isIncoming ? (<FaRegArrowAltCircleUp color="green" />) : (<FaRegArrowAltCircleDown color="red" />)}
            </C.Td>

            <C.Td alignCenter>
                <FaTrash onClick={() => onDelete(item.id)} />
            </C.Td>
        </C.Tr>
    )
}

export default GridItem