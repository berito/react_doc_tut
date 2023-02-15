import { useState } from 'react';
import './App.css';
import Galary from './Galary';
import Card from './Card';
import { Avatar as NewAvatar } from './Avatar';
import { Profile as NewProfile } from './Galary';
import { people } from './data';
import { getImageUrlByPerson } from './utils';
import { sculptureList } from './data';
import Form from './components/interactive/form';
import Counter, { CounterQueue } from './components/interactive/Counter';
import FormSelect from './components/interactive/formselect';
import MovingDot from './components/interactive/movingdot';
import FormState from './components/interactive/formstate';
import FormImmer from './components/interactive/formimmer';
import Artist from './components/interactive/artists';
import ShapeEditor from './components/interactive/shapeeditor';
import CounterList from './components/interactive/counterlist';
import ArtistsList from './components/interactive/artistinsert';
import BucketList from './components/interactive/bucketlist';


//component using function
// function MyButton()
// {
//   return (<button>I' am a button</button>)
// }
//component using arrow function
const MyButton = () => {
  return (<button>I' am a button</button>)
}
//explaining displaying data
const Profile = () => {
  const user = {
    name: "Hedy Lamarr",
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90.
  }
  const handleClick = () => {
    alert("you cliked me")
  }
  return (
    <div>
      <h1>{user.name}</h1>
      {/* string concatination */}
      <img onClick={handleClick} className="avatar" src={user.imageUrl} alt={'photo of ' + user.name} style={{
        width: user.imageSize,
        height: user.imageSize
      }} />
    </div >
  )
}
// conditional rendering example 
const AdminPanel = () => {
  return <h1>This Admin panel</h1>
}
const LoginForm = () => {
  return <h1>This is Login Form </h1>
}
const Auth = () => {
  const isLoggedIn = true
  // conditonal using if 
  // let content;
  // if (isLoggedIn) {
  //   content = <AdminPanel />
  // } else {
  //   content = <LoginForm />
  // }
  // return <div>{content}</div>

  //conditional operator 
  //  return <div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>
  // conditional opertor with no else
  return <div>{isLoggedIn && <AdminPanel />}</div>
}

// rendering list of elements 
const ShoppingList = () => {
  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 }
  ]
  const listItems = products.map((product) => {
    return <li key={product.id} style={{
      color: product.isFruit ? 'magenta' : 'darkgreen'
    }}>{product.title}</li>
  })
  return (
    <div><ul>
      {listItems}
    </ul></div>

  )
}
// responding to evnts 
const MyButtonWithEvent = () => {
  const handleClick = () => {
    alert("you cliked me")
  }
  return <div>
    <button onClick={handleClick}>Click Me</button>
  </div>
}
//state
const MyButtonWithState = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  return <div>
    <button onClick={handleClick}>cliked {count} times</button>
  </div>
}
const MyButtonWithStatUpdateTogether = ({ count, onClick }) => {
  return <div>
    <button onClick={onClick}>cliked {count} times</button>
  </div>
}
//example using curly braces {} and for objects
function TodoList() {
  const person = {
    name: 'Gregorio Y.Zara',
    imageUrl: "https://i.imgur.com/7vQD0fPs.jpg",
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  }
  return (<div style={person.theme}>
    <h1>{person.name} to do list</h1>
    <img
      className="avatar"
      src={person.imageUrl}
      alt={person.name}
    />
    <ul>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  </div>
  )
}
// props
function Avatar({ person, size = 100 }) {
  const getImageUrl = (person) => {
    const imageUrl = 'https://i.imgur.com/' + person.imageId + '.jpg'
    console.log(imageUrl)
    return imageUrl
  }
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}
function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <button onClick={onPlayMovie}>Play Movie</button>
      <button onClick={onUploadImage}>Upload Image</button></div>)
}
function AlertButton({ message, children }) {
  return (<button onClick={() => alert(message)}>
    {children}
  </button>)
}
function ButtonWithEvent({ onClick, children }) {
  return <div><button onClick={onClick}>
    {children}
  </button>
  </div>

}
function EventBubble() {
  return (
    <div className="toolbar" onClick={e => alert(e.target)}>
      <button onClick={(e) => { e.stopPropagation(); alert('play movie clicked') }}>Play Movie</button>
      <button onClick={(e) => { e.stopPropagation(); alert('upload image clicked') }}>Upload Image</button>
    </div>
  )
}
function SignUp() {
  return (
    <form onSubmit={(e) => { e.preventDefault(); alert("page reloading") }}>
      <input />
      <button>send</button>
    </form>
  )
}
function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  const handlePlayMovie = () => {
    alert("Play Movie")
  }
  const handleUploadImage = () => {
    alert("Upload Image")
  }
  //conditionally returning JSX
  function Item({ name, isPacked }) {
    // let content;
    // if (isPacked) {
    //   content = <li className='item'>{name}✔</li>
    // } else {
    //   content = null
    // }
    return <li className='item'>{isPacked ? (<del>{name + '✔'}</del>) : name}</li>
  }
  function PackingList() {
    return (
      <section>
        <h3>Sally Ride's Packing List</h3>
        <ul>
          <Item isPacked={true} name="Space suit" />
          <Item isPacked={false} name="Helmet with a golden leaf" />
          <Item isPacked={true} name="Photo of Tam" />
        </ul>
      </section>
    )
  }
  // display lists
  function People() {
    const people = [
      {
        id: 1,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician'
      },
      {
        id: 2,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist'
      },
      {
        id: 3,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist'
      },
      {
        id: 4,
        name: 'Percy Lavon Julian',
        profession: 'chemist'
      },
      {
        id: 5,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist'
      }

    ];
    const listItems = people.map((item) => {
      return (<div key={item.id}>
        <li>Name:{item.name},Profession:{item.profession} </li>
      </div>)
    }
    )
    return listItems
  }
  //person list
  function PersonList() {
    // const chemists = people.filter(person => person.profession === 'chemist')
    const listItems = people.map(person => {
      return (<li key={person.id}>
        <img src={getImageUrlByPerson(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
        </p>
      </li>)
    })
    return <ul>{listItems}</ul>
  }
  // State 
  function ScriptureGalary() {
    return (
      <div className='page'>
        <ScriptureList />
        <ScriptureList />
      </div>)
  }
  function ScriptureList() {
    // let index = 0;
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    function handleClick() {
      setIndex(index + 1)
    }
    let scripture = sculptureList[index];
    return (
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => { handleClick() }}>Next</button>
        <h2><i>{scripture.name}</i> by {scripture.artist}</h2>
        <h3>({index + 1} of {sculptureList.length})</h3>
        <button onClick={() => setShowMore(!showMore)}>{showMore ? 'Hide' : 'Show'} details</button>
        <img src={scripture.url} alt={scripture.alt} />
        <p>{showMore && scripture.description}</p>
      </div>)

  }
  return (
    <div >
      <h1>Welcome to my app</h1>

      <Auth isLoggedIn />
      <Profile />
      <MyButton />
      <ShoppingList />
      <MyButtonWithEvent />
      <h1>Counters that update separately</h1>
      <MyButtonWithState />
      <MyButtonWithState />
      <h1>Counters that update together</h1>
      <MyButtonWithStatUpdateTogether count={count} onClick={handleClick} />
      <MyButtonWithStatUpdateTogether count={count} onClick={handleClick} />
      <Galary />
      {/* <NewProfile /> */}
      <TodoList />
      {/* passing props and calling function inside {} */}
      <h1>Passing props</h1>
      <Avatar person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }} />
      <Avatar person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh' }} size={50} />
      <Avatar person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} />
      <Card>
        <NewAvatar size={100}
          person={{
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2'
          }} />
        <TodoList />

      </Card>
      <Galary />
      <h1>Conditional returning JSX</h1>
      <PackingList />
      <h1>List Items</h1>
      {/* <People /> */}
      <PersonList />
      <h1>Adding Interactivity</h1>
      <Toolbar onPlayMovie={() => alert('play movie')} onUploadImage={() => alert('upload image')} />
      <AlertButton message="Play Movie">
        Play Movie
      </AlertButton>
      <AlertButton message="Upload Image">
        Upload Image
      </AlertButton>
      <ButtonWithEvent onPlayMovie={handlePlayMovie}>
        Play Movie
      </ButtonWithEvent>
      <ButtonWithEvent onUploadImage={handleUploadImage}>
        Upload Image
      </ButtonWithEvent>
      <EventBubble />
      <SignUp />
      <ScriptureGalary />
      <Form/>
      <Counter/>
      <FormSelect/>
      <CounterQueue/>
      <MovingDot/>
      <FormState/>
      <FormImmer/>
      <Artist/>
      <ShapeEditor/>
      <CounterList/>
      <ArtistsList/>
      <BucketList/>
    </div>
  );
}
export default App;
