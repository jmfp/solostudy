import React from 'react'

import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import Button from './Button'

const dropIn = {
    //custom animation states
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    },
    exit: {
        y: "100vh",
        opacity: 0
    }
}

export default function Modal({handleClose, text, children}) {
  return (
    <Backdrop onClick={handleClose}>
        <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <p>{text}</p>
            {children}
        </motion.div>
    </Backdrop>
  )
}