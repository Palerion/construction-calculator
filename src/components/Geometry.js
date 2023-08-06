import React, { Component } from "react";

class Geometry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sphereRadius: 0,
      sphereResults: { surfaceArea: 0, volume: 0 },
      cylinderRadius: 0,
      cylinderHeight: 0,
      cylinderResults: { surfaceArea: 0, volume: 0 },
      coneRadius: 0,
      coneHeight: 0,
      coneResults: { surfaceArea: 0, volume: 0 },
      prismLength: 0,
      prismWidth: 0,
      prismHeight: 0,
      prismResults: { surfaceArea: 0, volume: 0 },
      pyramidBase: 0,
      pyramidBaseHeight: 0,
      pyramidHeight: 0,
      pyramidResults: { surfaceArea: 0, volume: 0 },
      triangularPrismBase: 0,
      triangularPrismHeight: 0,
      triangularPrismLength: 0,
      triangularPrismResults: { surfaceArea: 0, volume: 0 },
      rectangularPyramidLength: 0,
      rectangularPyramidWidth: 0,
      rectangularPyramidHeight: 0,
      rectangularPyramidResults: { surfaceArea: 0, volume: 0 },
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  calculateSphere = () => {
    const radius = this.state.sphereRadius;
    this.setState({
      sphereResults: {
        surfaceArea: 4 * Math.PI * Math.pow(radius, 2),
        volume: (4 / 3) * Math.PI * Math.pow(radius, 3),
      },
    });
  };

  calculateCylinder = () => {
    const radius = this.state.cylinderRadius;
    const height = this.state.cylinderHeight;
    this.setState({
      cylinderResults: {
        surfaceArea: 2 * Math.PI * radius * (radius + height),
        volume: Math.PI * Math.pow(radius, 2) * height,
      },
    });
  };

  calculateCone = () => {
    const radius = this.state.coneRadius;
    const height = this.state.coneHeight;
    const slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    this.setState({
      coneResults: {
        surfaceArea: Math.PI * radius * (radius + slantHeight),
        volume: (1 / 3) * Math.PI * Math.pow(radius, 2) * height,
      },
    });
  };

  calculatePrism = () => {
    const length = this.state.prismLength;
    const width = this.state.prismWidth;
    const height = this.state.prismHeight;
    this.setState({
      prismResults: {
        surfaceArea: 2 * (width * length + height * length + height * width),
        volume: width * length * height,
      },
    });
  };

  calculatePyramid = () => {
    const base = this.state.pyramidBase;
    const baseHeight = this.state.pyramidBaseHeight;
    const pyramidHeight = this.state.pyramidHeight;
    this.setState({
      pyramidResults: {
        surfaceArea:
          base * baseHeight +
          3 *
            base *
            Math.sqrt((base / 2) * (base / 2) + pyramidHeight * pyramidHeight),
        volume: (base * baseHeight * pyramidHeight) / 6,
      },
    });
  };

  calculateTriangularPrism = () => {
    const base = this.state.triangularPrismBase;
    const height = this.state.triangularPrismHeight;
    const length = this.state.triangularPrismLength;
    this.setState({
      triangularPrismResults: {
        surfaceArea:
          base * height +
          (2 * (base + Math.sqrt(base * base + 4 * height * height)) * length) /
            2,
        volume: (base * height * length) / 2,
      },
    });
  };

  calculateRectangularPyramid = () => {
    const length = this.state.rectangularPyramidLength;
    const width = this.state.rectangularPyramidWidth;
    const height = this.state.rectangularPyramidHeight;
    const slantHeight = Math.sqrt(height * height + (length * length) / 4);
    const slantHeight2 = Math.sqrt(height * height + (width * width) / 4);
    this.setState({
      rectangularPyramidResults: {
        surfaceArea:
          length * width + length * slantHeight + width * slantHeight2,
        volume: (length * width * height) / 3,
      },
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Construction Shapes Calculator</h1>
        <div>
          <h2>Sphere</h2>
          <p>Radius: {this.state.sphereRadius}</p>
          <input
            type="number"
            name="sphereRadius"
            value={this.state.sphereRadius}
            onChange={this.handleInputChange}
            placeholder="Radius"
          />
          <button onClick={this.calculateSphere}>Calculate</button>
          <p>Surface Area: {this.state.sphereResults.surfaceArea}</p>
          <p>Volume: {this.state.sphereResults.volume}</p>
        </div>

        <div>
          <h2>Cylinder</h2>
          <p>Radius: {this.state.cylinderRadius}</p>
          <p>Height: {this.state.cylinderHeight}</p>
          <input
            type="number"
            name="cylinderRadius"
            value={this.state.cylinderRadius}
            onChange={this.handleInputChange}
            placeholder="Radius"
          />
          <input
            type="number"
            name="cylinderHeight"
            value={this.state.cylinderHeight}
            onChange={this.handleInputChange}
            placeholder="Height"
          />
          <button onClick={this.calculateCylinder}>Calculate</button>
          <p>Surface Area: {this.state.cylinderResults.surfaceArea}</p>
          <p>Volume: {this.state.cylinderResults.volume}</p>
        </div>

        <div>
          <h2>Cone</h2>
          <p>Radius: {this.state.coneRadius}</p>
          <p>Height: {this.state.coneHeight}</p>
          <input
            type="number"
            name="coneRadius"
            value={this.state.coneRadius}
            onChange={this.handleInputChange}
            placeholder="Radius"
          />
          <input
            type="number"
            name="coneHeight"
            value={this.state.coneHeight}
            onChange={this.handleInputChange}
            placeholder="Height"
          />
          <button onClick={this.calculateCone}>Calculate</button>
          <p>Surface Area: {this.state.coneResults.surfaceArea}</p>
          <p>Volume: {this.state.coneResults.volume}</p>
        </div>

        <div>
          <h2>Rectangular Prism</h2>
          <p>Length: {this.state.prismLength}</p>
          <p>Width: {this.state.prismWidth}</p>
          <p>Height: {this.state.prismHeight}</p>
          <input
            type="number"
            name="prismLength"
            value={this.state.prismLength}
            onChange={this.handleInputChange}
            placeholder="Length"
          />
          <input
            type="number"
            name="prismWidth"
            value={this.state.prismWidth}
            onChange={this.handleInputChange}
            placeholder="Width"
          />
          <input
            type="number"
            name="prismHeight"
            value={this.state.prismHeight}
            onChange={this.handleInputChange}
            placeholder="Height"
          />
          <button onClick={this.calculatePrism}>Calculate</button>
          <p>Surface Area: {this.state.prismResults.surfaceArea}</p>
          <p>Volume: {this.state.prismResults.volume}</p>
        </div>

        <div>
          <h2>Triangular Prism</h2>
          <p>Base: {this.state.triangularPrismBase}</p>
          <p>Height: {this.state.triangularPrismHeight}</p>
          <p>Length: {this.state.triangularPrismLength}</p>
          <input
            type="number"
            name="triangularPrismBase"
            value={this.state.triangularPrismBase}
            onChange={this.handleInputChange}
            placeholder="Base"
          />
          <input
            type="number"
            name="triangularPrismHeight"
            value={this.state.triangularPrismHeight}
            onChange={this.handleInputChange}
            placeholder="Height"
          />
          <input
            type="number"
            name="triangularPrismLength"
            value={this.state.triangularPrismLength}
            onChange={this.handleInputChange}
            placeholder="Length"
          />
          <button onClick={this.calculateTriangularPrism}>Calculate</button>
          <p>Surface Area: {this.state.triangularPrismResults.surfaceArea}</p>
          <p>Volume: {this.state.triangularPrismResults.volume}</p>
        </div>

        <div>
          <h2>Rectangular Pyramid</h2>
          <p>Length: {this.state.rectangularPyramidLength}</p>
          <p>Width: {this.state.rectangularPyramidWidth}</p>
          <p>Height: {this.state.rectangularPyramidHeight}</p>
          <input
            type="number"
            name="rectangularPyramidLength"
            value={this.state.rectangularPyramidLength}
            onChange={this.handleInputChange}
            placeholder="Length"
          />
          <input
            type="number"
            name="rectangularPyramidWidth"
            value={this.state.rectangularPyramidWidth}
            onChange={this.handleInputChange}
            placeholder="Width"
          />
          <input
            type="number"
            name="rectangularPyramidHeight"
            value={this.state.rectangularPyramidHeight}
            onChange={this.handleInputChange}
            placeholder="Height"
          />
          <button onClick={this.calculateRectangularPyramid}>Calculate</button>
          <p>
            Surface Area: {this.state.rectangularPyramidResults.surfaceArea}
          </p>
          <p>Volume: {this.state.rectangularPyramidResults.volume}</p>
        </div>

        <div>
          <h2>Triangular Pyramid</h2>
          <p>Base: {this.state.pyramidBase}</p>
          <p>Base Height: {this.state.pyramidBaseHeight}</p>
          <p>Pyramid Height: {this.state.pyramidHeight}</p>
          <input
            type="number"
            name="pyramidBase"
            value={this.state.pyramidBase}
            onChange={this.handleInputChange}
            placeholder="Base"
          />
          <input
            type="number"
            name="pyramidBaseHeight"
            value={this.state.pyramidBaseHeight}
            onChange={this.handleInputChange}
            placeholder="Base Height"
          />
          <input
            type="number"
            name="pyramidHeight"
            value={this.state.pyramidHeight}
            onChange={this.handleInputChange}
            placeholder="Pyramid Height"
          />
          <button onClick={this.calculatePyramid}>Calculate</button>
          <p>Surface Area: {this.state.pyramidResults.surfaceArea}</p>
          <p>Volume: {this.state.pyramidResults.volume}</p>
        </div>
      </div>
    );
  }
}

export default Geometry;
