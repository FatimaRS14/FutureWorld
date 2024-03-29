"use client"
import { useState } from 'react';
import styles from './Description.module.sass';
import Image from 'next/image';
import classNames from 'classnames/bind';

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,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'
export const Description = () => {
    const [hasBorder, setBorder] = useState(false);

    const handelClick = () => setBorder(!hasBorder);

    const cx = classNames.bind(styles);

    const buttonStyles = cx('Description__button', {
        'Description__button--border': hasBorder,
    });

    console.log(buttonStyles);

    return(

        <section className={styles.Description}>
            <button onClick={handelClick} className={buttonStyles}>
            <div className={styles.Description__imageContainer}>
            <Image
             src="/images/description.jpeg" 
             alt="products marketplace" 
             fill 

             placeholder='blur'
             blurDataURL={PLACEHOLDER_IMAGE}
             />
            </div>
            </button>
            
            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>
                <p>Future world: Your Gateway to Tomorrow's Tech! Dive into a world of cutting edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>
        </section>
        
    )
}
