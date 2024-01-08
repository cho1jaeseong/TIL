
import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data';




function App() {
  const handleClick = (event) =>{
    setvalue(event)

}
  const [value, setvalue] = useState("")
  return (

    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => <CoreConcept key={concept.title} title={concept.title} description={concept.description} image={concept.image} />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>handleClick("components")} label="Components" /> 
            <TabButton onSelect={()=>handleClick("jsx")} label="JSX" /> 
            <TabButton onSelect={()=>handleClick("props")} label="Props" /> 
            <TabButton onSelect={()=>handleClick("state")} label="State" /> 
          </menu>
        </section>
        Dynamic Content
        <div>
          {value}
          <h1>{EXAMPLES[value].title}</h1>
          <h2>{EXAMPLES[value].description}</h2>
        </div>
      </main>
    </div>
  );
}

export default App;