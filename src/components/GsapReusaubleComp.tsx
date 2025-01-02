import React, { useEffect, useRef } from 'react';

type GsapProElementProps = {
    text:string;
    duration:number;
    stagger:number;
    className:string;
    as:HTMLElement;
}

const GsapReusaubleComp:React.FC<GsapProElementProps> = ({text, duration, stagger, className, as: Element = "span"}) => {
    const containerRef = useRef<HTMLElement | null>(null);

    useEffect(()=>{
        const container = containerRef.current;

        if(!container) return
        
    }, [])




  return (
    <div>
      
    </div>
  );
}

export default GsapReusaubleComp;
