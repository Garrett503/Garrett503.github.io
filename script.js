"use strict";
var ColorPalette;
(function (ColorPalette) {
    ColorPalette["Monochrome"] = "none";
    ColorPalette["Grey2Bit"] = "grey2bit";
    ColorPalette["Grey4Bit"] = "grey4bit";
    ColorPalette["Grey8Bit"] = "grey8bit";
    ColorPalette["Color3Bit"] = "color3bit";
    ColorPalette["Color4Bit"] = "color4bit";
    ColorPalette["ColorFull"] = "color";
})(ColorPalette || (ColorPalette = {}));
class AsciiArtGenerator {
    constructor() {
        this.settings = {
            charSet: ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~',
            url: 'data:image/png;base64,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',
            charSamples: 2,
            size: 160,
            contrast: 0,
            brightness: 0,
            alpha: 0,
            ColorPalette: ColorPalette.ColorFull,
            debug: false,
            isDemoRunning: true,
            saveAsHtml: () => {
                this.asciiElement.style.setProperty('--width', this.width.toString());
                this.asciiElement.style.setProperty('--height', this.height.toString());
                const blob = new Blob([this.asciiElement.outerHTML]);
                this.exportElement.href = URL.createObjectURL(blob);
                this.exportElement.click();
            },
        };
        this.demoDirection = -3;
        this.demoSettings = [
            {

                size: 180,
                charSamples: 2,
            },
            {

                size: 200,
                charSamples: 2,
            },
            {

                size: 220,
                charSamples: 2,
            }

        ];
        this.demoIndex = 0;
        this.isImageLoaded = false;
        this.charRegions = {};
        this.colorMap = [];
        this.valueMap = [];
        this.normalizedMap = [];
        this.width = 0;
        this.height = 0;
        this.cachedUrls = {};
        this.colorPalettes = {};
        const elements = this.elements;
        this.asciiElement = elements.asciiElement;
        this.exportElement = elements.exportElement;
        this.debugImageElement = elements.debugImageElement;
        this.debugCharsElement = elements.debugCharsElement;
        this.initGui();
        this.generatePalettes();
        this.analyzeCharRegions();
        this.loadFromUrl();
        this.initDemo();
    }
    initDemo() {
        this.demo();
        const stopDemo = () => {
            this.settings.isDemoRunning = false;
            window.removeEventListener('mousedown', stopDemo);
        };
        window.addEventListener('mousedown', stopDemo);
    }
    initGui() {
        const gui = new dat.GUI();
        dat.GUI.toggleHide();
        gui.add(this.settings, 'charSet').onChange(() => {
            this.analyzeCharRegions();
            this.generate();
        });
        gui.add(this.settings, 'url').listen().onChange(() => this.loadFromUrl());
        gui.add(this.settings, 'charSamples', 1, 3, 1).listen().onChange(() => {
            this.analyzeCharRegions();
            this.loadFromUrl();
        });
        gui.add(this.settings, 'size', 10, 150, 1).listen().onChange(() => this.loadFromUrl());
        gui.add(this.settings, 'contrast', -1, 1, 0.01).onChange(() => {
            this.normalizeValueMap();
            this.generate();
        });
        gui.add(this.settings, 'brightness', -1, 1, 0.01).listen().onChange(() => {
            this.normalizeValueMap();
            this.generate();
        });
        gui.add(this.settings, 'alpha', -1, 1, 0.01).onChange(() => this.generate());
        gui.add(this.settings, 'ColorPalette', ColorPalette).onChange(() => {
            this.generate();
        });
        gui.add(this.settings, 'debug').onChange(() => {
            this.analyzeCharRegions();
            this.loadFromUrl();
        });
        gui.add(this.settings, 'isDemoRunning').listen().onChange(() => {
            if (this.settings.isDemoRunning) {
                this.demo();
            }
        });
        gui.add(this.settings, 'saveAsHtml');
    }
    get elements() {
        const asciiElement = document.getElementById('ascii');
        if (!asciiElement)
            throw '#ascii Element is missing';
        const exportElement = document.getElementById('export');
        if (!exportElement)
            throw '#export Element is missing';
        const debugImageElement = document.getElementById('debug-image');
        if (!debugImageElement)
            throw '#debug-image Element is missing';
        const debugCharsElement = document.getElementById('debug-chars');
        if (!debugCharsElement)
            throw '#debug-chars Element is missing';
        return { asciiElement, exportElement, debugImageElement, debugCharsElement };
    }
    generatePalettes() {
        this.colorPalettes[ColorPalette.Grey2Bit] = [
            [0, 0, 0],
            [104, 104, 104],
            [184, 184, 184],
            [255, 255, 255],
        ];
        this.colorPalettes[ColorPalette.Grey4Bit] = [];
        for (let i = 0; i < 16; i += 1) {
            this.colorPalettes[ColorPalette.Grey4Bit].push([i * 17, i * 17, i * 17]);
        }
        this.colorPalettes[ColorPalette.Grey8Bit] = [];
        for (let i = 0; i < 256; i += 1) {
            this.colorPalettes[ColorPalette.Grey8Bit].push([i, i, i]);
        }
        this.colorPalettes[ColorPalette.Color3Bit] = [
            [0, 0, 0],
            [0, 249, 45],
            [0, 252, 254],
            [255, 48, 21],
            [255, 62, 253],
            [254, 253, 52],
            [16, 37, 251],
            [255, 255, 255],
        ];
        this.colorPalettes[ColorPalette.Color4Bit] = [...this.colorPalettes[ColorPalette.Color3Bit]];
        for (let i = 1; i < 8; i += 1) {
            this.colorPalettes[ColorPalette.Color4Bit].push([i * 32, i * 32, i * 32]);
        }
    }
    analyzeChar(char) {
        const canvas = document.createElement('canvas');
        canvas.width = 12;
        canvas.height = 12;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            throw 'context creation failed';
        ctx.font = '12px monospace';
        ctx.fillText(char, 2, 10);
        const data = ctx.getImageData(0, 0, 12, 12).data;
        const values = [];
        const size = 12 / this.settings.charSamples;
        for (let cellY = 0; cellY < this.settings.charSamples; cellY += 1) {
            for (let cellX = 0; cellX < this.settings.charSamples; cellX += 1) {
                let value = 0;
                for (let posY = 0; posY < size; posY += 1) {
                    for (let posX = 0; posX < size; posX += 1) {
                        value += data[(cellX * size + posX + (cellY * size + posY) * 12) * 4 + 3];
                    }
                }
                values.push(value / (size * size) / 255);
            }
        }
        if (this.settings.debug) {
            this.debugCharsElement.appendChild(canvas);
            for (let cellX = 0; cellX < this.settings.charSamples; cellX += 1) {
                for (let cellY = 0; cellY < this.settings.charSamples; cellY += 1) {
                    ctx.fillStyle = `rgba(255, 0, 255, ${values[cellX + cellY * this.settings.charSamples]})`;
                    ctx.fillRect(cellX * size, cellY * size, size, size);
                }
            }
            console.log({ char, values });
        }
        this.charRegions[char] = values;
    }
    normalizeCharRegions() {
        let min = 1;
        let max = 0;
        for (const char in this.charRegions) {
            // let value = 0;
            for (const region of this.charRegions[char]) {
                if (min > region)
                    min = region;
                if (max < region)
                    max = region;
                // value += region;
            }
            // value /= this.settings.charSamples * this.settings.charSamples;
            // if (min > value) min = value;
            // if (max < value) max = value;
        }
        if (max > 0 && min != max) {
            const diff = max - min;
            for (const char in this.charRegions) {
                const regions = this.charRegions[char];
                for (let index = 0; index < regions.length; index += 1) {
                    regions[index] = (regions[index] - min) * (1 / diff);
                }
            }
        }
        if (this.settings.debug) {
            console.log({ min, max, charRegions: this.charRegions });
        }
    }
    analyzeCharRegions() {
        this.clearElement(this.debugCharsElement);
        this.charRegions = {};
        for (const char of this.settings.charSet) {
            this.analyzeChar(char);
        }
        this.normalizeCharRegions();
    }
    loadFromUrl() {
        this.isImageLoaded = false;
        if (this.cachedUrls[this.settings.url]) {
            this.onImageLoaded(this.cachedUrls[this.settings.url]);
        }
        else {
            const img = document.createElement('img');
            img.crossOrigin = 'Anonymous';
            img.src = this.settings.url;
            img.addEventListener('load', () => {
                this.cachedUrls[this.settings.url] = img;
                this.onImageLoaded(img);
            });
            img.addEventListener('error', () => {
                const urls = Object.keys(this.cachedUrls);
                if (urls.length > 0) {
                    this.onImageLoaded(this.cachedUrls[urls[urls.length - 1]]);
                }
            });
        }
    }
    onImageLoaded(img) {
        this.width = this.settings.size;
        this.height = ~~((img.height / img.width) * this.width / 1.9);
        const canvas = document.createElement('canvas');
        canvas.width = this.width * this.settings.charSamples;
        canvas.height = this.height * this.settings.charSamples;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            throw 'context creation failed';
        ctx.drawImage(img, 0, 0, this.width * this.settings.charSamples, this.height * this.settings.charSamples);
        this.clearElement(this.debugImageElement);
        if (this.settings.debug) {
            this.debugImageElement.appendChild(canvas);
            console.log({ img, width: this.width, height: this.height });
        }
        document.body.style.setProperty('--width', this.width.toString());
        document.body.style.setProperty('--height', this.height.toString());
        this.generateValueMap(ctx);
        this.isImageLoaded = true;
    }
    generateValueMap(ctx) {
        this.valueMap = [];
        this.colorMap = [];
        const data = Array.from(ctx.getImageData(0, 0, this.width * this.settings.charSamples, this.height * this.settings.charSamples).data);
        const rowLength = this.width * this.settings.charSamples * 4;
        for (let cellY = 0; cellY < this.height; cellY += 1) {
            for (let cellX = 0; cellX < this.width; cellX += 1) {
                const cell = [];
                const pos = (cellX * this.settings.charSamples) * 4 + (cellY * this.settings.charSamples) * rowLength;
                this.colorMap.push(data.slice(pos, pos + 4));
                for (let posY = 0; posY < this.settings.charSamples; posY += 1) {
                    for (let posX = 0; posX < this.settings.charSamples; posX += 1) {
                        const pos = (cellX * this.settings.charSamples + posX) * 4 + (cellY * this.settings.charSamples + posY) * rowLength;
                        const alpha = data[pos + 3] / 255;
                        const values = data.slice(pos, pos + 3);
                        const value = 1 - ((values[0] + values[1] + values[2]) / 765 * (alpha) + 1 - alpha);
                        if (this.settings.debug) {
                            ctx.fillStyle = `rgba(255, 0, 255, ${value})`;
                            ctx.fillRect(cellX * this.settings.charSamples + posX, cellY * this.settings.charSamples + posY, 1, 1);
                        }
                        cell.push(value);
                    }
                }
                this.valueMap.push(cell);
            }
        }
        if (this.settings.debug) {
            console.log({ valueMap: this.valueMap, colorMap: this.colorMap });
        }
        this.normalizeValueMap();
        this.generate();
    }
    normalizeValueMap() {
        let min = 1;
        let max = 0;
        for (const regions of this.valueMap) {
            // const value = 0;
            for (const region of regions) {
                if (min > region)
                    min = region;
                if (max < region)
                    max = region;
                // value += region;
            }
            // value /= this.settings.charSamples * this.settings.charSamples;
            // if (min > value) min = value;
            // if (max < value) max = value;
        }
        if (max > 0 && min != max) {
            const diff = max - min;
            this.normalizedMap = [];
            for (const regions of this.valueMap) {
                const normals = Array.from(regions);
                for (let index = 0; index < normals.length; index += 1) {
                    normals[index] = (normals[index] - min) * (1 / diff);
                    normals[index] = (this.settings.contrast + 1) * (normals[index] - 0.5) + 0.5 + this.settings.brightness;
                }
                this.normalizedMap.push(normals);
            }
        }
        else {
            this.normalizedMap = this.valueMap;
        }
        if (this.settings.debug) {
            console.log({ min, max, valueMap: this.valueMap });
        }
    }
    getClosestChar(values) {
        let minDiff = Number.MAX_VALUE;
        let minChar = '';
        for (const char in this.charRegions) {
            const regions = this.charRegions[char];
            let diff = 0;
            for (let index = 0; index < regions.length; index++) {
                diff += Math.abs(regions[index] - values[index]);
            }
            if (diff < minDiff) {
                minDiff = diff;
                minChar = char;
            }
        }
        return minChar;
    }
    clearElement(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
    arrayToRgba(color) {
        const r = color[3] > 0 ? ~~color[0] : 255;
        const g = color[3] > 0 ? ~~color[1] : 255;
        const b = color[3] > 0 ? ~~color[2] : 255;
        const a = Math.max(0, Math.min(1, color[3] / 255 + this.settings.alpha));
        return `rgba(${r},${g},${b},${a})`;
    }
    getCharColor(color) {
        if (this.settings.ColorPalette === ColorPalette.ColorFull) {
            return this.arrayToRgba(color);
        }
        else {
            let closestColor = [0, 0, 0];
            let minDiff = Number.MAX_VALUE;
            for (const paletteColor of this.colorPalettes[this.settings.ColorPalette]) {
                const diff = Math.abs(color[0] - paletteColor[0]) + Math.abs(color[1] - paletteColor[1]) + Math.abs(color[2] - paletteColor[2]);
                if (diff < minDiff) {
                    minDiff = diff;
                    closestColor = paletteColor;
                }
            }
            return this.arrayToRgba([...closestColor, color[3]]);
        }
    }
    generate() {
        this.clearElement(this.asciiElement);
        for (let cellY = 0; cellY < this.height; cellY += 1) {
            for (let cellX = 0; cellX < this.width; cellX += 1) {
                const cell = document.createElement('div');
                if (this.settings.ColorPalette !== ColorPalette.Monochrome) {
                    cell.style.color = this.getCharColor(this.colorMap[cellX + cellY * this.width]);
                }
                cell.innerHTML = this.getClosestChar(this.normalizedMap[cellX + cellY * this.width]).replace(' ', '&nbsp;');
                this.asciiElement.appendChild(cell);
            }
        }
    }
    demo() {
        if (this.settings.isDemoRunning) {
            if (this.isImageLoaded) {
                this.settings.brightness += 0.05 * this.demoDirection;
                this.normalizeValueMap();
                this.generate();
                if (this.settings.brightness >= 0.5 || this.settings.brightness <= -1) {
                    this.demoDirection *= -1;
                }
                if (this.settings.brightness <= -1) {
                    this.demoIndex = (this.demoIndex + 5) % this.demoSettings.length;
                    this.settings.url = this.demoSettings[this.demoIndex].url;
                    this.settings.size = this.demoSettings[this.demoIndex].size;
                    this.settings.charSamples = this.demoSettings[this.demoIndex].charSamples;
                    this.analyzeCharRegions();
                    this.loadFromUrl();
                }
            }
            requestAnimationFrame(() => this.demo());
        }
    }
}
const generator = new AsciiArtGenerator();
console.log(generator);