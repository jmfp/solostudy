import React from 'react'

import { motion } from 'framer-motion'
import Backdrop from './Backdrop'

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

export default function Modal({handleClose, text}) {
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

        </motion.div>
        <motion.button
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        className='round-button-static'>save</motion.button>
    </Backdrop>
  )
}
