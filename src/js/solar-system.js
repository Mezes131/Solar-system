// Système Solaire Interactif 3D avec Three.js
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

class SolarSystem {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.controls = null;
        this.planets = {};
        this.orbits = {};
        this.labels = {};
        this.isPaused = false;
        this.timeSpeed = 1;
        this.showOrbits = true;
        this.showLabels = true;
        this.selectedPlanet = null;
        this.animationId = null;
        this.clock = new THREE.Clock();
        
        this.init();
        this.createScene();
        this.createSun();
        this.createPlanets();
        this.createStarField();
        this.setupControls();
        this.setupEventListeners();
        this.animate();
        
        // Hide loading screen
        document.getElementById('loading').style.display = 'none';
    }

    init() {
        // Scene setup
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0x000000, 1000, 2000);

        // Camera setup
        this.camera = new THREE.PerspectiveCamera(
            75, 
            window.innerWidth / window.innerHeight, 
            0.1, 
            2000
        );
        this.camera.position.set(0, 50, 100);

        // Renderer setup
        this.renderer = new THREE.WebGLRenderer({ 
            antialias: true,
            alpha: true 
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setClearColor(0x000000, 1);
        
        document.getElementById('container').appendChild(this.renderer.domElement);

        // Controls setup
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.maxDistance = 500;
        this.controls.minDistance = 5;
    }

    createScene() {
        // Ambient light for overall scene illumination
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        this.scene.add(ambientLight);

        // Point light for sun glow effect
        const sunLight = new THREE.PointLight(0xffffff, 5, 3000);
        sunLight.position.set(0, 0, 0);
        this.scene.add(sunLight);

        // Directional light for better planet illumination
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 100, 0);
        this.scene.add(directionalLight);
    }

    createSun() {
        // Sun geometry and material
        const sunGeometry = new THREE.SphereGeometry(10, 64, 64);
        const sunMaterial = new THREE.MeshBasicMaterial({
            color: 0xffff00,
            emissive: 0xffff00,
            emissiveIntensity: 0.5
        });

        const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        sun.name = "Sun";
        this.scene.add(sun);

        // Sun glow effect
        const sunGlowGeometry = new THREE.SphereGeometry(12, 32, 32);
        const sunGlowMaterial = new THREE.MeshBasicMaterial({
            color: 0xffff00,
            transparent: true,
            opacity: 0.3
        });
        const sunGlow = new THREE.Mesh(sunGlowGeometry, sunGlowMaterial);
        sun.add(sunGlow);

        // Store sun reference
        this.planets.sun = {
            mesh: sun,
            type: "Étoile",
            distance: "0 AU",
            size: "1.392.700 km",
            revolution: "N/A",
            rotationSpeed: 0.01,
            orbitRadius: 0,
            orbitSpeed: 0,
            orbitAngle: 0
        };
    }

    createPlanets() {
        const planetData = [
            {
                name: "Mercure",
                type: "Planète tellurique",
                distance: "0.39 AU",
                size: "4.879 km",
                revolution: "88 jours",
                color: 0x8C7853,
                radius: 1.5,
                orbitRadius: 20,
                orbitSpeed: 0.02,
                rotationSpeed: 0.01
            },
            {
                name: "Vénus",
                type: "Planète tellurique",
                distance: "0.72 AU",
                size: "12.104 km",
                revolution: "225 jours",
                color: 0xFFC649,
                radius: 2.5,
                orbitRadius: 35,
                orbitSpeed: 0.015,
                rotationSpeed: 0.008
            },
            {
                name: "Terre",
                type: "Planète tellurique",
                distance: "1 AU",
                size: "12.756 km",
                revolution: "365 jours",
                color: 0x6B93D6,
                radius: 2.8,
                orbitRadius: 50,
                orbitSpeed: 0.01,
                rotationSpeed: 0.012,
                hasMoon: true
            },
            {
                name: "Mars",
                type: "Planète tellurique",
                distance: "1.52 AU",
                size: "6.792 km",
                revolution: "687 jours",
                color: 0xC1440E,
                radius: 2.2,
                orbitRadius: 65,
                orbitSpeed: 0.008,
                rotationSpeed: 0.01
            },
            {
                name: "Jupiter",
                type: "Planète géante gazeuse",
                distance: "5.20 AU",
                size: "142.984 km",
                revolution: "12 ans",
                color: 0xD8CA9D,
                radius: 8,
                orbitRadius: 100,
                orbitSpeed: 0.005,
                rotationSpeed: 0.02
            },
            {
                name: "Saturne",
                type: "Planète géante gazeuse",
                distance: "9.58 AU",
                size: "120.536 km",
                revolution: "29 ans",
                color: 0xFAD5A5,
                radius: 7,
                orbitRadius: 140,
                orbitSpeed: 0.003,
                rotationSpeed: 0.018,
                hasRings: true
            },
            {
                name: "Uranus",
                type: "Planète géante glacée",
                distance: "19.18 AU",
                size: "51.118 km",
                revolution: "84 ans",
                color: 0x4FD0E7,
                radius: 4.5,
                orbitRadius: 180,
                orbitSpeed: 0.002,
                rotationSpeed: 0.015
            },
            {
                name: "Neptune",
                type: "Planète géante glacée",
                distance: "30.07 AU",
                size: "49.528 km",
                revolution: "165 ans",
                color: 0x4B70DD,
                radius: 4.2,
                orbitRadius: 220,
                orbitSpeed: 0.0015,
                rotationSpeed: 0.014
            }
        ];

        planetData.forEach(data => {
            this.createPlanet(data);
        });
    }

    createPlanet(data) {
        // Planet geometry and material
        const planetGeometry = new THREE.SphereGeometry(data.radius, 64, 64);
        const planetMaterial = new THREE.MeshLambertMaterial({
            color: data.color,
            emissive: data.color,
            emissiveIntensity: 0.1
        });

        const planet = new THREE.Mesh(planetGeometry, planetMaterial);
        planet.name = data.name;
        planet.userData = data;

        // Position planet on its orbit
        planet.position.x = data.orbitRadius;
        planet.position.y = 0;
        planet.position.z = 0;

        this.scene.add(planet);

        // Create orbit visualization
        if (this.showOrbits) {
            this.createOrbit(data.orbitRadius, data.name);
        }

        // Create planet label
        this.createPlanetLabel(planet, data.name);

        // Add moon for Earth
        if (data.hasMoon) {
            this.createMoon(planet, data);
        }

        // Add rings for Saturn
        if (data.hasRings) {
            this.createRings(planet, data);
        }

        // Store planet reference
        this.planets[data.name.toLowerCase()] = {
            mesh: planet,
            type: data.type,
            distance: data.distance,
            size: data.size,
            revolution: data.revolution,
            rotationSpeed: data.rotationSpeed,
            orbitRadius: data.orbitRadius,
            orbitSpeed: data.orbitSpeed,
            orbitAngle: 0
        };

        // Add click event
        planet.userData.clickable = true;
    }

    createMoon(planet, data) {
        const moonGeometry = new THREE.SphereGeometry(0.8, 32, 32);
        const moonMaterial = new THREE.MeshLambertMaterial({
            color: 0xCCCCCC,
            emissive: 0x222222
        });

        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        moon.name = "Lune";
        moon.position.set(4, 0, 0);
        planet.add(moon);

        // Store moon reference
        this.planets.lune = {
            mesh: moon,
            type: "Satellite naturel",
            distance: "0.00257 AU",
            size: "3.474 km",
            revolution: "27.3 jours",
            rotationSpeed: 0.01,
            orbitRadius: 4,
            orbitSpeed: 0.02,
            orbitAngle: 0,
            parent: planet
        };
    }

    createRings(planet, data) {
        const ringGeometry = new THREE.RingGeometry(data.radius + 1, data.radius + 3, 32);
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

    createOrbit(radius, planetName) {
        const orbitGeometry = new THREE.RingGeometry(radius - 0.1, radius + 0.1, 64);
        const orbitMaterial = new THREE.MeshBasicMaterial({
            color: 0x444444,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.3
        });

        const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
        orbit.rotation.x = Math.PI / 2;
        this.scene.add(orbit);
        this.orbits[planetName] = orbit;
    }

    createPlanetLabel(planet, name) {
        const label = document.createElement('div');
        label.className = 'planet-label';
        label.textContent = name;
        label.id = `label-${name.toLowerCase()}`;
        document.getElementById('planet-labels').appendChild(label);
        this.labels[name] = label;
    }

    createStarField() {
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
        this.scene.add(stars);
    }

    setupControls() {
        // Time speed control
        const timeSpeedSlider = document.getElementById('time-speed');
        const speedValue = document.getElementById('speed-value');
        
        timeSpeedSlider.addEventListener('input', (e) => {
            this.timeSpeed = parseFloat(e.target.value);
            speedValue.textContent = `${this.timeSpeed}x`;
        });

        // Toggle orbits
        const toggleOrbitsBtn = document.getElementById('toggle-orbits');
        toggleOrbitsBtn.addEventListener('click', () => {
            this.showOrbits = !this.showOrbits;
            Object.values(this.orbits).forEach(orbit => {
                orbit.visible = this.showOrbits;
            });
            toggleOrbitsBtn.textContent = this.showOrbits ? 'Masquer Orbites' : 'Afficher Orbites';
            toggleOrbitsBtn.classList.toggle('active');
        });

        // Toggle labels
        const toggleLabelsBtn = document.getElementById('toggle-labels');
        toggleLabelsBtn.addEventListener('click', () => {
            this.showLabels = !this.showLabels;
            Object.values(this.labels).forEach(label => {
                label.style.display = this.showLabels ? 'block' : 'none';
            });
            toggleLabelsBtn.textContent = this.showLabels ? 'Masquer Étiquettes' : 'Afficher Étiquettes';
            toggleLabelsBtn.classList.toggle('active');
        });

        // Reset view
        const resetViewBtn = document.getElementById('reset-view');
        resetViewBtn.addEventListener('click', () => {
            this.camera.position.set(0, 50, 100);
            this.controls.reset();
        });

        // Follow sun
        const followSunBtn = document.getElementById('follow-sun');
        followSunBtn.addEventListener('click', () => {
            this.camera.position.set(0, 0, 50);
            this.controls.target.set(0, 0, 0);
        });

        // Pause/Play
        const pausePlayBtn = document.getElementById('pause-play');
        pausePlayBtn.addEventListener('click', () => {
            this.isPaused = !this.isPaused;
            pausePlayBtn.textContent = this.isPaused ? 'Reprendre' : 'Pause';
            pausePlayBtn.classList.toggle('active');
        });
    }

    setupEventListeners() {
        // Mouse click events for planet selection
        this.renderer.domElement.addEventListener('click', (event) => {
            this.onPlanetClick(event);
        });

        // Window resize
        window.addEventListener('resize', () => {
            this.onWindowResize();
        });

        // Mouse move for planet highlighting
        this.renderer.domElement.addEventListener('mousemove', (event) => {
            this.onMouseMove(event);
        });
    }

    onPlanetClick(event) {
        const mouse = new THREE.Vector2();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, this.camera);

        const objects = Object.values(this.planets).map(p => p.mesh);
        const intersects = raycaster.intersectObjects(objects);

        if (intersects.length > 0) {
            const planet = intersects[0].object;
            this.selectPlanet(planet);
        }
    }

    selectPlanet(planet) {
        this.selectedPlanet = planet;
        const planetData = this.planets[planet.name.toLowerCase()];
        
        if (planetData) {
            document.getElementById('planet-name').textContent = planet.name;
            document.getElementById('planet-type').textContent = planetData.type;
            document.getElementById('planet-distance').textContent = planetData.distance;
            document.getElementById('planet-size').textContent = planetData.size;
            document.getElementById('planet-revolution').textContent = planetData.revolution;
        }
    }

    onMouseMove(event) {
        const mouse = new THREE.Vector2();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, this.camera);

        const objects = Object.values(this.planets).map(p => p.mesh);
        const intersects = raycaster.intersectObjects(objects);

        // Reset all planet materials
        Object.values(this.planets).forEach(planet => {
            if (planet.mesh.material.emissiveIntensity !== 0.05) {
                planet.mesh.material.emissiveIntensity = 0.05;
            }
        });

        // Highlight hovered planet
        if (intersects.length > 0) {
            const planet = intersects[0].object;
            planet.material.emissiveIntensity = 0.3;
        }
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    updatePlanetPositions() {
        if (this.isPaused) return;

        Object.values(this.planets).forEach(planet => {
            if (planet.orbitRadius > 0) { // Skip sun
                // Update orbit angle
                planet.orbitAngle += planet.orbitSpeed * this.timeSpeed;
                
                // Update position
                planet.mesh.position.x = Math.cos(planet.orbitAngle) * planet.orbitRadius;
                planet.mesh.position.z = Math.sin(planet.orbitAngle) * planet.orbitRadius;
                
                // Rotate planet on its axis
                planet.mesh.rotation.y += planet.rotationSpeed * this.timeSpeed;
            }
        });
    }

    updateLabels() {
        if (!this.showLabels) return;

        Object.entries(this.labels).forEach(([name, label]) => {
            const planet = this.planets[name.toLowerCase()];
            if (planet && planet.mesh) {
                const vector = planet.mesh.position.clone();
                vector.project(this.camera);

                const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
                const y = (-(vector.y * 0.5) + 0.5) * window.innerHeight;

                label.style.left = x + 'px';
                label.style.top = y + 'px';
                label.style.display = 'block';
            }
        });
    }

    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());
        
        this.updatePlanetPositions();
        this.updateLabels();
        this.controls.update();
        
        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize the solar system when the page loads
window.addEventListener('load', () => {
    new SolarSystem();
});
