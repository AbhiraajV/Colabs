import React, { useState, ReactElement, JSXElementConstructor } from "react";
import { useSpring, animated } from "react-spring";
import { useMeasure, usePrevious } from "../helpers";
import { Frame, Content, toggle } from "../styles";
import * as Icons from "../icons";
interface Props {
  children?: any;
  name: ReactElement;
  style?: any;
  open?: boolean;
}
function Tree({ children, name, style, open = false }: Props) {
  const [isOpen, setOpen] = useState(open);
  const prev = usePrevious(isOpen);
  let { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      height: isOpen ? "auto" : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
    },
  });
  const Icon =
    Icons[`${children ? (isOpen ? "Minus" : "Plus") : "Close"}SquareO`];
  return (
    <Frame>
      <Icon
        style={{ ...toggle, opacity: children ? 1 : 0.3 }}
        onClick={() => setOpen(!isOpen)}
      />
      <span style={{ verticalAlign: "middle", ...style }}>{name}</span>
      <Content
        style={{
          opacity,
          height: height.to((height) =>
            isOpen && prev === isOpen ? "auto" : height
          ),
        }}
      >
        <animated.div style={{ transform }}>{children}</animated.div>
      </Content>
    </Frame>
  );
}
export default Tree;
