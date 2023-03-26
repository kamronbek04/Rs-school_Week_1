import React from 'react';
import Navbar from '../compenents/Navbar';

type Package = {
  imageSrc: string;
  title: string;
  description: string;
  priceRange: string;
};

const packages: Package[] = [
  {
    imageSrc:
      'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'feature tour packages',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, in.',
    priceRange: '$250-$450',
  },
  {
    imageSrc:
      'https://images.pexels.com/photos/161172/cycling-bike-trail-sport-161172.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'feature tour packages',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, in.',
    priceRange: '$250-$450',
  },
  {
    imageSrc:
      'https://images.pexels.com/photos/3788363/pexels-photo-3788363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'feature tour packages',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, in.',
    priceRange: '$250-$450',
  },
  {
    imageSrc:
      'https://images.pexels.com/photos/4008488/pexels-photo-4008488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'feature tour packages',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, in.',
    priceRange: '$250-$450',
  },
  {
    imageSrc:
      'https://images.pexels.com/photos/933843/pexels-photo-933843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'feature tour packages',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, in.',
    priceRange: '$250-$450',
  },
  {
    imageSrc:
      'https://images.pexels.com/photos/71104/utah-mountain-biking-bike-biking-71104.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'feature tour packages',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, in.',
    priceRange: '$250-$450',
  },
];

const Packages: React.FC = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className="packages" id="packages">
        <div className="box-container">
          {packages.map((p, index) => (
            <div key={index} className="box">
              <div className="images">
                <img src={p.imageSrc} alt="" />
              </div>

              <div className="content">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="price">{p.priceRange}</div>
                <a href="/card" className="btn">
                  explore now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Packages;
