import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import data from '../profiles.json';
import TestImage from '../pic.png';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Contact from './Contact';


function Tiles() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [people, setPeople] = useState(data);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
    setIsCardVisible(true);
  };

  const handleCardClickClose = (index) => {
    setSelectedCardIndex(index);
    setIsCardVisible(false);
  };

  const handleContactClick = (index) => {
    setSelectedCardIndex(index);
    setIsContactVisible(true);
  };

  const handleContactClickClose = (index) => {
    setSelectedCardIndex(index);
    setIsContactVisible(false);
  };


  return (
    <div className="container pt-10">
      <div className="row">
        {people.map((person, index) => (
          <div
            key={index}
            className="col-sm-4 p-2"
            onClick={() => handleCardClick(index)}
          >
            <div className="card grid-cols-2">
              <div className="card-body">
                <h5 className="card-title">Name: {person.Name}</h5>
                <p className="card-text">Director of: {person.Classification}</p>
                <p className="card-text">Age: {person.Age}</p>
                <a href={person.link} className="btn btn-primary">
                  Open Card
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isCardVisible && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="card">
            <div className="card-body grid grid-cols-2 p-4">
              <div>
                <h5 className="card-title">Name: {people[selectedCardIndex].Name}</h5>
                <p className="card-text">
                  Director of: {people[selectedCardIndex].Classification}
                </p>
                <p className="card-text">Age: {people[selectedCardIndex].Age}</p>
                <div className = "flex justify-center mt-12">
                  <a
                    href={people[selectedCardIndex].link}
                    className="btn btn-danger"
                    onClick={() => handleCardClickClose(selectedCardIndex)}
                  >
                    Close Card
                  </a>
                  <button
                      className="btn btn-success ml-3"
                      onClick={() => handleContactClick(selectedCardIndex)}
                  >
                    Contact
                  </button>
                </div>
              </div>
              <img
                src={TestImage}
                alt="pic"
                className="object-contain h-48 pl-2"
              />
            </div>
          </div>
        </div>
      )}
      {isContactVisible && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
          <Contact selectedPerson={people[selectedCardIndex]} onClose={handleContactClickClose} />
        </div>
      )}
    </div>
  );
}

export default Tiles;
