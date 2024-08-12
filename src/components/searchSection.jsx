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
  const initialState = searchFields.reduce((state, field) => {
    state[field.stateKey] = "";
    return state;
  }, {});

  const [searchState, setSearchState] = useState(initialState);

  const handleChange = (key, value) => {
    setSearchState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

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
