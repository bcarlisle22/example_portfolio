import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    useEffect(() => {
        if(!isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen])

  return (
    <>
    <nav className="fixed right-0 top-0 z-30 p-4">
        <button onclick={toggleMenu} className="rounded-md p-2">
            {isOpen ? (
                <FaTimes className="h-6 w-6" /> //error: react-icons does not provide export named FaTimes
            ) :(
                <FaBars className="h-6 w-6" /> //error: react-icons does not provide export named FaBars
            )}
        </button>
    </nav>
    </>
  )
}

export default Navbar