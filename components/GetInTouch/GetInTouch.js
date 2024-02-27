import React from 'react'

function GetInTouch() {
    return (
        <section className='pt-32' id="contact_section">
            <div className="text-sm text-slate-400 py-3 text-center">Need a Web developer? </div>
            <div className="text-3xl text-highlight py-3 text-center">Get in touch </div>
            <div className='w-full h-32 flex justify-evenly p-8 text-slate-400'>
                <div className='w-4/12 text-center'>
                    <div className='text-2xl font-bold'>Location</div>
                    <div className='text-xl'>Toronto, ON. Canada.</div>
                </div>
                <div className='w-4/12 text-center'>
                    <div className='text-2xl font-bold'>Email</div>
                    <div className='text-xl'>alwinpaul47@gmail.com</div>
                </div>
            </div>
            <div className='border rounded-lg cursor-pointer w-32 p-3 text-center m-auto mb-8 hover:bg-highlight hover:border-0 text-slate-200'>
                <a href="mailto:alwinpaul47@gmail.com">Say Hello </a>
            </div>
        </section>
    )
}

export default GetInTouch