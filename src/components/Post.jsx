import React, { memo } from "react";
import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Post.module.css';
import { postsEvents } from "../events";

export const Post = memo(({postId, data, title}) => {

    const goToDetails = () => {
        postsEvents.emit('goToPostDetails', postId);
    }

    return (
        <motion.div className={styles.Post}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cutewallpaper.org/21/wallpaper-for-websites/45+-Wallpaper-Website-on-WallpaperSafari.gif" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                Post number {postId}
                </Card.Text>
                <Button variant="primary" onClick={goToDetails}>Go to Post details</Button>
            </Card.Body>
            </Card>
        </motion.div>
    )
})