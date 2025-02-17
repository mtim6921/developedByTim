import React, { useState, useEffect } from 'react';

interface SelectableFilterProps{
    filters: string[]
    selectedFilters: any[]
    onChange: (v:string)=>void
    canSelectMultiple: boolean
}

function SelectableFilter({filters, onChange, canSelectMultiple, selectedFilters}:SelectableFilterProps) {
    

    return (
        <div>
            {filters.map(f=><span onClick={()=>onChange(f)}>{f}</span>)}
        </div>
    );
}

export default SelectableFilter;