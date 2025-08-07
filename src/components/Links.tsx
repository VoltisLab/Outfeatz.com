import React from 'react'

const Links = () => {
  return (
<div className="flex flex-row gap-5 items-center pt-12 justify-center">
    <div className="flex justify-center space-x-4">
        <a href="#"><img src="/google.png" alt="Google Play" className="h-12" /></a>
        </div>
    <div className="flex justify-center space-x-4">
        <a href="#"><img src="/apple.png" alt="App Store" className="h-12" /></a>
        </div>
    </div>
  )
}

export default Links