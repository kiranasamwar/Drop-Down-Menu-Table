import { useState } from 'react'
import DataTable from 'react-data-table-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'
import {  faComments } from '@fortawesome/free-regular-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import FolderDetails from '../FolderDetails'


const SearchBar = ()=>{

  

const PrdouctAndSearchBar = ()=>{
  const columns =[
    {
        name: "Brand",
        selector: row  => row.name,
        sortable: true 
    },
    {
        name: "Description",
        selector: row  => row.description,
        sortable: true  
    },
    {
        name: "Categories",
        selector: row  => row.categories,
        sortable: true  
    },
    {
        name: "Tags",
        selector: row  => row.tags,
        sortable: true  
    },
    {
        name: 'Nextmeeting',
        selector: row  => row.nextmeeting,
        sortable: true  
    }
];
const data =[
    {
        id: 1,
        name: 'wix',
        description: "devoloped a personalized website",
        categories: "automation",
        tags: "#digitaltransformation",
        nextmeeting: "in 30 minutes"


    },
    {
        id: 2,
        name: 'shopify',
        description: "intoduce a cloud based website",
        categories: "e-commerce B2B",
        tags: "#onlineshoppingn",
        nextmeeting: "tommarow"


    },
    {
        id: 3,
        name: 'mailchimp',
        description: "developer a mobile app",
        categories: "SAAS Mobile",
        tags: "#technovation",
        nextmeeting: "tommarow"


    },
    {
        id: 4,
        name: 'paypal',
        description: "this program could include",
        categories: "market place",
        tags: "#buysellonline",
        nextmeeting: "in 6 hours"


    },
    {
        id: 5,
        name: 'disney',
        description: "intoduce a b2b solution",
        categories: "b2b b2c",
        tags: "#businesspartnership",
        nextmeeting: "no contact"


    },
    {
        id: 6,
        name: 'intercom',
        description: "implement an ai driven",
        categories: "technology #saas",
        tags: "#smartfinance",
        nextmeeting: "in 30 minutes"


    },
    {
        id: 7,
        name: 'google',
        description: "offer a competitive",
        categories: "finance automation",
        tags: "#smartfinance",
        nextmeeting: "in 30 minutes"


    },
    {
        id: 8,
        name: 'evernote',
        description: "this cloud include smart finance",
        categories: "transportation",
        tags: "#smartfinance",
        nextmeeting: "next month"


    },
    {
        id: 9,
        name: 'microsoft',
        description: "launch an advisory service",
        categories: "publishing b2c",
        tags: "#b2cmarketing",
        nextmeeting: "no contact"


    },
    {
        id: 10,
        name: 'invision',
        description: "the tool would analyse",
        categories: "web services",
        tags: "#apiintegration",
        nextmeeting: "next month"


    }
]

const [records, setRecords] = useState(data)

function handleFilter(event){
    const newData = data.filter(row =>{
        return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        
    })
    setRecords(newData)

}
    return(
        <div className="product-and-searchbar-container">
          <div className='align-container-searchbar-product-items'>
        <p className='product-text'>Product</p>
        <div className='search-and-comment-setting-icons-container'>
          <input type='text' onChange={handleFilter} placeholder='Search'  style={{padding:'3px'}}/>
          <button className='icon-button'>
            <FontAwesomeIcon icon={faComments} style={{padding:'2px'}}/>
          </button>
          <button className='icon-button'>
            <FontAwesomeIcon icon={faGear} style={{padding:'2px'}}/>
          </button>
          </div>
        </div>

        <hr className='hr-line' size='1'/>
        <div className='folder-container'><FolderDetails/></div>

        <DataTable
          columns={columns}
          data={records}
          selectableRows
          fixedHeader
          pagination>
              
             

          </DataTable>
        
    </div>
    )
}

    
return(
    <>
    <PrdouctAndSearchBar/>
    
    </>
)
}

export default SearchBar