import React from 'react';

const specialties = [
  'Neurology', 'Oncology', 'Otorhinolaryngology',
  'Ophthalmology', 'Cardiovascular', 'Pulmonology',
  'Gastroenterology', 'Urology', 'Dermatology', 'Gynaecology'
];

const Specialties = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h3 className="text-blue-500 uppercase font-semibold mb-2">Always Caring</h3>
        <h2 className="text-2xl font-bold mb-8">Our Specialties</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {specialties.map((item, index) => (
            <div key={index} className={flex items-center justify-center h-32 rounded-lg ${index === 4 ? 'bg-blue-900 text-white' : 'bg-white text-gray-600'} shadow-md}>
              <div className="text-center">
                <div className="text-3xl mb-2">❤</div>
                <p>{index === 4 ? 'Bones' : item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;