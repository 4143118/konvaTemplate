// create the Konva stage
const stage = new Konva.Stage({
    container: "konva-stage",
    width: 500,
    height: 500,
});

const firstlayer = new Konva.Layer();

const circle= new Konva.Circle({
    x: 250,
    y: 250,
    radius: 50,
    fill: "coral"
});

firstlayer.add(circle);
stage.add(firstlayer);
const square = new Konva
