import React from 'react'
import {villas} from '../../villas';
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaBath } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Villas = () => {
  return (
    <>
        <div className="page" id='allVillas'>
          <h1>ALL VILLAS</h1>
          <p>{villas.length} Properties</p>
          <div className="villasContainer">
          {
                    villas.map((ele) => (
                        <div key={ele.id}>
                          <Link to={`/villa/${ele.id}`} className='card'>
                             <img src={ele.image} alt="image not found" />
                             <div className='location_text'>
                                <span>{ele.location}</span>
                                <span><RxDot/></span>
                                <span>{ele.category}</span>
                            </div>
                            <div className="title_text">
                                {ele.name}
                            </div>
                           <div className='specifications'>
                               <div className="spec">
                                  <IoIosPeople/>
                                  <span>{ele.guests}</span>
                                  Guests
                               </div>

                               <div className="spec">
                                  <FaBed/>
                                  <span>{ele.guests}</span>
                                  Bedrooms
                               </div>

                               <div className="spec">
                                  <BiArea/>
                                  <span>{ele.squareMeter}</span>
                                  Guests
                               </div>

                               <div className="spec">
                                  <FaBath/>
                                  <span>{ele.bathrooms}</span>
                                  Bathrooms
                               </div>
                           </div>
                        </Link>
                        </div>
                    ))
                }
         </div>
        </div>
    </>
  )
}

export default Villas