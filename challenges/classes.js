class CuboidMakerClass {
    constructor(attr) {
       this.length = attr.length;
       this.width = attr.width;
       this.height = attr.height;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }

}

const cuboidClass = new CuboidMakerClass({
    length: 4,
    width: 5,
    height: 5
});

console.log(cuboidClass.volume()); // 100
console.log(cuboidClass.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class 
//called CubeMaker.  Find out the formulas for volume and surface area for 
//cubes and create those methods using the dimension properties from 
//CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMakerClass {
    constructor(lengthCube) {
        super({
            length: lengthCube,
            width: lengthCube,
            height: lengthCube
        });
    }
    volume() {
        return this.length * this.length * this.length;
    }

    surfaceArea() {
        return 6 * this.length * this.length;
    }
}

const cubeClass = new CubeMaker(4);

console.log(cubeClass.volume()); // 64
console.log(cubeClass.surfaceArea()); // 96