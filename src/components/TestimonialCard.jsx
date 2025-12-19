import React from 'react';

const TestimonialCard = ({ username, handle, text, imgSrc }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-4">
                <img
                    src={imgSrc}
                    alt={`${username}'s profile picture`}
                    className="w-12 h-12 rounded-full object-cover shrink-0"
                    loading="lazy"
                />
                <div className="flex flex-col min-w-0">
                    <h2 className="text-lg font-semibold text-neutral-900 truncate" title={username}>
                        {username}
                    </h2>
                    <p className="text-sm text-neutral-600 truncate" title={handle}>
                        {handle}
                    </p>
                </div>
            </div>
            <p className="text-neutral-600 text-base leading-relaxed break-words">
                {text}
            </p>
        </div>
    );
};

export default TestimonialCard;
