import React from 'react';
import './Card2.css';

export default function Card2({ skill }) {
    return (
        <>
            <div className="card2">
                <div className="card2-l1">
                    <div>{skill.skill}</div>
                    <div>{skill.percentage}</div> {/* Display percentage */}
                </div>
                <div className="card2-bar">
                    {/* Set the width dynamically with the percentage */}
                    <div className="card2-fill" style={{ width: `${skill.percentage}` }}>
                    </div>
                </div>
            </div>
        </>
    );
}
