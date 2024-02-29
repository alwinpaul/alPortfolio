import { useState } from 'react'
import { expereinceData } from '../../data/ExperienceData'
import ExperienceCard from '../ExperienceCard/ExperienceCard';
function Experience() {

    const [activeElem, setActiveElem] = useState(expereinceData[0]);

    return (
        <section className='pt-32' id="experience_section">
            <div className="text-3xl text-highlight py-3 text-center">My Experience </div>
            <div className='w-full h-96 justify-between p-8 hidden md:flex'>
                <div className='w-4/12'>
                    {expereinceData.map(exp => (
                        <div key={exp.id} className='text-md py-2 flex items-center cursor-pointer' onClick={() => { setActiveElem(exp) }}>
                            {exp.id === activeElem.id && (
                                <div className={`h-[1px] w-12 bg-highlight mr-2`}></div>
                            )}
                            <div className={exp.id === activeElem.id ? 'text-highlight font-bold text-lg' : 'text-slate-200'}>{exp.company}</div>
                        </div>
                    )
                    )}
                </div>
                <div className='w-7/12'>
                    {activeElem.id && <ExperienceCard experience={activeElem} />}
                </div>
            </div>
            <div className='w-full p-2 md:hidden'>
                {expereinceData.map(exp => (
                    <div key={exp.id} className='my-16 border-b'>
                        <ExperienceCard experience={exp} />
                    </div>

                ))}
            </div>
        </section>
    )
}

export default Experience