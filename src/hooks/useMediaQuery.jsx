import { useState,useEffect } from "react";

const useMediaQuery = (query) => {

    const [matches,setMatches] = useState(false);

    useEffect(() => {

        const media = window.matchMedia(query);
        if(media.matches !== matches){
            setMatches(media.matches);
        }

        const listener = () => setMatches(media.matches);
        window.addEventListener('resize',listener);
        return() => window.removeEventListener('resize',listener);

    } , [matches,query] );

    return matches;

}

export default useMediaQuery;

// useMediaQuery(query)
// A React custom hook that checks whether a specified media query is currently matched on the user's device.

// Parameters
// query (string): A valid media query string that will be evaluated against the user's device.
// Return Value
// matches (boolean): A state value indicating whether or not the specified media query matches the user's device.

// Usage

// import useMediaQuery from './useMediaQuery';

// function MyComponent() {
//   const isMobile = useMediaQuery('(max-width: 768px)');

//   return (
//     <div>
//       {isMobile ? <p>This is a mobile device</p> : <p>This is not a mobile device</p>}
//     </div>
//   );
// }

// In the example above, the useMediaQuery hook is used to check if the user's device is a mobile device,
// based on a specified media query. The isMobile state value will be true if the media query matches the device's width, and false otherwise.