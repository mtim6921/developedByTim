import React, { useState, useEffect } from 'react';

interface InputProps{
    onChange: React.ChangeEventHandler<HTMLInputElement>
    value?: string
    className?:string
    placeholder?:string
}

function Input({ className , placeholder, value, onChange}:InputProps) {

    return (
 
            <input 
            className={`p-5  bg-neutral-100 ${className}`}
                type="text" 
                value={value} 
                onChange={onChange} 
                placeholder={placeholder ?? '...'}
            />
 
    );
}

export default Input;