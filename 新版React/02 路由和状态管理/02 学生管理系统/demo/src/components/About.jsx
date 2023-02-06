import { React, useEffect } from 'react'

export default function About() {
  useEffect(() => {
    setTimeout(() => {
      console.log(1);
    }, 0);
    new Promise(function executor(resolve) {
      console.log(2);
      for (var i = 0; i < 99999; i++) {
        i === 99998 && resolve()
      }
      console.log(3);
    }).then(function () {
      console.log(4);
    })
    console.log(5);
  }, [])



  return (
    <div>About</div>
  )
}
