import React, { useState } from "react";

const DetailCourse = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] =useState([]);
  const [score,setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showResults, setShowResults] = useState(false);
  // const [ submitted, setSubmitted] = useState(false);


  
  const handleSubmit = ()=>{
    setShowResults(true);
  };

  // const showResults = submitted || currentQuestion === totalQuestions;

  const quizData = [
    {
      question: 'what is the capital city of France?',
      options: ['Berlin', 'Paris', 'Kigali', 'Madrid', 'Rome'],
      correctAnswer: 'Paris',
    },
    {
      question: "Which planet is know as the Red Planet?",
      options:['Earth', 'Mars', 'Jupter', 'Venus'],
      correctAnswer: 'Mars',
    },
    {
      question: "Which language is popular in East Africa?",
      options: ['kinyarwanda', 'kinyankore', 'swahili', 'english'],
      correctAnswer: 'kinyankore',
    }
    
  ];
  
  const handleOptionSelect = (option)=>{
    const newSelectedOptions = [...selectedOptions];
    const optionIndex = newSelectedOptions.indexOf(option);

    if(optionIndex === -1){
      newSelectedOptions.push(option);
    } else{
      newSelectedOptions.splice(optionIndex, 1);
    }

    setSelectedOptions(newSelectedOptions);
  };

  const goToNextQuestion = () => {
    const selectedSet = new Set(selectedOptions);
    const correctSet = new Set([quizData[currentQuestion].correctAnswer]); // Wrap the correct answer in an array
  
    const isCorrect =
      selectedSet.size === correctSet.size &&
      [...selectedSet].every((option) => correctSet.has(option));
  
    setUserAnswers([
      ...userAnswers,
      { question: currentQuestion, selectedOptions, isCorrect },
    ]);
  
    if (isCorrect) {
      setScore(score + 1);
    }
  
    setSelectedOptions([]);
    setCurrentQuestion(currentQuestion + 1);
  };
  

  

  const goToPreviousQuestion = ()=>{
    setCurrentQuestion(currentQuestion -1);
  };
  
  const restartQuiz = ()=>{
    setQuizStarted(false);
    setCurrentQuestion(0);
    setUserAnswers([]);
    setScore(0);
    setSelectedOptions([]);
  };

  const totalQuestions = quizData.length;






  const modules = [
    {
      id: 1,
      title: "Introduction to React",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, tempore nulla! Officia alias quibusdam quos at! Repudiandae natus sint ex, distinctio, necessitatibus harum rem, aperiam maiores fugit dicta temporibus officia.",
    },
    {
      id: 2,
      title: "State and Props",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, tempore nulla! Officia alias quibusdam quos at! Repudiandae natus sint ex, distinctio, necessitatibus harum rem, aperiam maiores fugit dicta temporibus officia.",
    },
    {
      id: 3,
      title: "Hooks and Lifecycle",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, tempore nulla! Officia alias quibusdam quos at! Repudiandae natus sint ex, distinctio, necessitatibus harum rem, aperiam maiores fugit dicta temporibus officia.",
    },
  ];

  

  const [selectedModule, setSelectedModule] = useState(0);
  const handleModuleSelect = (moduleIndex) => {
    setSelectedModule(moduleIndex);
  };


  return (
    <div className="flex w-full h-full lg:h-[80rem] pt-[7rem] pl-14">
      {/* Left Sidebar */}
      <div className="w-1/4 overflow-y-auto border-r">
        {/* Module List */}
        <div className="p-4">
          {modules.map((module, index) => (
            <div
              key={module.id}
              className={`mb-4 cursor-pointer ${
                selectedModule === index && "bg-gray-200"
              }`}
              onClick={() => handleModuleSelect(index)}
            >
              <h2 className="text-lg font-semibold">{module.title}</h2>
              <a href="#" className="text-blue-500 mt-2 block">
                Access Module
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Top Header */}
        <div className="mb-4 flex items-center">
          {/* Learner's Avatar */}
          <img
            src="learner-avatar.jpg"
            alt="Avatar"
            className="w-10 h-10 rounded-full mr-2"
          />
          {/* Learner's Name */}
          <div>
            <h1 className="text-lg font-semibold">John Doe</h1>
            <p className="text-gray-500">Score: </p>
          </div>
        </div>

        {/* Main Section */}
        <div>
          {/* Module Title */}
          <h2 className="text-xl font-semibold mb-2">
            {modules[selectedModule].title}
          </h2>
          {/* Module Description */}
          <p className="text-gray-600 mb-4">
            {modules[selectedModule].description}
          </p>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-1/4 border-l">
        {/* Quiz */}
        <div className="quiz">
      {!quizStarted ? (
        <button 
        onClick={() => setQuizStarted(true)}
        className="bg-blue-500 text-white py-2 px-4 rounded"
        >Start Quiz</button>
      ) : currentQuestion < totalQuestions ? (
        <div>
          <h1 
            className="text-xl  mb-4"> 
            {quizData[currentQuestion].question}
          </h1>
          <ul className=" pl-4 mb-4">
            {quizData[currentQuestion].options.map((option, index) => (
              <li key={index} className="mb-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value={option}
                    onChange={() => handleOptionSelect(option)}
                    checked={selectedOptions.indexOf(option) !== -1}
                    className="mr-2"
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button 
            className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
            onClick={goToPreviousQuestion} 
            disabled={currentQuestion === 0}>
            Previous
          </button>
          <button 
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={goToNextQuestion} >
            Next
          </button>
        </div>
      ) : (
        <div className="quiz-completed">
          <h1 className="text-2xl font-bold mb-4">Quiz Completed!</h1>
          {showResults && (
            <>
            <p
          className="mb-4"
          >
            Your Score: {score} out of {totalQuestions}
          </p>
          <button 
            onClick={restartQuiz}
            className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
            style={{backgroundC: '#CB8342'}}
          >Restart Quiz
          </button>
            </>
          )}
          {!showResults && (
            <button 
            onClick={handleSubmit}
            className="bg-green-500 text-white py-2 px-4 rounded"
            style={{backgroundColor: '#CB8342'}}
          >
            Submit
          </button>
          )}
          
          
        </div>
      )}
    </div>
    {/* display quiz results */}
    {showResults && (
      <div className="bg-green-200 p-4 rounded- mt-2">
        <h2 className="text-xl font-bold mb-2">Quiz Results</h2>
        <p>Your score: {score} out of {totalQuestions}</p>
      </div>
    )}
      </div>
    </div>
  );
};

export default DetailCourse;