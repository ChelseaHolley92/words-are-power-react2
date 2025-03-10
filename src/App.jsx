import React, { useState, useEffect } from 'react';
import Footer from './components/Footer.jsx';
import Header from './components/Header';
import AffirmationBox from './components/AffirmationBox';
import Button from './components/Button.jsx';
import CategoryDropdown from './components/CategoryDropdown';
import NameInput from './components/NameInput';
import  './App.css';


const affirmations = [
  { text: "You are capable of amazing things.", category: "confidence" },
  { text: "Gratitude brings abundance.", category: "gratitude" },
  { text: "Every step forward is progress.", category: "motivation" },
  { text: "Your potential is endless.", category: "confidence" },
  { text: "Kindness creates harmony.", category: "motivation" },
  { text: "You will be successful.", category: "career" },
  { text: "You are a money magnet.", category: "career" },
  { text: "You are loved.", category: "love" },
  { text: "You are appreciated.", category: "love" }
]; 

const categories = ["All", "Confidence", "Gratitide", "Motivation", "Career", "Love"];

const App = () => {
   const [selectedCategory, setSelectedCategory] = useState("All");
   const [currentAffirmation, setCurrentAffirmation] = useState("");
   const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
   const [savedAffirmations, setSavedAffirmation] = useState([]);

   const handleSaveName =(name) => {
    setUserName(name);
    localStorage.setItem("userName", name);
   };

   useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedAffirmations")) || [];
    console.log("Saved Affirmations Retrieved:", saved);
    setSavedAffirmation(saved);
   }, []);

    const handleSaveAffirmation = () => {
      console.log("Saving affirmation:", currentAffirmation);
      if (!currentAffirmation || currentAffirmation.includes("No affirmation available")) {
        console.log("No valid affirmation to save!");

          const updatedAffirmations = [...savedAffirmations, currentAffirmation];
          console.log("Updated Saved Affirmations:", updatedAffirmations);

        setSavedAffirmation(updatedAffirmations);
        localStorage.setItem("savedAffirmations", JSON.stringify(updatedAffirmations));

        console.log("Saved Affirmations:", updatedAffirmations);

         alert("Affirmation saved!");
      } else {
        console.log("No affirmation to save!")
      }
    };
    
            
   const handleGenerateAffirmation = () => {
    console.log("Generating new affirmation...");

    const filteredAffirmations = selectedCategory === "All"
    ? affirmations
    : affirmations.filter((a) => a.category.toLowerCase() === selectedCategory.toLowerCase());

      console.log("Filtered Affirmations:", filteredAffirmations);

      if (filteredAffirmations.length === 0) {
      setCurrentAffirmation(`${userName} , No affirmations available for this category `);
                 return;
            }
            const randomIndex = Math.floor(Math.random() * filteredAffirmations.length);
            setCurrentAffirmation( `${userName} , ${filteredAffirmations[randomIndex].text}`);
          };

          console.log("New Affirmation:", newAffirmation);

          setCurrentAffirmation(newAffirmation);

          const handleCategoryChange = (event) => {
            setSelectedCategory(event.target.value);
          };
                    
               return (
              <div className="app-container">
                <Header />
                <NameInput onSave={handleSaveName} />
                <AffirmationBox affirmation={currentAffirmation} />
                <Button onClick={handleSaveAffirmation} text="Save Affirmation" />
                <CategoryDropdown categories={categories} onSelect={handleCategoryChange} />
                <Footer />
                

                <div className="saved-affirmations">
                  <h2>Saved Affirmations</h2>
                  <ul>
                    {savedAffirmations.length > 0? (
                    savedAffirmations.map((affirmation, index) => (
                      <li key={index}>{affirmation.text}</li>
                    ))
                  ) : (
                    <p>No saved affirmations yet.</p>
                  )}
                  </ul>

                  <Footer />
                </div>
              </div>
            );
};  
                    
          
        







export default App;

        

            
  
            
        
