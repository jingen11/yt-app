import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Enter Search Term:</label>
          <input
            type="text"
            name="first-name"
            placeholder="KSI Vs Logan Paul"
            value={term}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

// class SearchBar extends React.Component {
//   state = { term: "" };

//   onFormSubmit = (event) => {
//     event.preventDefault();

//     this.props.onSubmit(this.state.term);
//   };

//   onInputChange = (event) => {
//     this.setState({ term: event.target.value });
//   };

//   render() {
//     return (
//       <div className="ui segment">
//         <form onSubmit={this.onFormSubmit} className="ui form">
//           <div className="field">
//             <label>Enter Search Term:</label>
//             <input
//               type="text"
//               name="first-name"
//               placeholder="KSI Vs Logan Paul"
//               value={this.state.term}
//               onChange={this.onInputChange}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default SearchBar;
