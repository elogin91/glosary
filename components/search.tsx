"use client";
import React, { useState, useRef, useEffect } from "react";

export const Search = () => {
    // const [isWordSent, setWordSent] = useState<boolean>(false);
    // const formRef = useRef<HTMLFormElement | null>(null);

    // async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    //     e.preventDefault();

    //     const target = e.currentTarget;

    //     const tittle = target.elements.namedItem("tittle") as HTMLInputElement;
    //     const tags = target.elements.namedItem('tags') as HTMLInputElement;
    //     const description = target.elements.namedItem('description') as HTMLInputElement;
        
    //     const data = {
    //         tittle: tittle.value,
    //         tags: tags.value,
    //         description: description.value,
    //     }

    //     try {
    //         const response = await fetch('/api/word', {
    //             method: "POST",
    //             body: JSON.stringify(data),
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         })
    //         if (!response.ok) {
    //             throw new Error('HTTP ERROR! status: ' + response.status)
    //         }
    //         setWordSent(true);
    //     }
    //     catch (error: any) {
    //         console.log("There was a problem with the fetch operation" + error.mesagge);
    //     }
    // }

    // useEffect(() => {
    //     let timeout: NodeJS.Timeout;
    //     if(isWordSent && formRef) {
    //         formRef.current?.reset();
    //         setTimeout(()=> {
    //             setWordSent(false);
    //         }, 9000)
    //     }
    //     return () => {
    //         clearTimeout(timeout)
    //     }
    // }, [isWordSent])

    return (
        <form  className="p-10" ref={""}>
            <div className="m-4 ">
                <label className="label-form" htmlFor='tittle'>
                    Tittle
                </label>
                <input id='tittle' name='tittle' type="text" className="input-form" required minLength={3} maxLength={100} />
            </div>

            <button type="submit" className="button-form">Search</button>
        </form>
    )
}