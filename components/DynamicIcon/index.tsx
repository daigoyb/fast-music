import React, {
    CSSProperties,
    Suspense,
    SVGAttributes,
    lazy,
  } from "react";
  import { IconContext } from "react-icons";
  
  interface IconProps {
    icon: string;
    lib: string;
    color?: string;
    size?: string;
    className?: string;
    style?: CSSProperties;
    attr?: SVGAttributes<SVGElement>;
    fallback: JSX.Element | null;
  }
  
  const DynamicIcon: React.FC<IconProps> = ({ ...props }) => {
  
    if (!props.lib || !props.icon) return <div>Could Not Find Icon</div>;
  
    const lib = props.lib.toLowerCase();
    const path = `react-icons/${lib}`;
    const Icon = lazy(async () => {
      const module = await import(path);
      return { default: module[props.icon] };
    });
  
    const value: IconContext = {
      color: props.color,
      size: props.size,
      className: props.className,
      style: props.style,
      attr: props.attr
    };


  
    return (
      <Suspense fallback={props.fallback}>
        <IconContext.Provider value={value}>
          <Icon />
        </IconContext.Provider>
      </Suspense>
    );
  };
  
  export default DynamicIcon;
  