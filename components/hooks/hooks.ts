import { useState } from 'react';

const useResizeWindow = () => {
  const [isOpen, setIsOpen] = useState(false);

  function resizeWindow(){
    if (window.innerWidth >= 768 && isOpen){
      setIsOpen(false)
    }
  }
  function handleClick(){
    setIsOpen(isOpen => !isOpen)
  }
  return {isOpen, resizeWindow, handleClick}
};

export default useResizeWindow