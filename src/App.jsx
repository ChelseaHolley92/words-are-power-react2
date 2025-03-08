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
   const [savedAffirmations, setSavedAffrimations] = useState([]);

   useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedAffirmations")) || [];
    setSavedAffrimations(saved);
   }, []);
   
   return (
    <div>
      <h1>Affirmation App</h1>
    </div>
   );
  };



   
const handleSaveAffirmation = () => {
  if (currentAffirmation) {
    const updatedAffirmations = [...savedAffirmations, currentAffirmation];
    setSavedAffrimations(updatedAffirmations);
    localStorage.setItem("savedAffirmations", JSON.stringify(updatedAffirmations));
    alert("Affirmation saved!");
  } else {
    alert("No affirmation to save!");
  }

     const handleSaveName =(name) => {
      setUserName(name);
      localStorage.setItem("userName", name);
     };
      
   const handleGenerateAffirmation = () => {
    console.log("Selected Category:", selectedCategory);

    const filteredAffirmations = selectedCategory === "All"
    ? affirmations
    : affirmations.filter((a) => a.category.toLowerCase() === selectedCategory.toLowerCase());

      if (filteredAffirmations.length === 0) {
      setCurrentAffirmation(`${userName} , No affirmations available for this category `);
                 return;
            }
            const randomIndex = Math.floor(Math.random() * filteredAffirmations.length);
            setCurrentAffirmation( `${userName} , ${filteredAffirmations[randomIndex].text}`);
          };

          const handleCategoryChange = (event) => {
            setSelectedCategory(event.target.value);
          };
                    
               return (
              <div className="app-container">
                <Header />
                <NameInput onSave={handleSaveName} />
                <AffirmationBox affirmation={currentAffirmation} />
                <Button onClick={handleGenerateAffirmation} text="Get New Affirmation"/>
                <Button onClick={handleSaveAffirmation} text="Save Affirmation" />
                <CategoryDropdown categories={categories} onSelect={handleCategoryChange} />
                <Footer />

                <div className="saved-affirmations">
                  <h2>Saved Affirmations</h2>
                  <ul>
                    {savedAffirmations.map((affirmation, index) => (
                      <li key={index}>{affirmation}</li>
                    ))}
                  </ul>

                  <Footer />
                </div>
              </div>
            );
};  
                    
          
        







export default App;

        

            
  
            
        
