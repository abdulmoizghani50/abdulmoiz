
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
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 900
            }
          },
          color: {
            value: ["#7658f5", "#06d6a0", "#0077b6", "#33a8b5", "#9b87f5"]
          },
          shape: {
            type: ["circle", "triangle", "polygon"],
            polygon: {
              sides: 6
            }
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: {
              enable: true,
              speed: 0.4,
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
            color: "#9b87f5",
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
            speed: 0.6,
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
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 1
            },
            lines: {
              enable: true,
              frequency: 0.005,
              opacity: 1
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
                smooth: 15
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
              distance: 200,
              line_linked: {
                opacity: 0.4
              }
            },
            bubble: {
              distance: 200,
              size: 15,
              duration: 2,
              opacity: 0.5,
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
        retina_detect: true,
        motion: {
          disable: false,
          reduce: {
            factor: 4,
            value: true
          }
        }
      }}
    />
  );
};

export default ParticleBackground;
