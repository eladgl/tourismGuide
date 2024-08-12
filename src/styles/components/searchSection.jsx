import styled from "styled-components";

import { Input } from "../common/input";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  border: 1px solid var(--primary);
  box-shadow: 1px 0px 2px 1px var(--primary);
  border-top-right-radius: 20px;
  height: fit-content;

  @media (max-width: 900px) {
    margin: auto;
  }
`;

export const Dropdown = styled.select`
  padding: 8px;
  border-radius: 4px;
  width: 100%;
  background-color: var(--background);
  color: var(--text);
  border: 1px solid var(--primary);
  box-shadow: 1px 0px 2px 1px var(--primary);
`;

export const SearchInput = styled(Input)`
  padding: 8px;
  margin-bottom: 10px;
  max-width: 400px;
`;

export const DateInput = styled(SearchInput)`
  text-align: left;

  &::-webkit-calendar-picker-indicator {
    background-color: var(--primary);
    border-radius: 50%;
    display: block;
    position: absolute;
    cursor: pointer;
    z-index: 2;
    opacity: 1;
  }
`;
