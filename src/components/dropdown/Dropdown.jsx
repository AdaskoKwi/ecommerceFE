import React from 'react';
import '/src/components/dropdown/Dropdown.css';

const Dropdown = ({showDropdown, categoryList, setCategory, setDropdownVisibility, dropdownVisibility}) => {
    return (
        <div>
            {showDropdown ? (
                <div className="dropdown">
                    {categoryList.map((category) => (
                        <p
                            className={"dropdown-item"}
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
export default Dropdown