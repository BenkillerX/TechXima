import React from 'react'

const Devprocess = () => {
  return (
    <div className='mt-4'>
        <h1 className='text-2xl md:text-3xl text-center'>Our Web Development Process</h1>
        {/* phases of webdevelopment */}
        <section className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-16 lg:px-32 py-8">
            {/* phace 1 */}
            <div className='justify-center items-center flex flex-col bg-stone-200 p-4 rounded'>
                <h1 className='text-2xl md:text-3xl text-center mb-3'>Phase 1: Discovery and Planning</h1>
                <p className='text-lg md:text-3xl text-center mb-3 text-gray-500 opacity-60'>
                    Once we shake hands and you decide to partner with us on your web design project, our team would immediately start the research process.
                </p>
                <p className='text-lg text-center'>
                    We carry out research on your industry, your competitors and also get to know your company a little deeper. What are your goals? What has bachelorarbeit schreiben lassen your traction been to date? What challenges do have? What ideas do you have?
                </p>
            </div>
            {/* phace 2 */}
            <div className='justify-center items-center flex flex-col bg-stone-200 p-4 rounded'>
                <h1 className='text-2xl md:text-3xl text-center mb-3'>Phase 2: Wireframing</h1>
                <p className='text-lg md:text-3xl text-center mb-3 text-gray-500 opacity-60'>
                   At this stage, we will begin exploring design and layout ideas using mapping, prototyping and wireframe techniques.
                </p>
                <p className='text-lg text-center'>
                   We will create the content architecture for your website and map out a user experience (UX) journey with tools like balsamiq and mockflow. Essentially, we port ourselves vicariously into the ghostwriting diplomarbeit mind of the customer, using Human Centered Design strategies.
                </p>
            </div>
            {/* phace 3 */}
            <div className='justify-center items-center flex flex-col bg-stone-200 p-4 rounded'>
                <h1 className='text-2xl md:text-3xl text-center mb-3'>Phase 3: Design</h1>
                <p className='text-lg md:text-3xl text-center mb-3 text-gray-500 opacity-60'>
                  The results of our prototyping and wireframing will then be fleshed out into a full blown website design that will prioritize content and employ calls to action.
                </p>
                <p className='text-lg text-center'>
                Theories of colour, typography, shapes, icons and photography will be employed to tell the full story of your company on the website. WordPress Content Management System is doktorarbeit schreiben lassen integrated to populate the website.
                </p>
            </div>
            {/* phace 4 */}
            <div className='justify-center items-center flex flex-col bg-stone-200 p-4 rounded'>
                <h1 className='text-2xl md:text-3xl text-center mb-3'>Phase 4:  Testing and Launch</h1>
                <p className='text-lg md:text-3xl text-center mb-3 text-gray-500 opacity-60'>
                   The final phase is to test the website rigorously for both technical performance and qualitative usability. We ensure that nothing breaks on the website.
                </p>
                <p className='text-lg text-center'>
                   We test the user journey and website flow to ensure that the site is simple to browse through, navigate and the content reads very easy. We also ensure compliance of the site to W3C web standards of accessibility and browser compatibility.
                </p>
            </div>
        </section>
    </div>
  )
}

export default Devprocess