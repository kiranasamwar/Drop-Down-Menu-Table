import { useState, useRef, useEffect } from 'react';

import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImport, faSquarePlus } from '@fortawesome/free-solid-svg-icons';


const FolderDetails = () =>{


const AllBrandsDropDownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    
      
        const toggleMenu = () => {
          setIsOpen(!isOpen);
        };
    
        useEffect(() => {
          // Adjust dropdown position based on viewport height
          if (isOpen && dropdownRef.current) {
            const dropdownHeight = dropdownRef.current.clientHeight;
            const windowHeight = window.innerHeight;
            const dropdownTop = dropdownRef.current.getBoundingClientRect().top;
            if (dropdownTop < dropdownHeight && windowHeight - dropdownHeight < dropdownTop) {
              dropdownRef.current.classList.add('move-down');
            }
          }
        }, [isOpen]);
      
        const handleItemClick = (item) => {
          console.log(`Selected: ${item}`);
          // You can add more functionality here based on the selected item
          // For example, navigate to a different page or trigger some action
        };
      
        return (
          <div className={`dropdown1 dropdown drpw1 ${isOpen ? 'open' : ''}`}>
              <button className="dropdown-toggle dwn" onClick={toggleMenu}>
              <div className='folder-icon-button-text-container'>
                <img src='/images/fourcircles.jpg' alt='allbrands' className='fourcircle-logo'/> All brands</div>
            </button>
            <ul className="dropdown-menu">
              <li onClick={() => handleItemClick('Item 1')}>Item 1</li>
              <li onClick={() => handleItemClick('Item 2')}>Item 2</li>
              <li onClick={() => handleItemClick('Item 3')}>Item 3</li>
              <li onClick={() => handleItemClick('Item 4')}>Item 4</li>
              <li onClick={() => handleItemClick('Item 5')}>Item 5</li>
              
              </ul>
          </div>
        );
      };

const DeskDropDownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    
      
        const toggleMenu = () => {
          setIsOpen(!isOpen);
        };
    
        useEffect(() => {
          // Adjust dropdown position based on viewport height
          if (isOpen && dropdownRef.current) {
            const dropdownHeight = dropdownRef.current.clientHeight;
            const windowHeight = window.innerHeight;
            const dropdownTop = dropdownRef.current.getBoundingClientRect().top;
            if (dropdownTop < dropdownHeight && windowHeight - dropdownHeight < dropdownTop) {
              dropdownRef.current.classList.add('move-down');
            }
          }
        }, [isOpen]);
      
        const handleItemClick = (item) => {
          console.log(`Selected: ${item}`);
          // You can add more functionality here based on the selected item
          // For example, navigate to a different page or trigger some action
        };
      
        return (
          <div className={`dropdown2 dropdown drpw2 ${isOpen ? 'open' : ''}`}>
              <button className="dropdown-toggle dwn" onClick={toggleMenu}>
              <div className='folder-icon-button-text-container'>Desk</div>
            </button>
            <ul className="dropdown-menu">
              <li onClick={() => handleItemClick('Item 1')}>Item 1</li>
              <li onClick={() => handleItemClick('Item 2')}>Item 2</li>
              <li onClick={() => handleItemClick('Item 3')}>Item 3</li>
              <li onClick={() => handleItemClick('Item 4')}>Item 4</li>
              <li onClick={() => handleItemClick('Item 5')}>Item 5</li>
              
              </ul>
          </div>
        );
      };      

const TagDropDownMenu = () => {
        const [isOpen, setIsOpen] = useState(false);
        const dropdownRef = useRef(null);
        
          
            const toggleMenu = () => {
              setIsOpen(!isOpen);
            };
        
            useEffect(() => {
              // Adjust dropdown position based on viewport height
              if (isOpen && dropdownRef.current) {
                const dropdownHeight = dropdownRef.current.clientHeight;
                const windowHeight = window.innerHeight;
                const dropdownTop = dropdownRef.current.getBoundingClientRect().top;
                if (dropdownTop < dropdownHeight && windowHeight - dropdownHeight < dropdownTop) {
                  dropdownRef.current.classList.add('move-down');
                }
              }
            }, [isOpen]);
          
            const handleItemClick = (item) => {
              console.log(`Selected: ${item}`);
              // You can add more functionality here based on the selected item
              // For example, navigate to a different page or trigger some action
            };
          
            return (
              <div className={`dropdown drpw3 ${isOpen ? 'open' : ''}`}>
                  <button className="dropdown-toggle dwn" onClick={toggleMenu}>
                  <div className='folder-icon-button-text-container'> Tags</div>
                </button>
                <ul className="dropdown-menu">
                  <li onClick={() => handleItemClick('Item 1')}>Item 1</li>
                  <li onClick={() => handleItemClick('Item 2')}>Item 2</li>
                  <li onClick={() => handleItemClick('Item 3')}>Item 3</li>
                  <li onClick={() => handleItemClick('Item 4')}>Item 4</li>
                  <li onClick={() => handleItemClick('Item 5')}>Item 5</li>
                  
                  </ul>
              </div>
            );
      };

    return(
            <div className='main-conatiner-dropdowns'>
              <div className='dropdown-conatiner'>
              <AllBrandsDropDownMenu/>
              <DeskDropDownMenu/>
              <TagDropDownMenu/>
              </div>
              <div className='button'>
              <button className='meeting-button' style={{marginRight:'8px'}}>
                 <FontAwesomeIcon icon={faSquarePlus} style={{paddingRight:'7px'}}/>Meeting</button>
              <button className='meeting-button'>
                 <FontAwesomeIcon icon={faFileImport} style={{paddingRight:'7px'}}/>Import / Export</button>

              </div>
            </div>
        
    )
}

export default FolderDetails