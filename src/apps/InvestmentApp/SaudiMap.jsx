import React, { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { feature } from 'topojson-client';
import { geoMercator } from 'd3-geo';
import worldData from 'world-atlas/countries-110m.json';

const SaudiMap = ({ selectedCity, onCitySelect }) => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const plateGroupRef = useRef(null);
  const markersGroupRef = useRef(null);
  const animationIdRef = useRef(null);
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const mouse = useMemo(() => new THREE.Vector2(), []);

  const saudiFeature = useMemo(() => {
    const countries = feature(worldData, worldData.objects.countries).features;
    const sa = countries.find((country) => country.id === '682');
    return sa || null;
  }, []);

  const cities = useMemo(
    () => [
      { id: 'riyadh', name: 'الرياض', lat: 24.7136, lng: 46.6753 },
      { id: 'jeddah', name: 'جدة', lat: 21.4858, lng: 39.1979 },
      { id: 'makkah', name: 'مكة', lat: 21.4225, lng: 39.8262 },
      { id: 'madinah', name: 'المدينة', lat: 24.4709, lng: 39.6122 },
      { id: 'dammam', name: 'الدمام', lat: 26.4333, lng: 50.1 },
      { id: 'tabuk', name: 'تبوك', lat: 28.3833, lng: 36.5715 },
      { id: 'qassim', name: 'القصيم', lat: 26.3333, lng: 43.7667 },
    ],
    []
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !saudiFeature) return;

    // Init renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      35,
      container.clientWidth / container.clientHeight,
      0.1,
      2000
    );
    // Move camera back a bit more so the whole plate fits
    camera.position.set(0, 190, 560);
    cameraRef.current = camera;

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    const keyLight = new THREE.DirectionalLight(0xffffff, 0.9);
    keyLight.position.set(-200, 300, 200);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x77ffbb, 0.4);
    rimLight.position.set(250, 200, -150);
    scene.add(rimLight);

    // Ground shadow catcher
    const groundGeo = new THREE.PlaneGeometry(2000, 2000);
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.15 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -8;
    ground.receiveShadow = true;
    scene.add(ground);

    // Create plate group
    const plateGroup = new THREE.Group();
    scene.add(plateGroup);
    plateGroupRef.current = plateGroup;
    // Scale down the whole plate further to ensure full visibility
    plateGroup.scale.setScalar(0.45);
    // Lift the plate slightly so it appears higher in the frame
    plateGroup.position.y = 56;

    // Build extruded KSA plate from GeoJSON
    const featureCollection = { type: 'FeatureCollection', features: [saudiFeature] };

    // Fit projection to a smaller virtual size; we center later
    const fitWidth = 700;
    const fitHeight = 700;
    const projection = geoMercator().fitSize([fitWidth, fitHeight], featureCollection);

    // Helper to project lon/lat to x,y and center
    const centerX = fitWidth / 2;
    const centerY = fitHeight / 2;
    const project = ([lng, lat]) => {
      const [x, y] = projection([lng, lat]);
      return new THREE.Vector2(x - centerX, centerY - y); // invert Y to make up positive
    };

    const shapes = [];

    const addPolygon = (coords) => {
      // coords: [ [ [lng,lat], ... ] outer, [hole], ... ]
      const outer = coords[0];
      if (!outer || outer.length < 3) return;

      const shape = new THREE.Shape();
      outer.forEach((c, i) => {
        const v = project(c);
        if (i === 0) shape.moveTo(v.x, v.y);
        else shape.lineTo(v.x, v.y);
      });

      // Holes
      for (let h = 1; h < coords.length; h++) {
        const holeRing = coords[h];
        if (!holeRing || holeRing.length < 3) continue;
        const path = new THREE.Path();
        holeRing.forEach((c, i) => {
          const v = project(c);
          if (i === 0) path.moveTo(v.x, v.y);
          else path.lineTo(v.x, v.y);
        });
        shape.holes.push(path);
      }

      shapes.push(shape);
    };

    const geom = saudiFeature.geometry;
    if (geom.type === 'Polygon') {
      addPolygon(geom.coordinates);
    } else if (geom.type === 'MultiPolygon') {
      geom.coordinates.forEach(addPolygon);
    }

    const depth = 12; // plate thickness
    const extrudeGeometry = new THREE.ExtrudeGeometry(shapes, {
      depth,
      bevelEnabled: true,
      bevelSize: 1.2,
      bevelThickness: 1.2,
      bevelOffset: 0,
      bevelSegments: 2,
      curveSegments: 8,
    });

    // Center geometry
    extrudeGeometry.center();

    const plateMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#009d4f'),
      metalness: 0.2,
      roughness: 0.55,
      emissive: new THREE.Color('#003a23'),
      emissiveIntensity: 0.12,
    });

    const plateMesh = new THREE.Mesh(extrudeGeometry, plateMaterial);
    plateMesh.castShadow = true;
    plateMesh.receiveShadow = false;
    plateMesh.rotation.x = -Math.PI * 0.12; // subtle tilt
    plateGroup.add(plateMesh);

    // Outline
    const edges = new THREE.EdgesGeometry(extrudeGeometry);
    const line = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: '#00c46a', linewidth: 1 })
    );
    line.rotation.copy(plateMesh.rotation);
    plateGroup.add(line);

    // City markers group
    const markersGroup = new THREE.Group();
    markersGroupRef.current = markersGroup;

    const markerMaterial = new THREE.MeshStandardMaterial({ color: '#D0E0D9' });
    const markerSelectedMaterial = new THREE.MeshStandardMaterial({ color: '#1DB954' });
    // Bigger marker size
    const markerGeom = new THREE.SphereGeometry(15, 24, 24);

    const cityToMesh = new Map();

    cities.forEach((city) => {
      const v = project([city.lng, city.lat]);
      // Find z on top surface (half depth + bevel approx)
      const marker = new THREE.Mesh(markerGeom, markerMaterial.clone());
      marker.position.set(v.x, v.y, depth / 2 + 2);
      marker.castShadow = true;
      marker.userData = { id: city.id, name: city.name };
      cityToMesh.set(city.id, marker);
      markersGroup.add(marker);

      // Label (sprite-like using small plane)
      const labelCanvas = document.createElement('canvas');
      const ctx = labelCanvas.getContext('2d');
      const fontSize = 90; // larger font
      ctx.font = `600 ${fontSize}px Poppins, sans-serif`;
      const textWidth = ctx.measureText(city.name).width;
      labelCanvas.width = Math.ceil(textWidth + 40);
      labelCanvas.height = fontSize + 28;

      // redraw with proper size
      const ctx2 = labelCanvas.getContext('2d');
      ctx2.font = `600 ${fontSize}px Poppins, sans-serif`;
      ctx2.fillStyle = 'rgba(0,0,0,0.5)';
      ctx2.fillRect(0, 0, labelCanvas.width, labelCanvas.height);
      ctx2.fillStyle = '#ffffff';
      ctx2.textBaseline = 'middle';
      ctx2.textAlign = 'center';
      ctx2.fillText(city.name, labelCanvas.width / 2, labelCanvas.height / 2);

      const texture = new THREE.CanvasTexture(labelCanvas);
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      const labelMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
      const label = new THREE.Sprite(labelMat);
      const scale = 0.25; // larger label scale
      label.scale.set(labelCanvas.width * scale, labelCanvas.height * scale, 1);
      label.position.set(v.x, v.y, depth / 2 + 104);
      markersGroup.add(label);
    });

    // Set initial selected state
    const updateMarkerSelection = () => {
      markersGroup.children.forEach((obj) => {
        if (obj.isMesh) {
          const isSelected = obj.userData && obj.userData.id === selectedCity;
          obj.material.color.set(isSelected ? '#1DB954' : '#D0E0D9');
          obj.scale.setScalar(isSelected ? 1.25 : 1);
        }
      });
    };

    updateMarkerSelection();

    // Add markers to plate group (so they tilt together)
    markersGroup.rotation.copy(plateMesh.rotation);
    plateGroup.add(markersGroup);

    // Render loop (no auto-rotation)
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Events: resize
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    // Events: click picking
    const onClick = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(markersGroup.children, true);

      const hit = intersects.find((i) => i.object && i.object.userData && i.object.userData.id);
      if (hit) {
        const id = hit.object.userData.id;
        onCitySelect && onCitySelect(id === selectedCity ? null : id);
      }
    };

    window.addEventListener('resize', onResize);
    renderer.domElement.addEventListener('click', onClick);

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener('resize', onResize);
      renderer.domElement.removeEventListener('click', onClick);

      // Cleanup scene
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
          else obj.material.dispose();
        }
        if (obj.texture) obj.texture.dispose();
      });

      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saudiFeature]);

  // React to selection changes (after initial mount)
  useEffect(() => {
    const markersGroup = markersGroupRef.current;
    if (!markersGroup) return;
    markersGroup.children.forEach((obj) => {
      if (obj.isMesh) {
        const isSelected = obj.userData && obj.userData.id === selectedCity;
        obj.material.color.set(isSelected ? '#1DB954' : '#D0E0D9');
        obj.scale.setScalar(isSelected ? 1.25 : 1);
      }
    });
  }, [selectedCity]);

  return (
    <div ref={containerRef} className="w-full h-[420px] rounded-2xl bg-white/5 border border-mwan-green/20 relative overflow-hidden" />
  );
};

export default SaudiMap;

