import StudentCard from "./StudentCard";

function App() {
  return (
    <div>
      <h1>Students</h1>

      <StudentCard 
        name="Hasna" 
        course="React" 
        place="Kerala" 
        status="Active" 
      />

      <StudentCard 
        name="Ayisha" 
        course="Python" 
        place="Kochi" 
        status="Inactive" 
      />

      <StudentCard 
        name="Fathima" 
        course="Data Science" 
        place="Malappuram" 
      />
    </div>
  );
}

export default App;