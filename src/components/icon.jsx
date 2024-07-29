import styled from "styled-components";

export const IconWithColor = (color, type = "", src) => `
    backgroud: ${color};
    -webkit-mask-image: url('assets/icons/${type && type.toLowerCase()}.svg');
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center; 
    -webkit-mask-size: contain;
    ${src && `webkit-mask-image: url('${src}');`}
`;

const IconWithoutColor = (type = "", src) => {
  let iconUrl = "";
  if (type) iconUrl = `assets/icons/${type.toLowerCase()}.svg`;
  if (src) iconUrl = src;
  return `background: url('${iconUrl}') no-repeat center/contain;`;
};

const Icon = styled.span`
  position: ${({ position }) => position};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  visibility: ${({ visibility }) => visibility};
  width: ${({ width, size }) => width | size | 32}px;
  min-width: ${({ width, size }) => width | size | 32}px;
  height: ${({ height, size }) => height | size | 32}px;
  display: inline-block;
  vertical-align: middle;
  margin-right: ${({ marginRight }) => marginRight}px;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  cursor: ${(props) => (props.onClick ? "pointer" : "inherit")};
  transition: ${({ transition }) => transition || "unset"};
  ${(props) => (props.rotate ? `transform: rotate(${props.rotate});` : "")}
  ${(props) =>
    props.color
      ? IconWithColor(props.color, props.type, props.src)
      : IconWithoutColor(props.type, props.src)};
`;

export default Icon;
