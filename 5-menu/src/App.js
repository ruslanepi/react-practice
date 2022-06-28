import { useState } from 'react';
import Menu from './components/Menu';
import Categories from './components/Categories';
import items from './data';

const AllCategories = ['All', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(AllCategories);

  const filterItems = (currentCategory) => {
    if (currentCategory === 'All') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter(
      (menuItem) => menuItem.category === currentCategory
    );
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section ">
        <h2 className="title">Our menu</h2>
        <div className="underline"></div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
