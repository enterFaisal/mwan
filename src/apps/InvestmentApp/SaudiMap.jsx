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
      { id: 'dammam', name: 'الدمام', lat: 26.4333, lng: 50.1 },
      { id: 'riyadh', name: 'الرياض', lat: 24.7136, lng: 46.6753 },
      { id: 'jazan', name: 'جازان', lat: 16.8892, lng: 42.5511 },
      { id: 'abha', name: 'عسير', lat: 18.2164, lng: 42.5053 },
      { id: 'jeddah', name: 'جدة', lat: 21.8858, lng: 39.1979 },
      { id: 'qassim', name: 'القصيم', lat: 26.3333, lng: 43.7667 },
      { id: 'arar', name: 'الحدود الشمالية', lat: 30.9753, lng: 41.0381 },
      { id: 'ahsa', name: 'الأحساء', lat: 25.4297, lng: 49.6206 },
      { id: 'jouf', name: 'الجوف', lat: 29.8125, lng: 40.2039 },
      { id: 'makkah', name: 'مكة المكرمة', lat: 21.3025, lng: 40.6062 },
      { id: 'tabuk', name: 'تبوك', lat: 28.3833, lng: 36.5715 },
      { id: 'yanbu', name: 'ينبع', lat: 24.0892, lng: 38.0619 },
      { id: 'hafr', name: 'حفر الباطن', lat: 28.4342, lng: 45.9706 },
      { id: 'hail', name: 'حائل', lat: 27.5236, lng: 41.6949 },
      { id: 'najran', name: 'نجران', lat: 17.4924, lng: 44.1277 },
      { id: 'baha', name: 'الباحة', lat: 20.0129, lng: 41.4677 },
      { id: 'taif', name: 'الطائف', lat: 21.2703, lng: 40.4158 },
      { id: 'madinah', name: 'المدينة المنورة', lat: 24.4709, lng: 39.6122 },
      { id: 'qunfudhah', name: 'القنفذة', lat: 19.1264, lng: 41.0781 },
    ],
    []
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !saudiFeature) return;

    // Init renderer with tone mapping for better colors
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
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
    camera.position.set(0, 220, 580);
    cameraRef.current = camera;

    // Enhanced Lighting for more dramatic 3D effect
    scene.add(new THREE.AmbientLight(0xffffff, 0.35));

    const hemiLight = new THREE.HemisphereLight(0x87CEEB, 0x0a3d28, 0.5);
    scene.add(hemiLight);

    // Stronger key light from top-left
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(-300, 400, 300);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(2048, 2048);
    keyLight.shadow.camera.near = 100;
    keyLight.shadow.camera.far = 1000;
    keyLight.shadow.camera.left = -400;
    keyLight.shadow.camera.right = 400;
    keyLight.shadow.camera.top = 400;
    keyLight.shadow.camera.bottom = -400;
    keyLight.shadow.bias = -0.001;
    scene.add(keyLight);

    // Rim light for edge definition
    const rimLight = new THREE.DirectionalLight(0x00ff88, 0.7);
    rimLight.position.set(350, 180, -200);
    scene.add(rimLight);

    // Fill light
    const fillLight = new THREE.DirectionalLight(0x4db8ff, 0.4);
    fillLight.position.set(-150, 100, -300);
    scene.add(fillLight);

    // Ground shadow catcher with darker shadow
    const groundGeo = new THREE.PlaneGeometry(2000, 2000);
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.35 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -20;
    ground.receiveShadow = true;
    scene.add(ground);

    // Create plate group
    const plateGroup = new THREE.Group();
    scene.add(plateGroup);
    plateGroupRef.current = plateGroup;
    plateGroup.scale.setScalar(0.45);
    plateGroup.position.y = 200;
    plateGroup.rotation.y = 0.22;
    plateGroup.rotation.x = -0.05;

    // Build extruded KSA plate from GeoJSON
    const featureCollection = { type: 'FeatureCollection', features: [saudiFeature] };

    const fitWidth = 700;
    const fitHeight = 700;
    const projection = geoMercator().fitSize([fitWidth, fitHeight], featureCollection);

    const centerX = fitWidth / 2;
    const centerY = fitHeight / 2;
    const project = ([lng, lat]) => {
      const [x, y] = projection([lng, lat]);
      return new THREE.Vector2(x - centerX, centerY - y);
    };

    const shapes = [];

    const addPolygon = (coords) => {
      const outer = coords[0];
      if (!outer || outer.length < 3) return;

      const shape = new THREE.Shape();
      outer.forEach((c, i) => {
        const v = project(c);
        if (i === 0) shape.moveTo(v.x, v.y);
        else shape.lineTo(v.x, v.y);
      });

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

    const depth = 32; // Much deeper extrusion for stronger 3D
    const extrudeGeometry = new THREE.ExtrudeGeometry(shapes, {
      depth,
      bevelEnabled: true,
      bevelSize: 3.0,
      bevelThickness: 3.0,
      bevelOffset: 0,
      bevelSegments: 4,
      curveSegments: 12,
    });

    extrudeGeometry.center();

    // MWAN brand materials (toon/flat for cartoony look)
    const capMaterial = new THREE.MeshToonMaterial({
      color: new THREE.Color('#009d4f')
    });

    const sideMaterial = new THREE.MeshToonMaterial({
      color: new THREE.Color('#006835')
    });

    const plateMesh = new THREE.Mesh(extrudeGeometry, [capMaterial, sideMaterial]);
    plateMesh.castShadow = true;
    plateMesh.receiveShadow = true;
    plateMesh.rotation.x = -Math.PI * 0.20; // More pronounced tilt
    plateGroup.add(plateMesh);

    // Bold cartoony outline around the plate
    const plateOutlineGeom = extrudeGeometry.clone();
    const plateOutline = new THREE.Mesh(
      plateOutlineGeom,
      new THREE.MeshBasicMaterial({ color: '#08242f', side: THREE.BackSide })
    );
    plateOutline.rotation.copy(plateMesh.rotation);
    plateOutline.scale.multiplyScalar(1.015);
    plateOutline.position.z -= 0.6;
    plateGroup.add(plateOutline);

    // Subtle outline that matches the map color
    const edges = new THREE.EdgesGeometry(extrudeGeometry, 20);
    const line = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ 
        color: '#009d4f', // Same as map color for seamless look
        linewidth: 1,
        transparent: true,
        opacity: 0.25
      })
    );
    line.rotation.copy(plateMesh.rotation);
    plateGroup.add(line);

    // City markers group
    const markersGroup = new THREE.Group();
    markersGroupRef.current = markersGroup;

    // Quaternions to align Y-axis geometries to Z up/down
    const yToPosZ = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      new THREE.Vector3(0, 0, 1)
    );
    const yToNegZ = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      new THREE.Vector3(0, 0, -1)
    );

    // Helper to draw a 2D cartoony pin to a texture
    const createPinTexture = (fillColor = '#E5ECE9', strokeColor = '#0b1e27', strokeOpacity = 0.5) => {
      const w = 96;
      const h = 128;
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, w, h);
      ctx.save();
      ctx.translate(w / 2, h / 2 - 6);
      // Drop/body
      ctx.beginPath();
      const r = 26;
      ctx.arc(0, -10, r, Math.PI, 0, false);
      ctx.lineTo(10, 26);
      ctx.quadraticCurveTo(0, 44, -10, 26);
      ctx.closePath();
      // Fill
      ctx.fillStyle = fillColor;
      ctx.fill();
      // Stroke with reduced opacity
      ctx.lineWidth = 4;
      ctx.strokeStyle = strokeColor;
      ctx.globalAlpha = strokeOpacity;
      ctx.stroke();
      ctx.globalAlpha = 1.0;
      // Subtle shine
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      ctx.arc(-10, -24, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy?.() || 1;
      tex.needsUpdate = true;
      return tex;
    };

    // Special Madinah pin with a gentle muted-gold radial gradient
    const createMadinahPinTexture = () => {
      const w = 96;
      const h = 128;
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, w, h);
      ctx.save();
      ctx.translate(w / 2, h / 2 - 6);
      // Drop/body
      ctx.beginPath();
      const r = 26;
      ctx.arc(0, -10, r, Math.PI, 0, false);
      ctx.lineTo(10, 26);
      ctx.quadraticCurveTo(0, 44, -10, 26);
      ctx.closePath();
      // Muted gold radial gradient fill (soft)
      const gradient = ctx.createRadialGradient(-8, -18, 0, 0, -10, 35);
      gradient.addColorStop(0, '#E8C96A');
      gradient.addColorStop(0.6, '#D4B85C');
      gradient.addColorStop(1, '#B49445');
      ctx.fillStyle = gradient;
      ctx.fill();
      // Stroke with reduced opacity
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#0b1e27';
      ctx.globalAlpha = 0.5;
      ctx.stroke();
      ctx.globalAlpha = 1.0;
      // Subtle shine
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255,255,255,0.55)';
      ctx.arc(-10, -24, 5.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy?.() || 1;
      tex.needsUpdate = true;
      return tex;
    };

    // Precompute textures for default and selected states with softer colors
    const pinTexDefault = createPinTexture('#B8C9C3', '#0b1e27', 0.4);
    const pinTexSelected = createPinTexture('#1DB954', '#0b1e27', 0.5);
    // Special textures for Al-Madinah (muted gold gradient)
    const pinTexMadinahDefault = createMadinahPinTexture();
    const pinTexMadinahSelected = createMadinahPinTexture();

    cities.forEach((city) => {
      const v = project([city.lng, city.lat]);
      const baseZ = depth / 2 + 1;
      
      const isMadinah = city.id === 'madinah';
      
      const spriteMat = new THREE.SpriteMaterial({ 
        map: isMadinah ? pinTexMadinahDefault : pinTexDefault, 
        transparent: true 
      });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.position.set(v.x, v.y, baseZ + 36);
      // Scale sprite in world units (larger for Madinah)
      const baseW = isMadinah ? 48 : 36;
      const baseH = isMadinah ? 64 : 48;
      const selW = isMadinah ? 64 : 43;
      const selH = isMadinah ? 86 : 56;
      sprite.scale.set(baseW, baseH, 1);
      sprite.userData = { 
        id: city.id, 
        name: city.name, 
        markerType: 'spritePin', 
        normalMap: isMadinah ? pinTexMadinahDefault : pinTexDefault, 
        selectedMap: isMadinah ? pinTexMadinahSelected : pinTexSelected,
        baseW, baseH, selW, selH, isMadinah
      };
      markersGroup.add(sprite);

      // Add a subtle glow ring under each marker (reduced opacity)
      const ringGeo = new THREE.RingGeometry(isMadinah ? 20 : 16, isMadinah ? 28 : 20, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: isMadinah ? '#D4B85C' : '#1DB954', // Muted gold for Madinah
        transparent: true,
        opacity: isMadinah ? 0.25 : 0.18,
        side: THREE.DoubleSide
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.set(v.x, v.y, depth / 2 + 1);
      ring.rotation.x = -Math.PI / 2;
      markersGroup.add(ring);

      // Soft golden halo sprite for Madinah (radial gradient plane)
      if (isMadinah) {
        const haloSize = 140;
        const haloCanvas = document.createElement('canvas');
        haloCanvas.width = 256;
        haloCanvas.height = 256;
        const hctx = haloCanvas.getContext('2d');
        const g = hctx.createRadialGradient(128, 128, 0, 128, 128, 120);
        g.addColorStop(0, 'rgba(212,184,92,0.20)');
        g.addColorStop(0.6, 'rgba(212,184,92,0.10)');
        g.addColorStop(1, 'rgba(212,184,92,0.00)');
        hctx.fillStyle = g;
        hctx.fillRect(0, 0, 256, 256);
        const haloTex = new THREE.CanvasTexture(haloCanvas);
        haloTex.colorSpace = THREE.SRGBColorSpace;
        const haloMat = new THREE.MeshBasicMaterial({ map: haloTex, transparent: true, depthWrite: false });
        const haloPlane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), haloMat);
        haloPlane.position.set(v.x, v.y, depth / 2 + 1.01);
        haloPlane.rotation.x = -Math.PI / 2;
        haloPlane.scale.set(haloSize, haloSize, 1);
        markersGroup.add(haloPlane);
      }

      const labelCanvas = document.createElement('canvas');
      const ctx = labelCanvas.getContext('2d');
      const fontSize = 90;
      ctx.font = `600 ${fontSize}px Poppins, sans-serif`;
      const textWidth = ctx.measureText(city.name).width;
      labelCanvas.width = Math.ceil(textWidth + 50);
      labelCanvas.height = fontSize + 36;

      const ctx2 = labelCanvas.getContext('2d');
      ctx2.font = `600 ${fontSize}px Poppins, sans-serif`;
      // Softer shadow with reduced intensity
      ctx2.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx2.shadowBlur = 8;
      ctx2.shadowOffsetX = 0;
      ctx2.shadowOffsetY = 3;

      // Draw rounded background (special gradient + gold border for Madinah)
      const drawRoundedRect = (x, y, w, h, r) => {
        ctx2.beginPath();
        ctx2.moveTo(x + r, y);
        ctx2.lineTo(x + w - r, y);
        ctx2.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx2.lineTo(x + w, y + h - r);
        ctx2.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx2.lineTo(x + r, y + h);
        ctx2.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx2.lineTo(x, y + r);
        ctx2.quadraticCurveTo(x, y, x + r, y);
        ctx2.closePath();
      };

      if (isMadinah) {
        // Use same black background as other cities
        ctx2.fillStyle = 'rgba(0,0,0,0.45)';
        drawRoundedRect(0, 0, labelCanvas.width, labelCanvas.height, 18);
        ctx2.fill();
        // Keep subtle crescent icon on the left
        ctx2.save();
        ctx2.shadowColor = 'transparent';
        ctx2.translate(28, labelCanvas.height / 2);
        ctx2.fillStyle = 'rgba(255,255,255,0.95)';
        ctx2.beginPath();
        ctx2.arc(0, 0, 10, -0.6 * Math.PI, 0.6 * Math.PI);
        ctx2.fill();
        ctx2.globalCompositeOperation = 'destination-out';
        ctx2.beginPath();
        ctx2.arc(4, 0, 8, -0.6 * Math.PI, 0.6 * Math.PI);
        ctx2.fill();
        ctx2.globalCompositeOperation = 'source-over';
        ctx2.restore();
      } else {
        // Regular cities: soft dark rounded rect
        ctx2.fillStyle = 'rgba(0,0,0,0.45)';
        drawRoundedRect(0, 0, labelCanvas.width, labelCanvas.height, 18);
        ctx2.fill();
      }

      ctx2.shadowColor = 'transparent';
      ctx2.fillStyle = 'rgba(255, 255, 255, 0.95)';
      ctx2.textBaseline = 'middle';
      ctx2.textAlign = 'center';
      ctx2.fillText(city.name, labelCanvas.width / 2, labelCanvas.height / 2);

      const texture = new THREE.CanvasTexture(labelCanvas);
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      const labelMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
      const label = new THREE.Sprite(labelMat);
      const scale = isMadinah ? 0.30 : 0.26;
      label.scale.set(labelCanvas.width * scale, labelCanvas.height * scale, 1);
      label.position.set(v.x, v.y, depth / 2 + (isMadinah ? 100 : 88));
      markersGroup.add(label);
    });

    const updateMarkerSelection = () => {
      markersGroup.children.forEach((obj) => {
        // 2D sprite pin
        if (obj.userData && obj.userData.markerType === 'spritePin') {
          const isSelected = obj.userData.id === selectedCity;
          obj.material.map = isSelected ? obj.userData.selectedMap : obj.userData.normalMap;
          obj.material.needsUpdate = true;
          const w = isSelected ? (obj.userData.selW ?? 43) : (obj.userData.baseW ?? 36);
          const h = isSelected ? (obj.userData.selH ?? 56) : (obj.userData.baseH ?? 48);
          obj.scale.set(w, h, 1);
        }
      });
    };

    updateMarkerSelection();

    markersGroup.rotation.copy(plateMesh.rotation);
    plateGroup.add(markersGroup);

    // Render loop (no auto-rotation)
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

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

  useEffect(() => {
    const markersGroup = markersGroupRef.current;
    if (!markersGroup) return;
    markersGroup.children.forEach((obj) => {
      if (obj.userData && obj.userData.markerType === 'spritePin') {
        const isSelected = obj.userData.id === selectedCity;
        obj.material.map = isSelected ? obj.userData.selectedMap : obj.userData.normalMap;
        obj.material.needsUpdate = true;
        const w = isSelected ? (obj.userData.selW ?? 43) : (obj.userData.baseW ?? 36);
        const h = isSelected ? (obj.userData.selH ?? 56) : (obj.userData.baseH ?? 48);
        obj.scale.set(w, h, 1);
      }
    });
  }, [selectedCity]);

  return (
  <div ref={containerRef} className="w-full h-[560px] rounded-2xl border border-mwan-green/20 relative overflow-hidden card" />
  );
};

export default SaudiMap;

