import React, { useState, useContext } from 'react'
import { useNavigate, useParams } from "react-router";
import fetchPet from '../services/fetchPet';
import { useQuery } from "@tanstack/react-query";
import Carousel from "../components/Carousel";
import Modal from "../components/Modal";
// import AdoptedPetContext from "../context/AdoptedPetContext";
function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const results = useQuery(["details", id], fetchPet);
  const [showModal, setShowModal] = useState(false);
  // const [, setAdoptedPet] = useContext(AdoptedPetContext);
  console.log('results', results);
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  const pet = results.data.pets[0];
  return (
    <div className="details">
      <Carousel images={pet.images} />;
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>


        {
          showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {pet.name}?</h1>
                <div className="buttons">
                  <button onClick={() => {
                    // setAdoptedPet(pet);
                    navigate("/");
                  }}>Yes</button>
                  <button onClick={() => setShowModal(false)}>No</button>
                </div>
              </div>
            </Modal>
          ) : null // you have to remove this semi-colon, my auto-formatter adds it back if I delete it
        }


      </div>
    </div>
  );
}

export default Details