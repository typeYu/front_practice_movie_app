// 2024.09.09 수정: 예전이랑 다른 점
//Routes 사용: Route 컴포넌트를 Routes로 감싸야
// element 속성: Route의 component 사용 안함, (  element={<Home />}와 element={<About />}  )
import React from "react";
import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import About from './routes/About.js';
import Home from './routes/Home.js';
import Navigation from "./components/Navigation.js";
// import Detail from "./routes/Detail.js";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/movie-detail" element={<Detail />} /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;


// import React from "react";
// // import axios from 'axios';
// import './App.css';
// import { HashRouter, Route } from "react-router-dom";
// import About from './routes/About.js'
// import Home from './routes/Home.js';
// import Navigation from "./components/Navigation.js";

// function App() {
//   return (
//     <HashRouter>
//       <Navigation />
//       <Route path="/" exact={true} component={Home} />
//       <Route path="/about" component={About}/>
//     </HashRouter>
//   )
// }

// export default App;


// class App extends React.Component {
//   state = {
//     isLoading: true,
//     movies: [],
//   };
//   getMovies = async () => {
//     const {
//       data: {
//         data: { movies },
//       },
//     } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
//     this.setState({ movies, isLoading: false })
//   }
//   componentDidMount() {
//     this.getMovies();
//   }
//   render() {
//     const { isLoading, movies } = this.state;
//     return (
//       <section className="container">
//         {isLoading ? (
//           <div className="loader">
//             <span className="loader__text">Loading...</span>
//           </div>
//         ) : (
//           <div className="movies">
//             {movies.map(movie => (
//               <Movie
//                 key={movie.id}
//                 id={movie.id}
//                 year={movie.year}
//                 title={movie.title}
//                 summary={movie.summary}
//                 poster={movie.medium_cover_image}
//                 genres={movie.genres}
//               />
//             ))}
//           </div>
//         )}
//       </section>
//     );
//   }
// }