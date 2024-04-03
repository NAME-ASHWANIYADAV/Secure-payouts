import React from 'react';
import photo_payout from './photo_payout.jpeg';
import './MemberInfo.css';
const members = [
  {
    Image : photo_payout,
    Name : "Ekansh Bhushan",
    Position : "Tech president",
    Org : "@startupX dtu",
    Clg : "DCE-DTU '26"
  },
  {
    Image : photo_payout,
    Name : "Mannit Arora",
    Position : "Tech Vice-president",
    Org : "@startupX dtu",
    Clg : "DCE-DTU '26"
  },
  {
    Image : photo_payout,
    Name : "Krissmann Gupta",
    Position : "Founder",
    Org : "@startupX dtu",
    Clg : "DCE-DTU '26"
  },
  {
    Image : photo_payout,
    Name : "Jasmeen Kour",
    Position : "Non-Tech president",
    Org : "@startupX dtu",
    Clg : "DCE-DTU '26"
  },
  {
    Image : photo_payout,
    Name : "Ritik Pal",
    Position : "Member",
    Org : "@startupX dtu",
    Clg : "DCE-DTU '26"
  },
  {
    Image : photo_payout,
    Name : "Faeez",
    Position : "Member",
    Org : "@startupX dtu",
    Clg : "DCE-DTU '26"
  },
  {
    Image : photo_payout,
    Name : "Anurag Kumar",
    Position : "Member",
    Org : "@startupX dtu",
    Clg : "DCE-DTU '26"
  },
  {
    Image : photo_payout,
    Name : "Harsh Vardhan",
    Position : "Member",
    Org : "@startupX dtu",
    Clg : "DCE-DTU '26"
  },
  {
    Image : photo_payout,
    Name : "Pratham Mehra",
    Position : "Member",
    Org : "@startupX dtu",
    Clg : "DCE-DTU '26"
  },
  {
    Image : photo_payout,
    Name : "kirti",
    Position : "Member",
    Org : "@startupX dtu",
    Clg : "DCE-DTU '26"
  },
];
const MemberInfo = () => {
  return (
    <>
      <h3 className="team-title">Our Team</h3>
      <div className='container-grid'>
        {members.map((member, index) => (
          <div key={index} className="members">
            <img src={member.Image} alt={member.Name} className="image" />
            <p className="name">{member.Name}</p>
            <p>{member.Position}</p>
            <a href="https://www.linkedin.com/company/skillop-dtu/" target="_blank" rel="noopener noreferrer">{member.Org}</a>
            <p>{member.Clg}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default MemberInfo

