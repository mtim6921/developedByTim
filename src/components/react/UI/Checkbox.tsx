import React, { useState, useEffect } from 'react';

interface CheckboxProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value?: string;
    className?: string;
    placeholder?: string;
    checked?: boolean;
}

function Checkbox({
    className,
    placeholder,
    value,
    onChange,
    checked = false,
}: CheckboxProps) {
    const [isChecked, setIsChecked] = useState(checked);

    useEffect(() => {
        setIsChecked(checked);
    }, [checked]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
        onChange(e);
    };

    return (
        <div className={`flex items-center space-x-2 ${className}`}>
            <input
                type="checkbox"
                value={value}
                checked={isChecked}
                onChange={handleChange}
               className="h-6 w-6 text-blue-600 border-gray-300 rounded focus:ring-3 focus:ring-blue-500"
            />
            {placeholder && (
                <label className="uppercase opacity-50 font-semibold">{placeholder}</label>
            )}
        </div>
    );
}

export default Checkbox;