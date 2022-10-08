import { Transition } from 'react-transition-group';
import { useRef,useState } from 'react';
import "./App.css"
const duration =2000; 

// eslint-disable-next-line no-unused-vars


// eslint-disable-next-line no-unused-vars
const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};


export default function App() {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);
  return (
    <div>
      <Transition nodeRef={nodeRef} in={inProp} timeout={duration}
      mountOnEnter
      >
        {state=>{
          <div ref={nodeRef} className={state}>
            I'm a fade Transition!
          </div>
        }}
        {/* {state => (
          <div ref={nodeRef} style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            I'm a fade Transition!
          </div>
        )}  */}
      </Transition>
      <button onClick={() => setInProp(!inProp)}>
        resove 
      </button>
    </div>
  );
}