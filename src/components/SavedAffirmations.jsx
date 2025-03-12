import React from "react";

const SavedAffirmations = () => {
    const savedAffirmations = JSON.parse(localStorage.getItem("savedAffirmations")) || [];