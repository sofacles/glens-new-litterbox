import React from 'react';

import  PageHeader from './PageHeader';
import Icon from './Icon';
import Title from './Title';
import Links from './Links';

const PageHeaderHarness = () => {
    
 
    return <div className="App">
      
     <h1>PageHeaderHarness</h1>

     <PageHeader iconSlot={<Icon />} titleSlot={<Title />} linksSlot={<Links linkData={
         [{href: "http://www.nytimes.com", text: "The Times", id: 1},
          {href: "www.washingtonpost.com", text: "The Post", id: 2}]
     }/>} />
   </div>
}

export default PageHeaderHarness;
