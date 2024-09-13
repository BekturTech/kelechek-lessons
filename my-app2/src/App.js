import UserCard from './components/UserCard/UserCard';
import './App.scss';

const users = [
  {name: "Steve Jobs", age: 24, followers: "100k", likes: "5k", photos: "12", location: "Kyrgystan", imgUrl: "https://images.unsplash.com/photo-1562038969-e85c13ecb2ac?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Satoshi Nakamato", age: 23, followers: "90k", likes: "60k", photos: "95", location: "Japan", imgUrl:"https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Brayan L0", age: 22, followers: "50k", likes: "15k", photos: "51", location: "USA", imgUrl: "https://plus.unsplash.com/premium_photo-1666265087928-fe19db9887ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
];

function App() {
  return <div className="App">
    
    {
      users.map((user, index) => (
        <UserCard key={index} userName={user.name} userAge={user.age} userFollowers={user.followers} userLikes={user.likes} userPhotos={user.photos} userLocation={user.location} userImg={user.imgUrl}/>
      ))
    }

  </div>
};

export default App;
