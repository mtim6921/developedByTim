import React, { useState, useEffect } from 'react';

interface DropdownProps {
    onChange: (v: string) => void;
    label: string;
    onRenderIcon?: () => JSX.Element; // Changed to JSX.Element for React compatibility
    options: DropdownOptions[];
}
export interface DropdownOptions{
    key: string
    text: string
}
function Dropdown({ onChange, label, onRenderIcon, options }: DropdownProps) {
    const [selectedOption, setSelectedOption] = useState(options[0].key);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        onChange(value);
    };

    return (
        <div className='flex items-center gap-4 p-1 border border-solid border-neutral-200'>
            <label className='flex items-center gap-4 font-["Open-sans", sans-serif]'>
                {onRenderIcon && <span className="w-4 h-4">{onRenderIcon()}</span>}
                <span className="uppercase opacity-50 font-semibold">{label} </span>
            </label>
            <select className=" " value={selectedOption} onChange={handleSelectChange}>
                {options.map((option, index) => (
                    <option key={index} value={option.key}>
                        {option.text}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;
