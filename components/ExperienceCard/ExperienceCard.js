import React from 'react'

function ExperienceCard({ experience }) {
    return (
        <div className='text-slate-200'>
            <div className='my-1'>
                <div className='inline-block w-28'>Role:</div>
                {experience.role}
            </div>
            <div className='my-1'>
                <div className='inline-block w-28'>Company:</div>
                {experience.company}
            </div>
            <div className='my-2 text-sm font-light'>{experience.duration}</div>
            <ul className='my-3'>
                {experience.description.map((desc, index) => (
                    <li key={index} className='list-disc p-1'>
                        {desc}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ExperienceCard