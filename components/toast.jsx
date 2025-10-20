"use client"
import React from "react";
import { useEffect, useState } from "react"

export default function Toast({message, onClose}) {
    if(!message) return null;
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);
        return () => clearTimeout(timer);
    }, [message]);
    

    return (
        <div className="fixed top-5 right-5 z-50 bg-green-500 text-white px-4 py-2 rounded shadow-lg animate-fadeIn">
            {message}
        </div>
    );
}
