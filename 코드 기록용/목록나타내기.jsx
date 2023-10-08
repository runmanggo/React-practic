import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

export default function List() {
  const chemists = [];
  const others = [];

  people.forEach((person) => {
    if (person.profession === "chemist") {
      chemists.push(person);
    } else others.push(person);
  });

  // const chemists = people.filter((person) => person.profession === "chemist");
  // const others = people.filter((person) => person.profession !== "chemist");

  const listItems = (items) =>
    items.map((person) => (
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    ));

  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems(others)}</ul>
      <h1>chemist</h1>
      <ul>{listItems(chemists)}</ul>
    </article>
  );
}

// 다른 방법

export default function List() {
  const chemists = [];
  const others = [];

  const listItems = (person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  );

  people.forEach((person) => {
    if (person.profession === "chemist") {
      chemists.push(listItems(person));
    } else others.push(listItems(person));
  });

  return (
    <article>
      <h1>Scientists</h1>
      <ul>{others}</ul>
      <h1>chemist</h1>
      <ul>{chemists}</ul>
    </article>
  );
}

// reduce
export default function List() {
  const listItems = (person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  );


const{
  chemists,
  others
} = people.reduce((res,person)=>{
  if(person.profession ==="chemist") res.chemists.push(listItems(person))
  else res.others.push(listItems(person))
return res;
},{
  chemists:[],
  others:[]
})


  return (
    <article>
      <h1>Scientists</h1>
      <ul>{others}</ul>
      <h1>chemist</h1>
      <ul>{chemists}</ul>
    </article>
  );
}
