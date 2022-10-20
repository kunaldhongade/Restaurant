import React from 'react';

const MenuCard = ({ menuData }) => {
    // console.log(menuData);

    return (
        <>
            <section className="main-card--container">
                {menuData.map((curElem) => {

                    const { id, name, category, description, image } = curElem;

                    return (
                        <>
                            <div className="card-container" key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">
                                            {id}
                                        </span>
                                        <span className="card-author subtle" key={category}>{category}</span>
                                        <h2 className="card-title" key={name}>{name}</h2>
                                        <span className="card-description subtle" key={description}>
                                            {description}
                                        </span>
                                        <div className="card-read">Read</div>
                                        <img src={image} alt="images" className="card-media" />
                                        <span className="card-tag subtle">Order Now</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })
                }
            </section>
        </>
    );
}

export default MenuCard;
