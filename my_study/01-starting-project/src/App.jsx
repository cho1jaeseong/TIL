
import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data';




function App() {
  const handleClick = (event) => {
    setvalue(event)

  }
  const [value, setvalue] = useState()
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
            <TabButton isSelected={value ==="components"} onSelect={() => handleClick("components")} label="Components" />
            <TabButton isSelected={value ==="jsx"} onSelect={() => handleClick("jsx")} label="JSX" />
            <TabButton isSelected={value ==="props"} onSelect={() => handleClick("props")} label="Props" />
            <TabButton isSelected={value ==="state"} onSelect={() => handleClick("state")} label="State" />
          </menu>
          {!value ? <p>Please select a topic</p> : <div id="tab-content">
            <h3>{EXAMPLES[value].title}</h3>
            <p>{EXAMPLES[value].description}</p>
            <pre>
              <code>
                {EXAMPLES[value].code}
              </code>
            </pre>
          </div>}
        </section>
      </main>
    </div>
  );
}

export default App;