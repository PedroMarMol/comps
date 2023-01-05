import { useState } from "react";

function Dropdown({ options, selection, onSelect }){
    const [isOpen, setIsOpen] = useState(false);
    console.log(selection)

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    };

    const handleOptionClick = (option) => {
        // close the dropdown
        setIsOpen(false);
        // figure out which option was selected
        onSelect(option);
    };

    const renderedOptions = options.map((option) => {
        return <div onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
    });

    return (
        <div>
            <div onClick={handleClick}>{selection.label || "Select..."}</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    );
}

export default Dropdown;