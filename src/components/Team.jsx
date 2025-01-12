import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      designation: 'Designation here',
      image: 'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=',
      description: 'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit at fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas.'
    },
    {
      name: 'Elina Williams',
      designation: 'Designation here',
      image: 'https://media.istockphoto.com/id/1587604256/photo/portrait-lawyer-and-black-woman-with-tablet-smile-and-happy-in-office-workplace-african.jpg?s=612x612&w=0&k=20&c=n9yulMNKdIYIQC-Qns8agFj6GBDbiKyPRruaUTh4MKs=',
      description: 'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit at fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas.'
    },
    {
      name: 'John Smith',
      designation: 'Designation here',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvWOarkv92j9uQKnrp6eRTH8PUjD2rEuqfWQ&s',
      description: 'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit at fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6">Team</h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
        </p>
        
        <div className="space-y-4">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{member.designation}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;