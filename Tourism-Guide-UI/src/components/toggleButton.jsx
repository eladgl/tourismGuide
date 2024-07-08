import styled from "styled-components";

import SvgIcon from "./svgIcon";

const ToggleWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 28px;
  height: 16px;

  .icon {
    position: absolute;
    right: 0;
    transform: scale(0.5);
    margin-right: 10px;
  }
`;

const ToggleButton = ({ icons, onChange, checked }) => {
  return (
    <div className="toggleButton">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={onChange}
          checked={checked}
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
        <SvgIcon
          name={checked ? icons[0] : icons[1]}
          className="w-[20px] h-[20px] -translate-x-[32px]"
        />
      </label>
    </div>
  );
};

export default ToggleButton;
