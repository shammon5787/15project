import React, { useEffect, useState } from 'react';
import FoodData from '../assets/Data/FoodData.js';
import { useDispatch } from 'react-redux';
import { addCategory } from '../Store/CategorySlice.jsx';

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All"); // State to track active category
  const dispatch = useDispatch();

  // Generate the list of unique categories
  const ListUniqueCategory = () => {
    const uniqueCategory = [...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCategory);
  };

  // Initialize categories on component mount
  useEffect(() => {
    ListUniqueCategory();
  }, []);

  // Handle category button click
  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Set active category
    dispatch(addCategory(category)); // Dispatch the action
  };

  return (
    <div className="mt-20">
      <h1 className="text-2xl text-blue-300 lg:text-4xl font-bold uppercase">
        Order Your Favorite Food
      </h1>
      <div className="flex items-center gap-5 my-2 overflow-x-scroll lg:overflow-x-hidden py-2">
        {/* "All" Button */}
        <button
          onClick={() => handleCategoryClick("All")}
          className={`px-2 rounded-md font-semibold text-xl transition-all duration-500 ${
            activeCategory === "All"
              ? "bg-green-600 text-white"
              : "bg-blue-800 text-white hover:bg-green-600"
          }`}
        >
          All
        </button>

        {/* Dynamic Category Buttons */}
        {categories.map((category, i) => (
          <button
            key={i}
            onClick={() => handleCategoryClick(category)}
            className={`px-2 rounded-md font-semibold text-xl transition-all duration-500 ${
              activeCategory === category
                ? "bg-green-600 text-white"
                : "bg-blue-800 text-white hover:bg-green-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;

// import React, { useEffect, useState } from 'react'
// import FoodData from '../assets/Data/FoodData.js'
// import { useDispatch } from 'react-redux'
// import { addCategory } from '../Store/CategorySlice.jsx'

// const CategoryMenu = () => {
//     const [categories, setcategories] = useState([])
//     const ListUniqueCategory = ()=>{
//         const uniqueCategory = [... new Set(FoodData.map((food)=>food.category)) ]
//         setcategories(uniqueCategory)
//     }
//     useEffect(() => {
//       ListUniqueCategory()
//     }, [])

//     const dispatch = useDispatch()
//     // const [active, setactive] = useState(true)
    
//     return (
//         <div className='mt-20'>
//             <h1 className='text-2xl text-blue-300 lg:text-4xl font-bold uppercase'>order your favforite food</h1>
//             <div className='flex items-center gap-5 my-2 overflow-x-scroll lg:overflow-x-hidden py-2'>
//             <button onClick={()=>dispatch(addCategory("All"))} className='bg-blue-800 px-2 rounded-md font-semibold text-xl hover:bg-green-600 transition-all duration-500'>All</button>
//                 {
//                     categories.map((category, i)=>(
//                         <button onClick={()=>dispatch(addCategory(category))} key={i} className={bg-blue-800 px-2 rounded-md font-semibold text-xl hover:bg-green-600 transition-all duration-500}>{category}</button>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default CategoryMenu
