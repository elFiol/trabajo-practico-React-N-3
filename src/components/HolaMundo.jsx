import { useState } from "react";

const HolaMundo = ({ texto }) => {
    const [cambio, setCambio] = useState("")
    return <><h1>{texto} {cambio}</h1><button type="button" onClick={() => {
        setCambio("(from changed state)");
    }}>click aqui</button></>;
};

export default HolaMundo;