import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from './components/Footer.jsx';
import Header from './components/Header';
import AffirmationBox from './components/AffirmationBox';
import Button from './components/Button.jsx';
import CategoryDropdown from './components/CategoryDropdown';
import NameInput from './components/NameInPut.jsx';
import SavedAffirmations from './components/SavedAffirmations.jsx';
import NavBar from './components/NavBar.jsx';
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
   const [theme, setTheme] =useState(localStorage.getItem("theme") || "default");
   
   const toggleTheme = () => {
    const newTheme = theme === "default" ? "dark" : "default";
     setTheme(newTheme);
     localStorage.setItem("theme", newTheme);
   };

   useEffect(() => {
    document.body.className = theme;
     const saved = JSON.parse(localStorage.getItem("savedAffirmations")) || [];
     setSavedAffirmation(saved);
  }, [theme]);
   
  const handleSaveName =(name) => {
    setUserName(name);
    localStorage.setItem("userName", name);
   };

        const handleSaveAffirmation = () => {
       if (currentAffirmation)  {
          const updatedAffirmations = [...savedAffirmations, currentAffirmation];
          setSavedAffirmation(updatedAffirmations);
        localStorage.setItem("savedAffirmations", JSON.stringify(updatedAffirmations));
        alert("Affirmation saved!");
      } else {
        alert("No affirmation to save!");
      }
    };
             
   const handleGenerateAffirmation = () => {
    console.log("Generating new affirmation...");

    const filteredAffirmations = 
    selectedCategory === "All"
    ? affirmations
    : affirmations.filter((a) => a.category.toLowerCase() === selectedCategory.toLowerCase());
    
    console.log("Filtered Affirmations:", filteredAffirmations);

      if (filteredAffirmations.length === 0) {
      setCurrentAffirmation(`${userName} , No affirmations available for this category `);
      console.log("No affirmation available");
                 return;
            }

            const randomIndex = Math.floor(Math.random() * filteredAffirmations.length);
            console.log("Random Index:", randomIndex);

            let newAffirmationText = filteredAffirmations[randomIndex].text;

            console.log("New Affirmation Selected", newAffirmationText);

              let newAffirmation = `${userName} , ${newAffirmationText}`;
            console.log("Formatted Affirmation:", newAffirmation);

            setCurrentAffirmation(newAffirmation);
            console.log("Current Affirmation Updated in State:", newAffirmation);

          };

          const handleCategoryChange = (event) => {
            setSelectedCategory(event.target.value);
          };
               console.log("Applied Class", theme)     

               return (
                <Router>
              <div className={`app-container ${theme} `}>
                <NavBar/>
                <Routes>
                <Route path="/" element={
                  <>
                <button onClick={toggleTheme} className="theme-toggle-btn">
                  {theme === "default" ? "Dark Mode" : "default Mode"}
                </button>
                <Header />
                <NameInput onSave={handleSaveName} />
                <AffirmationBox affirmation={currentAffirmation}  /> 
                <Button onClick={handleGenerateAffirmation} text="Get New Affirmation" />
                <Button onClick={handleSaveAffirmation} text="Save Affirmation" />
                <CategoryDropdown categories={categories} onSelect={handleCategoryChange} />
                <Footer />
                </>
                } />
                <Route path="/saved" element={<SavedAffirmations />} />
                </Routes>

                
                   <div className="saved-affirmations">
                 
                  {savedAffirmations.length > 0? (
                     <ul>
                      {savedAffirmations.map((affirmation, index) => (
                      <li key={index}>{affirmation.text}</li>
                    ))}
                    </ul>
                  ) : (
                    <p>No saved affirmations yet.</p>
                  )}
                 </div>

                 

                  
                 
                 </div>
                 </Router>
            );
          };              

                    
             
export default App;

        

            
  
            
