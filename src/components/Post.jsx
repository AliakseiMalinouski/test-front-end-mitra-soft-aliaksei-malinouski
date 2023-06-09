import React, { memo } from "react";
import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Post.module.css';

export const Post = memo(({postId, data, title}) => {
    return (
        <motion.div className={styles.Post}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                Post number {postId}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </motion.div>
    )
})