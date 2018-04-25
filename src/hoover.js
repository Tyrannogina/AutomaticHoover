module.exports = class Hoover {
    constructor(x, y) {
        this.position = {x: x, y: y}
        this.cleanedPatches = 0
    }

    /**
     * Moves the hover on the floorplan and if the spot is dirty it cleans it and counts it as cleaned
     * @param {string} instructions - String with cardinal directions as in 'NWEEEWSN'
     */
    executeInstructions(instructions, room) {
        for (let i = 0; i < instructions.length; i++) {
            this.xLimit = room.floorplan.length
            this.yLimit = room.floorplan[0].length
            this.move(instructions[i])
            if (room.floorplan[this.position.x][this.position.y] === 1) {
                room.removeDirtPatch(this.position.x, this.position.y)
                this.cleanedPatches++
            }
        }
    }

    /**
     * Performs one 'square' move depending on a cardinal direction (N, S, E or W)
     * @param direction
     */
    move(direction) {
        switch (direction) {
            case 'N':
                if (this.position.y < this.yLimit) {
                    this.position.y++
                }
                break
            case 'E':
                if (this.position.x < this.xLimit) {
                    this.position.x++
                }
                break
            case 'S':
                if (this.position.y > 0) {
                    this.position.y--
                }
                break
            case 'W':
                if (this.position.x > 0) {
                    this.position.x--
                }
                break
            default:
            // Return error?
        }
    }

}
