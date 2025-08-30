import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SidePanel from './SidePanel';
import Controls from './Controls';
import PlanetInfo from './PlanetInfo';
import PlanetLabels from './PlanetLabels';
import '../css/solar-system.css';

const SolarSystem = () => {
  const { t } = useTranslation();
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const animationIdRef = useRef(null);
  
  // États pour les contrôles
  const [timeSpeed, setTimeSpeed] = useState(1);
  const [showOrbits, setShowOrbits] = useState(true);
  const [showLabels, setShowLabels] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [planets, setPlanets] = useState({});
  const [orbits, setOrbits] = useState({});
  
  // États pour le side panel
  const [isSidePanelExpanded, setIsSidePanelExpanded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Référence pour stocker les positions actuelles des planètes
  const planetsPositionsRef = useRef({});

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 1000, 2000);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      2000
    );
    camera.position.set(0, 50, 100);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    
    // Taille adaptative selon le mode plein écran
    const containerWidth = isFullscreen ? window.innerWidth : Math.min(window.innerWidth * 0.8, 800);
    const containerHeight = isFullscreen ? window.innerHeight : Math.min(window.innerHeight * 0.7, 600);
    
    renderer.setSize(containerWidth, containerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 1);
    rendererRef.current = renderer;
    
    mountRef.current.appendChild(renderer.domElement);

    // Controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 500;
    controls.minDistance = 5;
    controlsRef.current = controls;

    // Lighting amélioré avec intensité réduite
    const ambientLight = new THREE.AmbientLight(0x404040, 0.2); // Réduit de 0.4 à 0.2
    scene.add(ambientLight);

    const sunLight = new THREE.PointLight(0xffffff, 4, 3000); // Réduit de 8 à 4
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // Réduit de 1.5 à 0.8
    directionalLight.position.set(0, 100, 0);
    scene.add(directionalLight);

    // Create sun avec géométrie parfaite
    const sunGeometry = new THREE.SphereGeometry(10, 128, 128);
    const sunMaterial = new THREE.MeshBasicMaterial({
      color: 0xffff00
    });

    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sun.name = t('solarSystem.info.sun');
    scene.add(sun);

    // Sun glow effect amélioré
    const sunGlowGeometry = new THREE.SphereGeometry(12, 64, 64);
    const sunGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffff00,
      transparent: true,
      opacity: 0.4
    });
    const sunGlow = new THREE.Mesh(sunGlowGeometry, sunGlowMaterial);
    sun.add(sunGlow);

    // Create planets with complete data et géométrie parfaite
    const planetData = [
      {
        name: t('solarSystem.info.mercury'),
        type: t('solarSystem.planetTypes.terrestrial'),
        distance: "0.39 AU",
        size: "4.879 km",
        revolution: `88 ${t('solarSystem.timeUnits.days')}`,
        color: 0x8C7853,
        radius: 1.5,
        orbitRadius: 20,
        orbitSpeed: 0.02,
        rotationSpeed: 0.01
      },
      {
        name: t('solarSystem.info.venus'),
        type: t('solarSystem.planetTypes.terrestrial'),
        distance: "0.72 AU",
        size: "12.104 km",
        revolution: `225 ${t('solarSystem.timeUnits.days')}`,
        color: 0xFFC649,
        radius: 2.5,
        orbitRadius: 35,
        orbitSpeed: 0.015,
        rotationSpeed: 0.008
      },
      {
        name: t('solarSystem.info.earth'),
        type: t('solarSystem.planetTypes.terrestrial'),
        distance: "1 AU",
        size: "12.756 km",
        revolution: `365 ${t('solarSystem.timeUnits.days')}`,
        color: 0x6B93D6,
        radius: 2.8,
        orbitRadius: 50,
        orbitSpeed: 0.01,
        rotationSpeed: 0.012,
        hasMoon: true
      },
      {
        name: t('solarSystem.info.mars'),
        type: t('solarSystem.planetTypes.terrestrial'),
        distance: "1.52 AU",
        size: "6.792 km",
        revolution: `687 ${t('solarSystem.timeUnits.days')}`,
        color: 0xC1440E,
        radius: 2.2,
        orbitRadius: 65,
        orbitSpeed: 0.008,
        rotationSpeed: 0.01
      },
      {
        name: t('solarSystem.info.jupiter'),
        type: t('solarSystem.planetTypes.gasGiant'),
        distance: "5.20 AU",
        size: "142.984 km",
        revolution: `12 ${t('solarSystem.timeUnits.years')}`,
        color: 0xD8CA9D,
        radius: 8,
        orbitRadius: 100,
        orbitSpeed: 0.005,
        rotationSpeed: 0.02
      },
      {
        name: t('solarSystem.info.saturn'),
        type: t('solarSystem.planetTypes.gasGiant'),
        distance: "9.58 AU",
        size: "120.536 km",
        revolution: `29 ${t('solarSystem.timeUnits.years')}`,
        color: 0xFAD5A5,
        radius: 7,
        orbitRadius: 140,
        orbitSpeed: 0.003,
        rotationSpeed: 0.018,
        hasRings: true
      },
      {
        name: t('solarSystem.info.uranus'),
        type: t('solarSystem.planetTypes.iceGiant'),
        distance: "19.18 AU",
        size: "51.118 km",
        revolution: `84 ${t('solarSystem.timeUnits.years')}`,
        color: 0x4FD0E7,
        radius: 4.5,
        orbitRadius: 180,
        orbitSpeed: 0.002,
        rotationSpeed: 0.015
      },
      {
        name: t('solarSystem.info.neptune'),
        type: t('solarSystem.planetTypes.iceGiant'),
        distance: "30.07 AU",
        size: "49.528 km",
        revolution: `165 ${t('solarSystem.timeUnits.years')}`,
        color: 0x4B70DD,
        radius: 4.2,
        orbitRadius: 220,
        orbitSpeed: 0.0015,
        rotationSpeed: 0.014
      }
    ];

    const planetsObj = {};
    const orbitsObj = {};

    planetData.forEach(data => {
      // Géométrie parfaite avec beaucoup plus de segments
      const planetGeometry = new THREE.SphereGeometry(data.radius, 128, 128);
      
      // Matériaux avec intensité réduite et textures
      let planetMaterial;
      
      // Créer d'abord le mesh de la planète
      const planet = new THREE.Mesh(planetGeometry, planetMaterial);
      planet.name = data.name;
      planet.position.x = data.orbitRadius;
      planet.position.y = 0;
      planet.position.z = 0;
      
      if (data.name === "Terre") {
        // Terre avec relief et couleurs distinctes
        planetMaterial = new THREE.MeshLambertMaterial({
          color: 0x4A90E2, // Bleu plus doux
          emissive: 0x1a3a5f,
          emissiveIntensity: 0.05 // Très faible émission
        });
        
        // Ajouter des continents visibles
        const earthContinents = new THREE.Mesh(
          new THREE.SphereGeometry(data.radius + 0.01, 128, 128),
          new THREE.MeshBasicMaterial({
            color: 0x2E8B57, // Vert forêt
            transparent: true,
            opacity: 0.3
          })
        );
        earthContinents.rotation.x = Math.PI / 4;
        earthContinents.rotation.y = Math.PI / 6;
        planet.add(earthContinents);
        
      } else if (data.name === "Mars") {
        // Mars avec relief et calottes polaires
        planetMaterial = new THREE.MeshLambertMaterial({
          color: 0xCD5C5C, // Rouge plus doux
          emissive: 0x4a1a1a,
          emissiveIntensity: 0.03
        });
        
        // Calottes polaires
        const marsPoles = new THREE.Mesh(
          new THREE.SphereGeometry(data.radius + 0.01, 128, 128),
          new THREE.MeshBasicMaterial({
            color: 0xFFFFFF, // Blanc
            transparent: true,
            opacity: 0.4
          })
        );
        marsPoles.rotation.x = Math.PI / 2;
        planet.add(marsPoles);
        
      } else if (data.name === "Jupiter") {
        // Jupiter avec bandes colorées
        planetMaterial = new THREE.MeshLambertMaterial({
          color: 0xD4AF37, // Doré plus doux
          emissive: 0x3d2e0f,
          emissiveIntensity: 0.04
        });
        
        // Bandes de Jupiter
        for (let i = 0; i < 5; i++) {
          const bandGeometry = new THREE.RingGeometry(
            data.radius - 0.5 + i * 0.2,
            data.radius - 0.4 + i * 0.2,
            64
          );
          const bandMaterial = new THREE.MeshBasicMaterial({
            color: i % 2 === 0 ? 0xD4AF37 : 0x8B4513, // Alternance de couleurs
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.6
          });
          const band = new THREE.Mesh(bandGeometry, bandMaterial);
          band.rotation.x = Math.PI / 2;
          band.position.y = (i - 2) * 0.3;
          planet.add(band);
        }
        
      } else if (data.name === "Saturne") {
        // Saturne avec anneaux et bandes
        planetMaterial = new THREE.MeshLambertMaterial({
          color: 0xFAD5A5, // Beige
          emissive: 0x3d2e0f,
          emissiveIntensity: 0.03
        });
        
        // Bandes de Saturne
        for (let i = 0; i < 3; i++) {
          const bandGeometry = new THREE.RingGeometry(
            data.radius - 0.3 + i * 0.2,
            data.radius - 0.2 + i * 0.2,
            64
          );
          const bandMaterial = new THREE.MeshBasicMaterial({
            color: i % 2 === 0 ? 0xFAD5A5 : 0xD2B48C,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.5
          });
          const band = new THREE.Mesh(bandGeometry, bandMaterial);
          band.rotation.x = Math.PI / 2;
          band.position.y = (i - 1) * 0.2;
          planet.add(band);
        }
        
      } else if (data.name === "Uranus") {
        // Uranus avec anneaux subtils
        planetMaterial = new THREE.MeshLambertMaterial({
          color: 0x4FD0E7, // Bleu clair
          emissive: 0x1a3a5f,
          emissiveIntensity: 0.03
        });
        
        // Anneaux subtils d'Uranus
        const uranusRings = new THREE.Mesh(
          new THREE.RingGeometry(data.radius + 0.5, data.radius + 1.5, 64),
          new THREE.MeshBasicMaterial({
            color: 0x4FD0E7,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.3
          })
        );
        uranusRings.rotation.x = Math.PI / 2;
        planet.add(uranusRings);
        
      } else if (data.name === "Neptune") {
        // Neptune avec tempêtes
        planetMaterial = new THREE.MeshLambertMaterial({
          color: 0x4B70DD, // Bleu foncé
          emissive: 0x1a3a5f,
          emissiveIntensity: 0.03
        });
        
        // Taches de tempête
        const stormGeometry = new THREE.SphereGeometry(data.radius + 0.01, 64, 64);
        const stormMaterial = new THREE.MeshBasicMaterial({
          color: 0x1E90FF, // Bleu plus clair
          transparent: true,
          opacity: 0.4
        });
        const storm = new THREE.Mesh(stormGeometry, stormMaterial);
        storm.rotation.x = Math.PI / 3;
        storm.rotation.y = Math.PI / 4;
        planet.add(storm);
        
      } else {
        // Autres planètes avec relief subtil
        planetMaterial = new THREE.MeshLambertMaterial({
          color: data.color,
          emissive: data.color,
          emissiveIntensity: 0.03 // Très faible émission
        });
        
        // Relief subtil pour Mercure et Vénus
        if (data.name === "Mercure" || data.name === "Vénus") {
          const reliefGeometry = new THREE.SphereGeometry(data.radius + 0.005, 128, 128);
          const reliefMaterial = new THREE.MeshBasicMaterial({
            color: data.color,
            transparent: true,
            opacity: 0.2
          });
          const relief = new THREE.Mesh(reliefGeometry, reliefMaterial);
          relief.rotation.x = Math.PI / 4;
          relief.rotation.y = Math.PI / 3;
          planet.add(relief);
        }
      }
      
      // Appliquer le matériau à la planète
      planet.material = planetMaterial;

      scene.add(planet);

      // Create orbit visualization avec lueur bleue
      const orbitGeometry = new THREE.RingGeometry(data.orbitRadius - 0.1, data.orbitRadius + 0.1, 128);
      
      // Matériau principal de l'orbite
      const orbitMaterial = new THREE.MeshBasicMaterial({
        color: 0x4A90E2, // Bleu
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6
      });

      const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
      orbit.rotation.x = Math.PI / 2;
      scene.add(orbit);
      orbitsObj[data.name] = orbit;

      // Lueur externe bleue pour l'orbite
      const orbitGlowGeometry = new THREE.RingGeometry(data.orbitRadius - 0.3, data.orbitRadius + 0.3, 128);
      const orbitGlowMaterial = new THREE.MeshBasicMaterial({
        color: 0x4A90E2,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.2
      });

      const orbitGlow = new THREE.Mesh(orbitGlowGeometry, orbitGlowMaterial);
      orbitGlow.rotation.x = Math.PI / 2;
      scene.add(orbitGlow);

      // Add moon for Earth avec géométrie parfaite
      if (data.hasMoon) {
        const moonGeometry = new THREE.SphereGeometry(0.8, 64, 64);
        const moonMaterial = new THREE.MeshLambertMaterial({
          color: 0xCCCCCC,
          emissive: 0x222222,
          emissiveIntensity: 0.02
        });

        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        moon.name = "Lune";
        moon.position.set(4, 0, 0);
        planet.add(moon);
      }

      // Add rings for Saturn
      if (data.hasRings) {
        const ringGeometry = new THREE.RingGeometry(data.radius + 1, data.radius + 3, 64);
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: 0xD4AF37,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.7
        });

        const rings = new THREE.Mesh(ringGeometry, ringMaterial);
        rings.rotation.x = Math.PI / 2;
        planet.add(rings);
      }

      planetsObj[data.name] = {
        mesh: planet,
        ...data,
        orbitAngle: 0
      };
    });

    setPlanets(planetsObj);
    setOrbits(orbitsObj);

    // Create star field
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 10000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 2000;
      positions[i + 1] = (Math.random() - 0.5) * 2000;
      positions[i + 2] = (Math.random() - 0.5) * 2000;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1,
      sizeAttenuation: false
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      if (!isPaused) {
        // Update planet positions and rotations
        Object.values(planetsObj).forEach(planet => {
          planet.orbitAngle += planet.orbitSpeed * timeSpeed;
          
          // Position orbitale
          planet.mesh.position.x = Math.cos(planet.orbitAngle) * planet.orbitRadius;
          planet.mesh.position.z = Math.sin(planet.orbitAngle) * planet.orbitRadius;
          
          // Rotation sur l'axe (rotation sur elle-même)
          planet.mesh.rotation.y += planet.rotationSpeed * timeSpeed;
          
          // Stocker la position actuelle
          planetsPositionsRef.current[planet.name] = {
            x: planet.mesh.position.x,
            y: planet.mesh.position.y,
            z: planet.mesh.position.z,
            orbitAngle: planet.orbitAngle,
            rotationY: planet.mesh.rotation.y
          };
        });
      }
      
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const containerWidth = isFullscreen ? window.innerWidth : Math.min(window.innerWidth * 0.8, 800);
      const containerHeight = isFullscreen ? window.innerHeight : Math.min(window.innerHeight * 0.7, 600);
      
      camera.aspect = containerWidth / containerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerWidth, containerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [timeSpeed, isPaused, isFullscreen]);

  // Event handlers
  const handlePlanetClick = (event) => {
    if (!cameraRef.current || !planets || Object.keys(planets).length === 0) return;

    const rect = mountRef.current.getBoundingClientRect();
    const mouse = new THREE.Vector2();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, cameraRef.current);

    const objects = Object.values(planets).map(p => p.mesh);
    const intersects = raycaster.intersectObjects(objects);

    if (intersects.length > 0) {
      const planet = intersects[0].object;
      setSelectedPlanet(planet);
      console.log('Planète sélectionnée:', planet.name);
    } else {
      setSelectedPlanet(null);
      console.log('Aucune planète sélectionnée');
    }
  };

  const handleMouseMove = (event) => {
    if (!cameraRef.current || !planets || Object.keys(planets).length === 0) return;

    const rect = mountRef.current.getBoundingClientRect();
    const mouse = new THREE.Vector2();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, cameraRef.current);

    const objects = Object.values(planets).map(p => p.mesh);
    const intersects = raycaster.intersectObjects(objects);

    // Reset all planet materials
    Object.values(planets).forEach(planet => {
      if (planet.mesh.material.emissiveIntensity !== 0.03) {
        planet.mesh.material.emissiveIntensity = 0.03;
      }
    });

    // Highlight hovered planet
    if (intersects.length > 0) {
      const planet = intersects[0].object;
      planet.material.emissiveIntensity = 0.15; // Hover plus subtil
    }
  };

  const handleToggleOrbits = () => {
    setShowOrbits(!showOrbits);
    Object.values(orbits).forEach(orbit => {
      orbit.visible = !showOrbits;
    });
  };

  const handleToggleLabels = () => {
    setShowLabels(!showLabels);
  };

  const handleResetView = () => {
    if (cameraRef.current && controlsRef.current) {
      cameraRef.current.position.set(0, 50, 100);
      controlsRef.current.reset();
    }
  };

  const handleFollowSun = () => {
    if (cameraRef.current && controlsRef.current) {
      cameraRef.current.position.set(0, 0, 50);
      controlsRef.current.target.set(0, 0, 0);
    }
  };

  const handleTogglePause = () => {
    setIsPaused(!isPaused);
  };

  const handleToggleSidePanel = () => {
    setIsSidePanelExpanded(!isSidePanelExpanded);
  };

  const handleToggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const selectedPlanetData = selectedPlanet ? planets[selectedPlanet.name] : null;

  return (
    <div className={`solar-system-container ${isFullscreen ? 'fullscreen' : ''}`}>
      {/* Side Panel */}
      <SidePanel
        isExpanded={isSidePanelExpanded}
        onToggle={handleToggleSidePanel}
        onFullscreen={handleToggleFullscreen}
        isFullscreen={isFullscreen}
      >
        {{
          controls: (
            <Controls
              timeSpeed={timeSpeed}
              onTimeSpeedChange={setTimeSpeed}
              showOrbits={showOrbits}
              onToggleOrbits={handleToggleOrbits}
              showLabels={showLabels}
              onToggleLabels={handleToggleLabels}
              onResetView={handleResetView}
              onFollowSun={handleFollowSun}
              isPaused={isPaused}
              onTogglePause={handleTogglePause}
            />
          ),
          info: (
            <PlanetInfo 
              selectedPlanet={selectedPlanet} 
              planetData={selectedPlanetData} 
            />
          )
        }}
      </SidePanel>

      {/* Container 3D */}
      <div 
        ref={mountRef} 
        className="three-container"
        onClick={handlePlanetClick}
        onMouseMove={handleMouseMove}
      />

      {/* Étiquettes des planètes - seulement si showLabels est true */}
      {showLabels && (
        <PlanetLabels 
          planets={planets} 
          camera={cameraRef.current} 
          showLabels={showLabels}
          containerRef={mountRef}
        />
      )}
    </div>
  );
};

export default SolarSystem;
