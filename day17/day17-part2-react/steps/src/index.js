import { createRoot } from "react-dom/client";
import Hero from "./components/hero";
import TwinButton from "./components/twinButton";

createRoot(document.getElementById("root")).render(<div>
    <Hero valtechTitle="Ironman"/>
    <Hero valtechTitle="Hulk"/>
    <Hero>
        <TwinButton/>
    </Hero>
    <Hero>
        <TwinButton/>
        <TwinButton/>
    </Hero>
    {/* <Hero>Ironman | Power : { 5 + 6 }
        <button> Click Me </button> 
        <ul>
            <li>List Item 1</li>
            <li>List Item 1</li>
            <li>List Item 1</li>
        </ul>
    </Hero>
    <Hero>Hulk | Power : { 5 + 6 }
        <button> Click Me </button> 
        <ul>
            <li>List Item 1</li>
            <li>List Item 1</li>
            <li>List Item 1</li>
        </ul>
    </Hero>
    <Hero>Thor | Power : { 5 + 6 }
        <button> Click Me </button> 
        <ul>
            <li>List Item 1</li>
            <li>List Item 1</li>
            <li>List Item 1</li>
        </ul>
    </Hero>
    <Hero>Spiderman | Power : { 5 + 6 }
        <button> Click Me </button> 
        <ul>
            <li>List Item 1</li>
            <li>List Item 1</li>
            <li>List Item 1</li>
        </ul>
    </Hero> */}
    <div>message <button>Click Me</button></div>
</div>)