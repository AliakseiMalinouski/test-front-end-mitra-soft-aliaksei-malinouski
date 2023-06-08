import React, { useEffect, useMemo, useState } from "react";
import classes from './Header.module.css';
import { useDispatch, useSelector } from "react-redux";
import { linkThunk } from "../Redux/Header/linkThunk";
import { Link } from "./Link";
import { Logo } from "./Logo";
import {AnimatePresence} from 'framer-motion';
import { Drawer } from "./Drawer";
import { HamburgetButton } from "./HamburgerButton";
import { postsEvents } from "../events";
import classesDrawer from './Drawer.module.css';

export const Header = () => {

    let dispatch = useDispatch();

    const links = useSelector(state => state.headerLinks.links);

    const [drawerState, setDrawerState] = useState(false);

    useEffect(() => {
        if(!links.length) dispatch(linkThunk);
    }, [links, dispatch]);

    useEffect(() => {
        postsEvents.addListener('openMenu', openMenuParent);
        return () => {
            postsEvents.removeListener('openMenu', openMenuParent);
        }
    });

    useEffect(() =>{
        let body = document.body;
        if(drawerState) {
            body.classList.add('OverFlow');
        } else {
            body.classList.remove('OverFlow');
        }
    }, [drawerState]);

    const openMenuParent = () => setDrawerState(true);

    let linksMemo = useMemo(() => links && links.map(({id, link, title}) => <Link key={id} link={link} title={title}/>), [links]);

    return (
        <div className={classes.HeaderContent}>
            <Logo src='https://i.ibb.co/5GJ2yVS/paper-plane.png' alt='Logo'/>
            {
            !drawerState && <HamburgetButton src="https://i.ibb.co/JHPX9LY/icons8-menu-48.png" alt='Menu'/>
            }
            <AnimatePresence>
                {
                    drawerState && <Drawer>
                        <img src="https://i.ibb.co/K9Pj8wN/close.png" alt="Cross Close" className={classesDrawer.CrossClose}
                        onClick={() => setDrawerState(false)}
                        />
                        <ul className={classes.HeaderLinks}>{linksMemo}</ul>
                        <div className={classesDrawer.MyInformation}>
                            <img src="https://i.ibb.co/zmWSvn5/1706-oooo-plus.png" alt="Avatar"/>
                            <h3>Aliaksei</h3>
                            <p>aleksymalinowski21@gmail.com</p>
                        </div>
                    </Drawer>
                }
            </AnimatePresence>
        </div>
    )
}