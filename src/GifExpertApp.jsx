import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        //Valorant
        // setCategories([...categories, 'Valorant']);
        /*  setCategories([newCategory, ...categories]); */
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }
    return (

        <>
            {/* Title */}
            <h1>GifExpertApp</h1>

            {/* Search Input*/}
            <AddCategory
                /* setCategories={setCategories} */
                onNewCategory={value => onAddCategory(value)}
                   /*  currentCategories= {categories} */>

            </AddCategory>

            {/* GifGrid */}
            {/*  <button onClick={onAddCategory}>Agregar</button> */}
            <ol>
                {
                    categories.map(category =>
                        <GifGrid 
                        >

                        </GifGrid>
                        /* return (<li key={category}>{category}</li>) */
                    )
                }
            </ol>
            {/* Gif Item */}
        </>
    )
}

