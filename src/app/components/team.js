// TeamComponent.js
import React from 'react';

const TeamMember = ({ name, email, imageSrc }) => (
  <div className="flex flex-col items-center">
    <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center shadow-lg">
      <img
        src={imageSrc} 
        alt={`Team Member ${name}`}
        className="w-20 h-20 rounded-full object-cover"
      />
    </div>
    <h3 className="text-xl font-medium mt-2">{name}</h3>
    <p className="text-gray-600 text-sm">{email}</p>
  </div>
);

const Team = () => (
  <div className="flex flex-col items-center justify-center px-4 py-8 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-medium text-gray-600 text-center mb-6">Meet Our Team</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <TeamMember name="Shreya Shrestha" email="shreya@gmail.com" imageSrc="/image/team_img/shreya.jpeg" />
        <TeamMember name="Nabina Upadhyaya" email="nabinasilwal15@gmail.com" imageSrc="/image/team_img/nabs.png" />
        <TeamMember name="Aarati Rai" email="aaratirai777@gmail.com" imageSrc="/image/team_img/aarati.png" />
        <TeamMember name="Pramig Kc" email="pramig@gmail.com" imageSrc="/image/team_img/pramig.png" />
      </div>
    </div>
  </div>
);

export default Team;
