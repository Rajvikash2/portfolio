import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

const VERT = `#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;

const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;
out vec4 fragColor;

vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
      + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
  m = m * m; m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  float n = snoise(vec2(uv.x * 3.0, uv.y * 3.0 - uTime * 0.15)) * 0.5 + 0.5;

  vec3 color;
  float t = uv.x + n * 0.3;
  if (t < 0.5) {
    color = mix(uColorStops[0], uColorStops[1], t * 2.0);
  } else {
    color = mix(uColorStops[1], uColorStops[2], (t - 0.5) * 2.0);
  }

  float glow = smoothstep(0.0, 1.0, n) * uBlend;
  float fade = smoothstep(1.0, 0.35, uv.y);
  fragColor = vec4(color * glow * fade, glow * fade);
}
`;

function hexToVec3(hex) {
  const c = hex.replace('#', '');
  const r = parseInt(c.substring(0, 2), 16) / 255;
  const g = parseInt(c.substring(2, 4), 16) / 255;
  const b = parseInt(c.substring(4, 6), 16) / 255;
  return [r, g, b];
}

export default function Aurora({
  colorStops = ['#89F336', '#4d7a1f', '#1a1a1a'],
  amplitude = 1.0,
  blend = 0.6,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ alpha: true, premultipliedAlpha: true, antialias: true });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    container.appendChild(gl.canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uBlend: { value: blend },
        uResolution: { value: [container.offsetWidth, container.offsetHeight] },
        uColorStops: { value: colorStops.map(hexToVec3) },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      const w = container.offsetWidth, h = container.offsetHeight;
      renderer.setSize(w, h);
      program.uniforms.uResolution.value = [w, h];
    }
    window.addEventListener('resize', resize);
    resize();

    let raf;
    const start = performance.now();
    function update() {
      program.uniforms.uTime.value = ((performance.now() - start) / 1000) * amplitude;
      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(update);
    }
    update();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      container.removeChild(gl.canvas);
    };
  }, [colorStops, amplitude, blend]);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" />;
}