const generateBtn = document.getElementById('generateBtn');
const colorBlock1 = document.getElementById('color1');
const colorBlock2 = document.getElementById('color2');
const colorBlock3 = document.getElementById('color3');

    // Function to generate a random color
    function generateRandomColor() {
      return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }

    // Function to adjust color brightness (lighter or darker variants)
    function adjustBrightness(hex, percent) {
      let r = parseInt(hex.slice(1, 3), 16);
      let g = parseInt(hex.slice(3, 5), 16);
      let b = parseInt(hex.slice(5, 7), 16);

      r = Math.min(255, Math.max(0, Math.floor(r * (1 + percent / 100))));
      g = Math.min(255, Math.max(0, Math.floor(g * (1 + percent / 100))));
      b = Math.min(255, Math.max(0, Math.floor(b * (1 + percent / 100))));

      return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }

    // Function to generate a 3-variant color palette with strong contrast
    function generatePalette() {
      const baseColor = generateRandomColor();
      const lighter = adjustBrightness(baseColor, 40);  // 40% lighter
      const darker = adjustBrightness(baseColor, -60);   // 60% darker

      // Set the colors in the palette blocks
      colorBlock1.style.backgroundColor = lighter;
      colorBlock1.textContent = lighter;
      colorBlock2.style.backgroundColor = baseColor;
      colorBlock2.textContent = baseColor;
      colorBlock3.style.backgroundColor = darker;
      colorBlock3.textContent = darker;
    }

    // Add click event to button to generate a new palette
    generateBtn.addEventListener('click', generatePalette);

    // Generate an initial palette on page load
    window.onload = generatePalette;

   