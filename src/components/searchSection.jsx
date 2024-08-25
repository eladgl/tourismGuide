import { useState } from "react";
import Label from "../components/label";
import Button from "../components/button";
import { SectionWrapper } from "../styles/pages/eventsPage";
import {
  DateInput,
  Wrapper,
  Dropdown,
  SearchInput,
} from "../styles/components/searchSection";

const SearchSection = ({ searchFields, onSearch }) => {
  // SearchSection is a stateful functional component that generates a dynamic search form
  // based on the `searchFields` provided, and triggers a search action when the button is clicked.

  // Props:
  // - searchFields (array): An array of objects that define the fields to be included in the search form.
  //   Each object should specify the `type`, `label`, `stateKey`, and any additional properties like `placeholder` or `options`.
  // - onSearch (function): A callback function that is called with the current state of all search fields when the search button is clicked.

  // Returns:
  // - A search form with dynamic fields based on the `searchFields` prop.
  // - A search button that triggers the `onSearch` function with the current state of all fields.

  // Initial state is created by reducing over the searchFields array, setting an empty string as the initial value for each field.
  const initialState = searchFields.reduce((state, field) => {
    state[field.stateKey] = "";
    return state;
  }, {});

  // State to hold the current values of the search fields.
  const [searchState, setSearchState] = useState(initialState);

  // Function to handle changes to any of the search fields. It updates the corresponding value in the searchState.
  const handleChange = (key, value) => {
    setSearchState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  // Function to render each type of search field based on its type.
  const renderField = (field) => {
    switch (field.type) {
      case "text":
        return (
          <div
            style={{ marginBottom: "10px", textAlign: "left" }}
            key={field.stateKey}
          >
            <Label>{field.label}</Label>
            <SearchInput
              type="text"
              placeholder={field.placeholder}
              value={searchState[field.stateKey]}
              onChange={(e) => handleChange(field.stateKey, e.target.value)}
            />
          </div>
        );
      case "select":
        return (
          <div
            style={{ marginBottom: "10px", textAlign: "left" }}
            key={field.stateKey}
          >
            <Label>{field.label}</Label>
            <Dropdown
              value={searchState[field.stateKey]}
              onChange={(e) => handleChange(field.stateKey, e.target.value)}
            >
              {field.options.map((option) => (
                <option key={option} value={option === "All" ? "" : option}>
                  {option}
                </option>
              ))}
            </Dropdown>
          </div>
        );
      case "date":
        return (
          <div
            style={{ marginBottom: "10px", textAlign: "left" }}
            key={field.stateKey}
          >
            <Label>{field.label}</Label>
            <DateInput
              type="date"
              value={searchState[field.stateKey]}
              onChange={(e) => handleChange(field.stateKey, e.target.value)}
              placeholder={field.label}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Wrapper>
      <SectionWrapper>
        <p className="text-2xl text-primary text-center mb-4">Search</p>
        {searchFields.map((field) => renderField(field))}
        <Button
          className="mt-4 px-4 py-2 bg-primary text-white rounded border-radius-[5px] w-full hover:bg-yellow-700 transition duration-300 inline-block"
          style={{
            maxWidth: "150px",
            overflowWrap: "break-word",
            textAlign: "center",
          }}
          onClick={() => onSearch(searchState)}
        >
          Search Package
        </Button>
      </SectionWrapper>
    </Wrapper>
  );
};

export default SearchSection;
