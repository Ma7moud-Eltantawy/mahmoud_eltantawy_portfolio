import fs from 'fs';
import path from 'path';

const imgPath = './src/assets/mahmoud.jpg';
const buffer = fs.readFileSync(imgPath);
const base64 = buffer.toString('base64');
const content = `export const mahmoudPhoto = "data:image/jpeg;base64,${base64}";\n`;

fs.writeFileSync('./src/assets/mahmoudBase64.js', content);
console.log('Base64 photo generated successfully!');
