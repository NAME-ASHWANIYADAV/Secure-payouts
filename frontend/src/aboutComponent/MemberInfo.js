import React from 'react';
import ekansh from './images/ekansh.jpeg';
import maanit from './images/maanit.jpeg';
import faeez from './images/faeez.jpeg';
import harsh from './images/harsh.jpeg';
import anurag from './images/anurag.jpeg';
import jasmeen from './images/jasmeen.jpeg';
import kirti from './images/kirti.jpeg';
import krishmann from './images/krishmann.jpeg';
import pratham from './images/pratham.jpeg';
import ritik from './images/ritik.jpeg';
import './MemberInfo.css';
const members = [
  {
    Image : ekansh,
    Name : "Ekansh Bhushan",
    Position : "Tech president",
    Org : "@startupX dtu",
    Clg : "DCE-DTU '26"
  },
  {
    Image : maanit,
    Name : "Mannit Arora",
    Position : "Tech Vice-president",
    Org : "@startupX dtu",
    Clg : "DCE-DTU '26"
  },
  {
    Image : krishmann,
    Name : "Krissmann Gupta",
    Position : "Founder",
    Org : "@startupX dtu",
    Clg : "DCE-DTU '26"
  },
  {
    Image : jasmeen,
    Name : "Jasmeen Kour",
    Position : "Non-Tech president",
    Org : "@startupX dtu",
    Clg : "DCE-DTU '26"
  },
  {
    Image : ritik,
    Name : "Ritik Pal",
    Position : "Member",
    Org : "@startupX dtu",
    Clg : "DCE-DTU '26"
  },
  {
    Image : faeez,
    Name : "Faeez",
    Position : "Member",
    Org : "@startupX dtu",
    Clg : "DCE-DTU '26"
  },
  {
    Image : anurag,
    Name : "Anurag Kumar",
    Position : "Member",
    Org : "@startupX dtu",
    Clg : "DCE-DTU '26"
  },
  {
    Image : harsh,
    Name : "Harsh Vardhan",
    Position : "Member",
    Org : "@startupX dtu",
    Clg : "DCE-DTU '26"
  },
  {
    Image : pratham,
    Name : "Pratham Mehra",
    Position : "Member",
    Org : "@startupX dtu",
    Clg : "DCE-DTU '26"
  },
  {
    Image : kirti,
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

