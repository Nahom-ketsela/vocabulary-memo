import React from 'react';
import LanguageSelector from './components/LanguageSelector';
import VocabularyForm from './components/VocabularyForm';
import VocabularyList from './components/VocabularyList';
import TestMode from './components/TestMode';
import ProgressBar from './components/ProgressBar';


function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <LanguageSelector />
      <VocabularyForm />
      <VocabularyList />
      <ProgressBar />
      <TestMode />


    </div>
  );
}

export default App;
