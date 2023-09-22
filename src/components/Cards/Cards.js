import React from 'react'
import styles from './Cards.module.css'

const Cards = ({results}) => {
    let display;

    if (results) {
        display = results.map((x) => {
            let {id, name, height, mass, hair_color, skin_color, eye_color,birth_year, gender, created} = x;
            return (
                <div key={id} className="col-md-4 mb-3 position-relative">  
                    <div className={styles.cards}>
                            <div className="content">
                            <div className="fs-4 fw-bold mb-4 text-warning text-center">{name}</div>
                            <div className="fs-6 text-white">Height:</div>
                            <div className="fs-5 text-warning">{height} CM</div>
                            <div className="fs-6 text-white">Mass:</div>
                            <div className="fs-5 text-warning">{mass} KG</div>
                            <div className="fs-6 text-white">Hair Color:</div>
                            <div className="fs-5 text-warning">{hair_color}</div>
                            <div className="fs-6 text-white">Skin Color:</div>
                            <div className="fs-5 text-warning">{skin_color}</div>
                            <div className="fs-6 text-white">Eye Color:</div>
                            <div className="fs-5 text-warning">{eye_color}</div>
                            <div className="fs-6 text-white">Birth Year:</div>
                            <div className="fs-5 text-warning">{birth_year}</div>
                            <div className="fs-6 text-white">Gender:</div>
                            <div className="fs-5 text-warning">{gender}</div>
                            <div className="fs-6 text-white">Created:</div>
                            <div className="fs-5 text-warning">{created}</div>
                        </div>
                    </div>
                </div>
            );
        });
        } else {
        display = "Danniel Lorenzo Mitra, 2023"
        }
  return <>{display}</>;

};

export default Cards;