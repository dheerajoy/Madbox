
import React, { useState } from 'react';
import '../cards/data.scss'

import{GrLocation} from 'react-icons/gr';
import{BsPeople} from 'react-icons/bs';


const data = [
  {
    id: 1, 
    title: 'Game Automation Manager', 
    description: 'Madbox is a fast-growing mobile gaming company with a very unique way of developing games. Everything has been made for teams to take as much ownership as possible, unleash their creativity, bring performance, and have as much fun as possible.',
    location:'🇪🇸 BARCELONA',
    role:'Automation',
  },

  { 
    id: 2, 
    title: 'Data Engineer', 
    description: 'Your journey at Madbox as a Data Engineer :',
    location:'🇪🇸 BARCELONA',
    role: 'Data Automation'
  },

  { 
    id: 3, 
    title: 'Head of Finance', 
    description: 'Madbox is a fast-growing mobile gaming company with a very unique way of developing games. Everything has been made for teams to take as much ownership as possible, unleash their creativity, bring performance, and have as much fun as possible.',
    location:'🇫🇷 PARIS',
    role:'Finance'
  },
  
  { 
    id: 4, 
    title: 'Senior Core Developer - BCN', 
    location:'🇪🇸 BARCELONA',
    role:'Game Automation',
    description: "At Madbox, we strongly believe in improving our efficiency day after day in order to become faster and stronger. To make that happen, we've dedicated entire teams to automation and we've built tools to simplify the way we manage our marketing operations and game development. The idea of Game Automation is to stick to the DRY principle: Don't Repeat Yourself! Every time we code something that will be reused somewhere else, we centralize it in a module. ",
  },

  { 
    id: 5, 
    title: 'Lead Game Designer - Paris', 
    description: 'Madbox is a fast-growing mobile gaming company with a very unique way of developing games. Everything has been made for teams to take as much ownership as possible, unleash their creativity, bring performance, and have as much fun as possible.',
    location:'🇫🇷 PARIS',
    role:'Game Design'
  },

  { 
    id: 6, 
    title: 'Senior Core Developer - Paris', 
    description: "At Madbox, we strongly believe in improving our efficiency day after day in order to become faster and stronger. To make that happen, we've dedicated entire teams to automation and we've built tools to simplify the way we manage our marketing operations and game development. The idea of Game Automation is to stick to the DRY principle: Don't Repeat Yourself! Every time we code something that will be reused somewhere else, we centralize it in a module.  ",
    location:'🇫🇷 PARIS',
    role:'Game Automation'
  },
];

const DataCard = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-content'>
        <h3 className='h3card'>{item.title}</h3>
        <div className='description'>
          <p className='pcard'>{item.description}</p>
        </div>
        <div className='location'>
          <span className='span'>{item.location}</span>
        </div>
        <div className='role'>
          <span className='span'>{item.role}</span>
        </div>
        <div className='button'>
          <a href="#" className="btn">
            Apply
          </a>
        </div>
      </div>
    </div>
  );
};

const Filters = ({ onFilterChange }) => {
  const [roleFilters, setRoleFilters] = useState({});
  const [locationFilters, setLocationFilters] = useState({});

  const customLocationNames = {
    '🇪🇸 BARCELONA': 'BARCELONA', 
    '🇫🇷 PARIS': 'PARIS', 
  };

  const handleRoleFilterChange = (event) => {
    const { name, checked } = event.target;
    setRoleFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const handleLocationFilterChange = (event) => {
    const { name, checked } = event.target;
    setLocationFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  React.useEffect(() => {
    // Collect selected filters
    const selectedFilters = {
      roles: Object.keys(roleFilters).filter((role) => roleFilters[role]),
      locations: Object.keys(locationFilters).filter((location) => locationFilters[location]),
    };

    onFilterChange(selectedFilters);
  }, [roleFilters, locationFilters, onFilterChange]);

  return (
    <div className="filters">
      <div className="filter-section1">
        <p><BsPeople/>  Team</p>
        {data.reduce((roles, item) => {
          if (!roles.includes(item.role)) {
            roles.push(item.role);
          }
          return roles;
        }, []).map((role) => (
          <label key={role} className="filter-label">
            <input
              type="checkbox"
              name={role}
              checked={roleFilters[role] || false}
              onChange={handleRoleFilterChange}
            />
            {role}
          </label>
        ))}
      </div>
      <div className="filter-section2">
        <p> <GrLocation/> Location</p>
        {data.reduce((locations, item) => {
          if (!locations.includes(item.location)) {
            locations.push(item.location);
          }
          return locations;
        }, []).map((location) => (
          <label key={location} className="filter-label">
            <input
              type="checkbox"
              name={location}
              checked={locationFilters[location] || false}
              onChange={handleLocationFilterChange}
            />
            {customLocationNames[location] || location}
          </label>
        ))}
      </div>
    </div>
  );
};

const Data = () => {
  const initialVisibleCount = 3;
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [selectedFilters, setSelectedFilters] = useState({ roles: [], locations: [] });
  const [filtersVisible, setFiltersVisible] = useState(false); // Track filter visibility

  const handleSeeMoreClick = () => {
    // Increase the visible count to show more cards
    setVisibleCount(data.length);
    setFiltersVisible(true); // Show filters when "See More" is clicked
  };

  const handleFilterChange = (newFilters) => {
    setSelectedFilters(newFilters);
  };

  const filteredData = data.filter((item) => {
    return (
      (selectedFilters.roles.length === 0 || selectedFilters.roles.includes(item.role)) &&
      (selectedFilters.locations.length === 0 || selectedFilters.locations.includes(item.location))
    );
  });

  const visibleData = filteredData.slice(0, visibleCount);

  return (
    <>
      <div>
      {filtersVisible && <Filters onFilterChange={handleFilterChange} />}
      </div>
      <section>
        <div className='card-container1'>
          {visibleData.map((item) => (
            <DataCard key={item.id} item={item} />
          ))}
        </div>
      </section>
      {visibleCount < filteredData.length && (
        <div className="see-more-button">
          <button id='cardSeeMoreBtn' onClick={handleSeeMoreClick}><p>See more</p></button>
        </div>
      )}
    </>
  );
};

export default Data;



