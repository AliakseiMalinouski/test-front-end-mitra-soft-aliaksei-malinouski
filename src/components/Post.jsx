import React, { memo } from "react";
import { motion } from "framer-motion";

export const Post = memo(({name, email, body}) => {
    return (
        <motion.div>
            {name}
        </motion.div>
    )
})