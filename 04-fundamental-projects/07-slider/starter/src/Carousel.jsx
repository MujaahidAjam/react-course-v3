import { useState } from 'react';
import {shortList, list, longList} from './data';
import { ImAngry } from "react-icons/im";
import { HiArrowCircleLeft, HiArrowCircleRight  } from "react-icons/hi";


const Carousel = () => {

    const [people, setPeople] =useState(shortList);

    const prevSlide = () => {};
    const nextSlide = () => {};

    return (
        <section className='slider-container'>
            {people.map((person)=>{
                const {id, image, name, title, quote} = person;
                return <article className='slide' key={id}>
                    <img src={image} alt={name} className='person-img'/>
                    <h5 className='name'>{name}</h5>
                    <p className='title'>{title}</p>
                    <p className='text'>{quote}</p>
                    <ImAngry className='icon'/>
                </article>
            })}
            <button type='button' className='prev' onClick={prevSlide}>
                <HiArrowCircleLeft />
            </button>
            <button type='button' className='prev' onClick={nextSlide}>
                <HiArrowCircleRight />
            </button>
        </section>
    )
};
export default Carousel;
