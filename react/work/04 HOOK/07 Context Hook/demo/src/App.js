import React, {  useContext } from 'react';

const ctx = React.createContext()

function Text() {
  const value = useContext(ctx)
  return (
    <>
      {value}
    </>
  )

}
const App = () => {

  return (
    <div>
      <ctx.Provider value="abc">
        <Text />
      </ctx.Provider>

    </div>
  );
};

export default App;



