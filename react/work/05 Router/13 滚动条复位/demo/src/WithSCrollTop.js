import React, { useEffect } from 'react';

const WithSCrollTop = (Com) => {
  
// console.log(Com,123);

    return function WithSCrollTops  (props) {
        useEffect(() => {
            window.scrollTo(0, 0)
        }, [])
        return <Com {...props}></Com>
    }
};
export default WithSCrollTop;