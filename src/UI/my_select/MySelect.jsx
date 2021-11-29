import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}
            >
            <option disabled >{defaultValue}</option>
            {
                options.map(o => <option 
                                    key={o.value} 
                                    value={o.value}
                                    >
                                    {o.title}</option>)
            }
        </select>
    );
};

export default MySelect;