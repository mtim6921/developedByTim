import React, { useState, useEffect, type ReactNode, type MouseEventHandler } from 'react';

interface ButtonProps{
 
    className?:string
    placeholder?:string
    children: ReactNode
    onClick: MouseEventHandler<HTMLButtonElement>
}

function SubmitButton({ className , placeholder, children, onClick}:ButtonProps) {
 


    return (
 
            <button
            className={`p-5  bg-neutral-100 ${className} uppercase opacity-50 font-semibold`} onClick={onClick} >{children}</button>
 
    );
}

export default SubmitButton;