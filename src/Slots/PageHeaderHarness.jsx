import React from 'react';

import  PageHeader from './PageHeader';
import Icon from './Icon';

const PageHeaderHarness = () => {
    
 
    return <div className="App">
      
     <h1>PageHeaderHarness</h1>

     <PageHeader content={<Icon />} />
   </div>
}

export default PageHeaderHarness;
