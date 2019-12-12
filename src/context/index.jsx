import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameContext = React.createContext();

function GameProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [games, setGames] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [navbarOpen, setNavbarOpen] = useState(false);

    useEffect(() => {
        const url = 'https://5df01d9802b2d90014e1bbba.mockapi.io/api/v1';
        setLoading(true);
        axios
            .get(`${url}/games`)
            .then(response => {
                setGames(response.data);
                setFeatured(featuredItems(response.data));
                setLoading(false);
            });
        return ()=> {}
    }, []);

    // filter to featured games
    function featuredItems(game) {
        return game.filter(item => item.featured);
    }
    
    // Navbar drop down menu when in mobile mode
    function navbarToggler() {
        return !navbarOpen ? setNavbarOpen(true) : setNavbarOpen(false)
    }
    
    return (
        <GameContext.Provider value={{ 
            loading, 
            games, 
            featured, 
            navbarOpen,
            navbarToggler,
        }}>
            {children}
        </GameContext.Provider>
    );
}

export { GameProvider, GameContext, }



// class GameProvider extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             navbarOpen: false,
//             loading: true,
//             hostels: [],
//             featuredHostels: [],
//             groupedHostels: [],
//             type: 'Select All',
//             capacity: 1,
//             price: 0,
//             min: 0,
//             max: 0,
//             search: '',
//         }
//     }

//     componentDidMount() {
//         this.setItems(games);
//     }

//     setItems = (games) => {
//         // To gain access to the Hostel database 
//         const hostels = games.map(game => {
//             // gather all properties
//             const hostel = { ...game };
//             return hostel;
//         });
//         // to show featured hostels only on the home page
//         const featuredHostels = hostels.filter(hostel => hostel.featured);
//         const max = Math.max(...hostels.map(hostel => hostel.price));
//         // change state
//         this.setState({
//             hostels,
//             groupedHostels: hostels,
//             featuredHostels,
//             loading: false,
//             price: max,
//             max,
//         });
//     }

//     // Navbar drop down menu when in mobile mode
//     navbarToggleHandler = () => {
//         this.setState({
//             navbarOpen: !this.state.navbarOpen
//         });
//     }

//     // to access to a single page for each hostel selected
//     getHostel = (id) => {
//         const tempHostels = [...this.state.hostels];
//         const hostel = tempHostels.find(item => item.id === id);
//         return hostel;
//     }

//     // to search for the most preferred hostels based on its filter
//     changeHandler = (e) => {
//         const target = e.target;
//         this.setState({
//             [target.name]: target.type === 'checkbox' ? target.checked : target.value
//         },
//             this.filterHostels
//         );
//     }

//     // to get rid of duplicate words
//     getKey = (keys, value) => {
//         return [...new Set(keys.map(key => key[value]))];
//     }

//     filterHostels = () => {
//         const { hostels, type, breakfast, capacity, min, max, search, } = this.state;
//         // gather all hostels
//         let tempHostels = [...hostels];

//         // to filter based on the type of bed
//         if (type !== 'Select All') {
//             tempHostels = tempHostels.filter(hostel => hostel.type === type);
//         }

//         // to filter based on the number of guests
//         if (capacity !== 1) {
//             tempHostels = tempHostels.filter(hostel => hostel.capacity >= capacity);
//         }

//         // to filter based on price
//         tempHostels = tempHostels.filter(hostel => hostel.price >= min && hostel.price <= max);

//         // to filter based on breakfast
//         if (breakfast) {
//             tempHostels = tempHostels.filter(hostel => hostel.breakfast);
//         }

//         // to filter based on search 
//         if (search.length > 0) {
//             tempHostels = tempHostels.filter(hostel => {
//                 const tempSearch = search.toUpperCase();
//                 const tempCountry = hostel.country.toUpperCase().slice(0, search.length);
//                 if (tempSearch === tempCountry) {
//                     return hostel;
//                 }
//             });
//         }
//         // change the states
//         this.setState({
//             groupedHostels: tempHostels
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <GameContext.Provider value={{
//                     ...this.state,
//                     navbarToggleHandler: this.navbarToggleHandler,
//                     getHostel: this.getHostel,
//                     changeHandler: this.changeHandler,
//                     getKey: this.getKey,
//                 }}>
//                     {this.props.children}
//                 </GameContext.Provider>
//             </div>
//         );
//     }
// }

// export { GameProvider, GameConsumer, GameContext };