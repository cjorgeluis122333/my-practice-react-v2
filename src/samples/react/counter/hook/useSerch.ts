import {useState} from "react";

export const useSerch = () => {
    const [value, setValue] = useState(1);

    const updateValue = (newValue:string) => {
        const mapToNumber:number = parseInt(newValue.trim() === '' ? "0":newValue);
        setValue( mapToNumber);
    }

    return { value ,updateValue};

}