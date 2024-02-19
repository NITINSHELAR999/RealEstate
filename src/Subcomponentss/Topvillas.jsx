import React from 'react'
import { villas } from '../villas'
import { IoIosPeople } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaBath } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { RxDot } from 'react-icons/rx';

const Topvillas = () => {
  return (
    <div>
        <section id="topVillas">
             <h1>Top Pick Vilas</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nam ratione culpa laudantium harum ducimus. Aliquid laborum nihil vel debitis nemo quos eum ut cumque maiores, harum suscipit. Qui, voluptas.</p>
             <div className='villasContainer'>
                {
                    villas.slice(0,3).map((ele) => (
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
        </section>
    </div>
  )
}

export default Topvillas