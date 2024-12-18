import React from 'react';

const LocationSearchPanel = ({ 
    suggestions = [], // Default to empty array
    setVehiclePanel, 
    setPanelOpen, 
    setPickup, 
    setDestination, 
    activeField 
}) => {

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion);
        } else if (activeField === 'destination') {
            setDestination(suggestion);
        }
    };

    return (
        <div className='mt-[5vw]'>
            {Array.isArray(suggestions) && suggestions.length > 0 ? (
                suggestions.map((elem, idx) => (
                    <div 
                        key={idx} 
                        onClick={() => handleSuggestionClick(elem)} 
                        className='flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl items-center w-full my-2 justify-start'
                    >
                        <h2 className='bg-[#eee] flex items-center justify-center rounded-full w-[14%] p-[2vw]'>
                            <i className="ri-map-pin-fill"></i>
                        </h2>
                        <h4 className='font-medium w-[90%]'>{elem}</h4>
                    </div>
                ))
            ) : (
                <div className='text-gray-500 text-center'>No suggestions available</div>
            )}
        </div>
    );
};

export default LocationSearchPanel;
