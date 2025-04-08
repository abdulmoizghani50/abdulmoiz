
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded");
  }, []);

  return (
    <Particles
      className="absolute inset-0 -z-10"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        fullScreen: { enable: false },
        background: {
          color: {
            value: "transparent",
          },
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: ["#7658f5", "#06d6a0", "#0077b6", "#33a8b5"]
          },
          shape: {
            type: ["circle", "triangle", "polygon", "edge"],
            polygon: {
              sides: 6
            },
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: { min: 1, max: 5 },
            random: true,
            anim: {
              enable: true,
              speed: 1,
              size_min: 0.3,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "random",
            opacity: 0.2,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.05,
              color: "#7658f5"
            }
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: ["grab", "bubble"],
              parallax: {
                enable: true,
                force: 60,
                smooth: 10
              }
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 180,
              line_linked: {
                opacity: 0.35
              }
            },
            bubble: {
              distance: 200,
              size: 12,
              duration: 2,
              opacity: 0.4,
              speed: 3
            },
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
    />
  );
};

export default ParticleBackground;
