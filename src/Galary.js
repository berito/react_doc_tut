// export function Profile() {
//     return (
//       <img
//         src="https://i.imgur.com/MK3eW3As.jpg"
//         alt="Katherine Johnson"
//       />
//     );
//   }
//  export default function Galary(){
//     return (
//       <div>
//         <h1>Amazing Scientists</h1>
//         <Profile/>
//         <Profile/>
//         <Profile />
//       </div>
//     )
//   }
import  './App.css';
import { getImageUrl } from "./utils";
function Resume({ resume }) {
  return (
    <ul>
      <li>
        <b>Profession: </b>
        {resume.profession}
      </li>
      <li>
        <b>Awards: {resume.awards} </b>
        {resume.awardDescription}
      </li>
      <li>
        <b>Discovered: </b>
        {resume.discovered}
      </li>
    </ul>
  );
}
export function Profile({ person, size }) {
  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={getImageUrl(person.imageId)}
        alt={person.name}
        width={size}
        height={size}
      />
      <Resume resume={person} />
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        person={{
          name: "Maria Skłodowska-Curie",
          imageId: "szV5sdG",
          profession: "physicist and chemist",
          awards: "4",
          awardDescription:
            " (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
          discovered: " polonium (element)"
        }}
      />
      <Profile
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
          profession: " geochemist",
          awards: "4",
          awardDescription: "(Miyake Prize for geochemistry, Tanaka Prize)",
          discovered: " a method for measuring carbon dioxide in seawater"
        }}
      />
    </div>
  );
}
