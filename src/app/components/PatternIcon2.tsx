import React from 'react';

const PatternIcon2 = ({
  width = 20,
  height = 20,
  className = '',
  fill = 'none', // fallback if pattern fails
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="0.32251"
      width="19.6761"
      height="20"
      fill="url(#pattern0_0_22)"
    />
    <defs>
      <pattern
        id="pattern0_0_22"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_0_22"
          transform="matrix(0.0635289 0 0 0.0625 -0.00823139 0)"
        />
      </pattern>
      <image
        id="image0_0_22"
        width="16"
        height="16"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACE0lEQVQ4EY2SwWsTURDGJ03iobeUIBVRKCqRCAqeWkFF/QNavRS8ebAH7bkqelg8CXopBasHDxW8BEGEXmX1oiLxoFDwWsQcpEESk+y+nW8yOpu3pq1BXFjmzb5vfjPv20f0+wmCYMwiM58FsCYitxuNxrh9I6Kcj6NDVuycOwrgA4B5AI+Y+Z5V1Ov1omlqtVo+DMNCpv9Dsw1LRGSRmZdtHcfxIYP1er0DXrh7imGeEaMomgLwTkQWAKyISBPAc2Y+7Zw7JiLXATxk5vOjoCkxSZKTzPxARK7FcXyEmWcAPBGRLoCXAOYAvGLmUwbJmqdAnwxH8+a12+2yiHxj5jMmFJElEblla/MkLc6cjqLoIICrAGY7nc6kc64K4KmIKPd53cFd7DPeM/MFK8z8S7u2Wq2JBFhNRBYc8/1EZAOs64DOGsgp3+Q+vwBwyXcdTJudQ1XneqpLtvl1a2s/q76JVSuWq2p6T3yhheFRVTVNVPUw2t3HvWZzWjvuhjq5OyiuFwMNxkINC/aqv3TbYETqidpKpvWHu6Pffy7q5mZpANjWbUfViCSoVvcsV06cW6kcn/Lbw1FH6LNPqahONP5l7+TbT+Wyfi5NyEapdNkENaL0pmbiv6J6gebz820i7RRzUbeQ0yhHr02sRLsN3MnIBEw0o0WCEoma8URr/wXwuMGfILqiRB+V6JkS7fOAf/rwC1roWLISp4SeAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

export default PatternIcon2;
