import { getImageUrl } from "./utils";
export  function Avatar({ person, size }) {
    return (<img className="avatar" src={getImageUrl(person)} alt={person.name} width={size} height={size} />)
}