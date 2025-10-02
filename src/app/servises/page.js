import React from 'react'

const services = [
  {
    title: "Web Development",
    description: "Custom websites, web apps, and e-commerce solutions tailored to your business needs.",
    icon: "🌐",
  },
  {
    title: "Graphic Design",
    description: "Creative branding, logos, flyers, banners, and social media graphics.",
    icon: "🎨",
  },
  {
    title: "Mobile App Development",
    description: "iOS and Android app development for startups and enterprises.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design for seamless and engaging digital experiences.",
    icon: "🖌️",
  },
  {
    title: "Digital Security",
    description: "Protect your data and digital assets with our security consulting and solutions.",
    icon: "🔒",
  },
  {
    title: "Video Editing",
    description: "Professional video editing for marketing, social media, and events.",
    icon: "🎬",
  },
];

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Our Services
        </h1>
        <p className="text-center text-gray-600 mb-10 text-lg md:text-xl">
          We offer a wide variety of professional services to help your business grow and succeed.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800 text-center">
                {service.title}
              </h2>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page