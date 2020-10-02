import React, {Fragment} from 'react';
import Box from './Box';

const BoxContainer = () => {
  
    return (
        <Fragment>
            <Box backgroundColor="blue" />
			<Box backgroundColor="red" />
			<Box backgroundColor="green" />
        </Fragment>
    )
}

export default BoxContainer;
