# Hiro Builder

**Interactive 3D Vehicle Customizer**

Customize your vehicle in real-time with an intuitive 3D interface.

---

## How to Use

### Step 1: Select Your Vehicle Size
- Browse available vehicle options (Marv S, Marv M, Marv L)
- Click on your desired vehicle to proceed

### Step 2: Customize Your Vehicle
Once you select a vehicle, you can:

1. **Choose Body Style** - Select from 3 body options:
   - BODY 1 - Container
   - BODY 2 - Open Box
   - BODY 3 - Flat Bed

2. **Pick Car Color** - Use the color picker to customize your vehicle's main color

3. **Pick Container Color** - Select the color for your cargo container/body

4. **Auto Rotate** - Toggle camera rotation for a 360° view

5. **Back to Home** - Return to vehicle selection

---

## Tech Stack

- **React 18** - UI Framework
- **Three.js** - 3D Graphics
- **Vite** - Build Tool

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Server runs at: `http://localhost:5174`

---

## Project Structure

```
├── components/
│   ├── App.jsx              # Main app & state management
│   ├── SelectVehicle.jsx    # Vehicle selection screen
│   ├── Canvas.jsx           # 3D editor view
│   ├── Buttons.jsx          # Customization controls
│   └── ...
├── hooks/
│   ├── useMaterialProperties.js
│   └── useAnimateHeight.js
├── vehicleConfigs.js        # Vehicle data
└── main.jsx
```

---

## Features

- Multiple vehicle models to choose from
- Real-time 3D preview
- Body style selection (3 options)
- Custom car color
- Custom container color
- Auto-rotate camera view

---

## License

MIT License - see LICENSE file for details

---

Built using React and Three.js