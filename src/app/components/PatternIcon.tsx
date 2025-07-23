import React from 'react';

const PatternIcon = ({
  size = 20,
  className = '',
  style = {},
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <rect
      x="0.32251"
      width="19.6761"
      height="20"
      fill="url(#pattern0_0_21)"
    />
    <defs>
      <pattern
        id="pattern0_0_21"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_0_21"
          transform="matrix(0.0635289 0 0 0.0625 -0.00823139 0)"
        />
      </pattern>
      <image
        id="image0_0_21"
        width="16"
        height="16"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABuUlEQVQ4EX3Ty6vPYRAG8HM4LCSxQykrJQuXXEpJCUVyyyWKiI2Uy0JsLGzsCJ0FG4nFQSnKbeeeS7kkSVFs/RUf7/M789URzq9+vd933pnnmXlmpq/vHz+MxZjuCf2xdfdRzy6wQKZiOgYS1L39F6BzwGY8whu8xjPsHRUE48rhFD43gOUdExYV2GD59HdvvXNE8JrG/hETsQS3cRerMB5PcLBAhjWJQGXYhp9Yh7n4jq3YgG9Yj004+ZcmGGwO77C4wK53THXfgof1nWzeYkXuUXY7XkXAGOOIl63mtY39PW5iTrGfwZHKMlnND8CdMizFV+zC7iZkSgrbWfyodi7DB+xstj0YCkCESb/P4Whldbopf68EnYcwX6u3jbiBGSklAFF5JVbjU5V0GDuaqAeaLvernC+NPcGZiROYFt0CsA+PR+gx1B4vtawuYkEBLMT5Yj5WvsdxOd8BuVqlzMaE5jylZuECbpVtctNjUmYG+6u1sxKcRUkHDjXRXrRynrduPK3Ju4KZSFsz0tErHXqQ7HrslUFv8wosE5d/t0Ah6Gw5u5GPfXikK3Dgt6GgK7M/5762slu8X5VVdrMn4rJ7AAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

export default PatternIcon;
