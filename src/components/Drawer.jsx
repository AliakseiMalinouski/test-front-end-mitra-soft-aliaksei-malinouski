import React, {memo} from "react";
import { motion } from "framer-motion";
import classes from './Drawer.module.css';

export const Drawer = memo(({children}) => {
    return <motion.div 
    className={classes.Drawer} 
    initial={{
    right: '-150px',
    opacity: 0
    }}
    animate={{
        opacity: 1,
        right: '0px',
        transition: {
            delay: 0.2,
            duration: 0.4
        }
    }}
    exit={{
        opacity: 0,
        right: '-150px',
        transition: {
            duration: 0.4
        }
    }}>{children}</motion.div>
})