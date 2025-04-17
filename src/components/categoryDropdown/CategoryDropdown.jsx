import React from 'react';
import '/src/components/categoryDropdown/CategoryDropdown.css';

const CategoryDropdown = ({categoryList, setCategory, setDropdownVisibility, dropdownVisibility}) => {
    return (
        <div onMouseOver={() => setDropdownVisibility(true)} onMouseLeave={() => setDropdownVisibility(false)}>
            {dropdownVisibility ? (
                <div className="category-dropdown">
                    {categoryList.map((category) => (
                        <p
                            className={"category-dropdown-item"}
                            onClick={() => {
                                setCategory(category);
                                setDropdownVisibility(!dropdownVisibility);
                            }
                        }>{category}</p>
                    ))}
                </div>
            ) : ''}
        </div>

    )
}
export default CategoryDropdown