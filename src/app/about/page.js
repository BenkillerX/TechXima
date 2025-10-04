import React from 'react'

const page = () => {
  return (
    <div className='pt-20 min-h-screen bg-gray-50'>
      <h1 className='text-center text-3xl font-bold md:text-6xl mb-10'>
        The TechXima Team
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
        {/* card 1 */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
          <img 
            src='/Manager.jpg' 
            alt='Manager' 
            className='w-40 h-40 object-cover rounded-full mb-6 border-4 border-gray-200 shadow'
          />
          <h2 className="text-xl font-semibold mb-2 text-gray-800 text-center">
            Device Tracker & Digital Safety Consultant, Also the founder
          </h2>
          <div className="text-gray-600 text-base mb-4 text-center">
            <strong>Services:</strong>
            <ul className="list-disc list-inside text-left mt-1 mb-2">
              <li>Device tracking and recovery</li>
              <li>Digital safety consultations for individuals and businesses</li>
              <li>Mobile security expertise</li>
              <li>Online protection and safety planning</li>
            </ul>
            <strong>Benefits:</strong>
            <ul className="list-disc list-inside text-left mt-1 mb-2">
              <li>Locate lost or stolen devices</li>
              <li>Protect personal and sensitive data</li>
              <li>Enhance digital safety and security</li>
              <li>Expert guidance for a secure online experience</li>
            </ul>
            <strong>How It Works:</strong>
            <ul className="list-disc list-inside text-left mt-1 mb-2">
              <li>Schedule a consultation to discuss your device tracking and digital safety needs</li>
              <li>Receive personalized guidance and support</li>
              <li>Implement device tracking and security solutions</li>
            </ul>
            <strong>Get Started:</strong>
            <p className="mt-1">
              Contact us to schedule a consultation and secure your digital world!
            </p>
          </div>
        </div>
        {/* Repeat the card for each team member */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
          <img 
            src='/last.jpg' 
            alt='Manager' 
            className='w-40 h-40 object-cover rounded-full mb-6 border-4 border-gray-200 shadow'
          />
          <h2 className="text-xl font-semibold mb-2 text-gray-800 text-center">
            Graphic Designer
          </h2>
          <div className="text-gray-600 text-base mb-4 text-center">
            <strong>About:</strong>
            <p className=" text-center mt-1 mb-2">
              I am a creative Graphics Designer and Video Editor with a passion for transforming ideas into visually compelling content. My work focuses on blending creativity with functionality to deliver designs and videos that not only capture attention but also communicate messages effectively.


            </p>
            <strong>Graphic Design Skills:</strong>
            <ul className="list-disc list-inside text-left mt-1 mb-2">
              <li>Logo Design & Brand Identity</li>
              <li>Flyers, Posters & Banners</li>
              <li>Social Media Designs & Ad Creatives</li>
              <li>Business Cards & Corporate Designs</li>
              <li>Photo Manipulation & Retouching</li>
            </ul>
            <strong>Video Editing Skills:</strong>
            <ul className="list-disc list-inside text-left mt-1 mb-2">
              <li>Professional Cuts & Transitions</li>
              <li>Motion Graphics & Text Animations</li>
              <li>Event Highlight Videos</li>
              <li>Social Media Content Creation</li>
              <li>Color Grading & Sound Sync</li>
            </ul>
            <strong>Get Started:</strong>
            <p className="mt-1">
              Contact us to schedule a consultation and Designs where Money Meets Value!
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
  <img 
    src='/The.jpg' 
    alt='Software Developer' 
    className='w-40 h-40 object-cover rounded-full mb-6 border-4 border-gray-200 shadow'
  />
  <h2 className="text-xl font-semibold mb-2 text-gray-800 text-center">
    Software Developer
  </h2>
  <div className="text-gray-600 text-base mb-4 text-center">
    <strong>Services:</strong>
    <ul className="list-disc list-inside text-left mt-1 mb-2">
      <li>Custom web application development</li>
      <li>Mobile app development (iOS & Android)</li>
      <li>API integration and backend services</li>
      <li>Website maintenance and optimization</li>
    </ul>
    <strong>Benefits:</strong>
    <ul className="list-disc list-inside text-left mt-1 mb-2">
      <li>Tailored solutions for your business needs</li>
      <li>Scalable and secure applications</li>
      <li>Improved user experience and performance</li>
      <li>Ongoing technical support and updates</li>
    </ul>
    <strong>How It Works:</strong>
    <ul className="list-disc list-inside text-left mt-1 mb-2">
      <li>Discuss your project requirements and goals</li>
      <li>Receive a detailed project plan and timeline</li>
      <li>Development, testing, and deployment of your solution</li>
    </ul>
    <strong>Get Started:</strong>
    <p className="mt-1">
      Contact us to schedule a consultation and secure your Online world!
    </p>
  </div>
</div>
        
        {/* Add more cards as needed */}
      </section>
    </div>
  )
}

export default page