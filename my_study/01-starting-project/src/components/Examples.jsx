import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
    const handleClick = (event) => {
        setvalue(event)

    }
    const [value, setvalue] = useState()
    return (
        <Section title="Examples" id="examples">
            <Tabs ButtonsContainer="menu"
             buttons={
                <>
                    <TabButton isSelected={value === "components"} onClick={() => handleClick("components")} label="Components" />
                    <TabButton isSelected={value === "jsx"} onClick={() => handleClick("jsx")} label="JSX" />
                    <TabButton isSelected={value === "props"} onClick={() => handleClick("props")} label="Props" />
                    <TabButton isSelected={value === "state"} onClick={() => handleClick("state")} label="State" />
                </>}>
                {!value ? <p>Please select a topic</p> : <div id="tab-content">
                    <h3>{EXAMPLES[value].title}</h3>
                    <p>{EXAMPLES[value].description}</p>
                    <pre>
                        <code>
                            {EXAMPLES[value].code}
                        </code>
                    </pre>
                </div>}
                </Tabs>


        </Section>
    )
}