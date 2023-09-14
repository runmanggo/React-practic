import ConceptItem from "./ConceptItem";
import Card from "./Card";

function Concept(props) {
  return (
    <div>
      <ul id="concepts">
        <ConceptItem
          img={props.items[0].image}
          title={props.items[0].title}
          description={props.items[0].description}
        />
        <ConceptItem
          img={props.items[1].image}
          title={props.items[1].title}
          description={props.items[1].description}
        />
        <ConceptItem
          img={props.items[2].image}
          title={props.items[2].title}
          description={props.items[2].description}
        />
      </ul>
    </div>
  );
}
export default Concept;
