import React from 'react';
// import './Styling/App.css'
import NavBar from './Navbar';
import gql from "graphql-tag";
import { graphql } from "react-apollo";


//Querying the database with gql
const InvestmentQuery = gql`
  {
    investments {
      id
      text
      complete
    }
  }
`;
function App() {
  return (
    <div>
      <NavBar />
    </div>
  )
}

export default graphql(InvestmentQuery)(App); //Higher order function to export through apollo


//Example of calling from the database

// class App extends React.Component {
//   render() {
//     const {
//       data: { loading, investments }
//     } = this.props;
//     if (loading) {
//       return null;
//     }
//     return (
//       <div style={{ display: 'flex' }}>
//         <div style={{ margin: 'auto', width: 400 }}>
//         {investments.map(investment => (
//           <Paper elevation={1}>
//           <div key={`${investment.id}-investment-item`}>
//             {investment.text}
//           </div>
//         </Paper>
//         ))}
//         </div>
//       </div>
//     );
//   }
// }


// export default graphql(InvestmentQuery)(App);