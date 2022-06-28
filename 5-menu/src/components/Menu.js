import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, category, price, img, desc } = item;
        return (
          <article key={id} className="menu-item">
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4>{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
            <img src={img} alt="" className="photo" />
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
