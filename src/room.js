module.exports = class Room {
    constructor(x, y) {
        this.floorplan = []
        this.buildFloorplan(x, y)
    }

    /**
     * Creates the floorplan as an array of arrays filled with 0s (clean spot)
     * @param {number} x - Width of the room
     * @param {number} y - Length of the room
     */
    buildFloorplan(x, y) {
        for (let i = 0; i < x; i++) {
            this.floorplan.push((new Array(y).fill(0)))
        }
    }

    /**
     * Adds a dirt patch to the floorplan (1 is a dirty spot) on the coordinates received
     * @param {number} x
     * @param {number} y
     */
    addDirtPatch(x, y) {
        this.floorplan[x][y] = 1
    }

    /**
     * Removes dirt patch from the floorplan (back to 0) on the coordinates received
     * @param {number} x
     * @param {number} y
     */
    removeDirtPatch(x, y) {
        this.floorplan[x][y] = 0
    }
}
