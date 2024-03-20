import { useState, useRef, useEffect  } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faCode, faFolder, faPenNib, faPlus  } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons"



import './index.css'

const SideBar = () =>{

  const ProfileDetails = ()=>{
    return(
      <div className='profile-main-conatiner'>
      <div className='profile-items-container'>
        <img src='/images/innovation.jpg' alt='company-logo' className='company-logo'/>
      <div className='logo-text-container'>
      <p className='paragraph'>INC</p>
      <p className='para-titile'>InnovateHub</p>
      </div>
      </div>
      <img src='./images/kiran.jpg' alt='profile' className='profile-image'/>

    </div>
    )
  }

  const DropdownMenu = () => {
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
      <div className={`dropdown ${isOpen ? 'open' : ''}`}>
          <button className="dropdown-toggle" onClick={toggleMenu}>
          <div className='folder-icon-button-text-container'><FontAwesomeIcon icon={faFolder} style={{paddingRight:'6px'}} /> Product</div>
        </button>
        <ul className="dropdown-menu">
          <li onClick={() => handleItemClick('Item 1')}>Roadmap</li>
          <li onClick={() => handleItemClick('Item 2')}>Feedback</li>
          <li onClick={() => handleItemClick('Item 3')}>Performance</li>
          <li onClick={() => handleItemClick('Item 4')}>Team</li>
          <li onClick={() => handleItemClick('Item 5')}>Analytics</li>
          <li onClick={() => handleItemClick('Item 6')}>
            <div className='create-team-button-container add-new-sub'>
             <FontAwesomeIcon icon={faSquarePlus} style={{height:'15px',  width: '10px', color:"#839192" }}/>
             <button className='create-team-button'>Add new sub</button>
            </div>
          </li>
          </ul>
      </div>
    );
  };

 



  
  const SalesDropDownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const handleItemClick = (item) => {
      console.log(`Selected: ${item}`);
      // You can add more functionality here based on the selected item
      // For example, navigate to a different page or trigger some action
    };
  
    return (
      <div className={`dropdown ${isOpen ? 'open' : ''}`}>
          <button className="dropdown-toggle" onClick={toggleMenu}>
          <div className='folder-icon-button-text-container'>
            <FontAwesomeIcon icon={faFolder} style={{paddingRight:'6px'}} /> Sales</div>
        </button>
        <ul className="dropdown-menu">
          <li onClick={() => handleItemClick('Item 1')}>Roadmap</li>
          <li onClick={() => handleItemClick('Item 2')}>Feedback</li>
          <li onClick={() => handleItemClick('Item 3')}>Performance</li>
          <li onClick={() => handleItemClick('Item 4')}>Team</li>
          <li onClick={() => handleItemClick('Item 5')}>Analytics</li>
          <li onClick={() => handleItemClick('Item 6')}>
            <div className='create-team-button-container add-new-sub'>
             <FontAwesomeIcon icon={faSquarePlus} style={{height:'15px',  width: '10px', color:"#839192" }}/>
             <button className='create-team-button'>Add new sub</button>
            </div>
          </li>
          </ul>
      </div>
    );
  };

  const DesignDropDownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const handleItemClick = (item) => {
      console.log(`Selected: ${item}`);
      // You can add more functionality here based on the selected item
      // For example, navigate to a different page or trigger some action
    };
  
    return (
      <div className={`dropdown ${isOpen ? 'open' : ''}`}>
          <button className="dropdown-toggle" onClick={toggleMenu}>
          <div className='folder-icon-button-text-container'>
            <FontAwesomeIcon icon={faFolder} style={{paddingRight:'6px'}} />Design</div>
        </button>
        <ul className="dropdown-menu">
          <li onClick={() => handleItemClick('Item 1')}>Roadmap</li>
          <li onClick={() => handleItemClick('Item 2')}>Feedback</li>
          <li onClick={() => handleItemClick('Item 3')}>Performance</li>
          <li onClick={() => handleItemClick('Item 4')}>Team</li>
          <li onClick={() => handleItemClick('Item 5')}>Analytics</li>
          <li onClick={() => handleItemClick('Item 6')}>
            <div className='create-team-button-container add-new-sub'>
             <FontAwesomeIcon icon={faSquarePlus} style={{height:'15px',  width: '10px', color:"#839192" }}/>
             <button className='create-team-button'>Add new sub</button>
            </div>
          </li>
          </ul>
      </div>
    );
  };

  const OfficeDropDownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const handleItemClick = (item) => {
      console.log(`Selected: ${item}`);
      // You can add more functionality here based on the selected item
      // For example, navigate to a different page or trigger some action
    };
  
    return (
      <div className={`dropdown ${isOpen ? 'open' : ''}`}>
          <button className="dropdown-toggle" onClick={toggleMenu}>
          <div className='folder-icon-button-text-container'>
            <FontAwesomeIcon icon={faFolder} style={{paddingRight:'6px'}} />Office</div>
        </button>
        <ul className="dropdown-menu">
          <li onClick={() => handleItemClick('Item 1')}>Item 1</li>
          <li onClick={() => handleItemClick('Item 2')}>Item 2</li>
          <li onClick={() => handleItemClick('Item 3')}>Item 3</li>
          <li onClick={() => handleItemClick('Item 6')}>
            <div className='create-team-button-container add-new-sub'>
             <FontAwesomeIcon icon={faSquarePlus} style={{height:'15px',  width: '10px', color:"#839192" }}/>
             <button className='create-team-button'>Add new sub</button>
            </div>
          </li>
          </ul>
      </div>
    );
  };

  const LegalDropDownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const handleItemClick = (item) => {
      console.log(`Selected: ${item}`);
      // You can add more functionality here based on the selected item
      // For example, navigate to a different page or trigger some action
    };
  
    return (
      <div className={`dropdown ${isOpen ? 'open' : ''}`}>
          <button className="dropdown-toggle" onClick={toggleMenu}>
          <div className='folder-icon-button-text-container'>
            <FontAwesomeIcon icon={faFolder} style={{paddingRight:'6px'}} />Legal</div>
        </button>
        <ul className="dropdown-menu">
          <li onClick={() => handleItemClick('Item 1')}>Item 1</li>
          <li onClick={() => handleItemClick('Item 2')}>Item 2</li>
          <li onClick={() => handleItemClick('Item 3')}>Item 3</li>
           <li onClick={() => handleItemClick('Item 6')}>
            <div className='create-team-button-container add-new-sub'>
             <FontAwesomeIcon icon={faSquarePlus} style={{height:'15px',  width: '10px', color:"#839192" }}/>
             <button className='create-team-button'>Add new sub</button>
            </div>
          </li>
          </ul>
      </div>
    );
  };
  

  const TeamConatainer = ()=>{
    return(
      <div className='team-and-createteam-container'>
      <div className='Teams-container'>
        <div className='desig-team-text-container'>
          <FontAwesomeIcon icon={faPenNib}   style={{height:'12px', paddingRight: '4px', width: '10px' }}/>
          <p className='design-team-text'>Design Team</p>
        </div>
        <div className='desig-team-text-container'>
          <FontAwesomeIcon icon={faBullhorn}   style={{height:'12px', paddingRight: '4px', width: '10px' }}/>
          <p className='design-team-text'>Marketing Team</p>
        </div>
        <div className='desig-team-text-container'>
          <FontAwesomeIcon icon={faCode}   style={{height:'12px', paddingRight: '4px', width: '10px'}}/>
          <p className='design-team-text tx3'>Development Team</p>
        </div>
        
    </div>
    <hr className='hr-line'/>
        <div className='create-team-button-container'>
          <FontAwesomeIcon icon={faSquarePlus} style={{height:'15px',  width: '10px', color:"#839192" }}/>
          <button className='create-team-button'>Create Team</button>
        </div>
    </div>
    )
  }

  const CreateFolderIconAndText = ()=>{
    return(
      <div className='folder-text-icon-container'>
          <p className='folder-text'>Folders</p>
          <button className='add-folder-button'><FontAwesomeIcon icon={faPlus} style={{color: "#839192"}}/></button>
      </div>
    )
  }

  const AllComponents = ()=>{
    return(
      <div className="sidebar-container">
          <ProfileDetails/>
          <TeamConatainer/>
          <CreateFolderIconAndText/>
          <DropdownMenu/>
          <SalesDropDownMenu/>
          <DesignDropDownMenu/>
          <OfficeDropDownMenu/>
          <LegalDropDownMenu/>
        </div>
    )
  }

 

    return(
        <div className='all-sidebar-components-container'>
          <AllComponents/>
        </div>
        )
}

export default SideBar