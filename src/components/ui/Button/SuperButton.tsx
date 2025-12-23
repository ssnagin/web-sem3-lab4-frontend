import React from "react";
import {Button} from "primereact/button";

interface SuperButtonProps {
    label : string
    type: string
}

export const SuperButton: React.FC<SuperButtonProps> = ({label = "", type = "submit"}) => {

    return (
        <Button label={label} type={"submit"} severity={"info"} />
    )
}
