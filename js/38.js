
// object destructuring

const band = {
    bandname : "vicky verma",
    famousSong : "stairway to heaven",
    year : 1968,
    anotherfamoussong:"dil ami ho tum saaso mai tum"
};
let { bandname,famousSong, ...restprops} =band;
console.log(bandname,restprops);