<template>
  <canvas class="border w-full" ref="canvasRef"></canvas>
</template>

<script>
// Brush colour and size
const colour = "#fffff";
const strokeWidth = 18;

export default {
  data() {
    return {
      latestPoint: null,
      drawing: false,
      canvas: null,
      context: null,
    };
  },
  mounted() {
    // Set up our drawing context
    this.canvas = this.$refs.canvasRef;
    this.context = this.canvas.getContext("2d");

    // Register event handlers
    this.canvas.addEventListener("mousedown", this.mouseDown, false);
    this.canvas.addEventListener("mouseup", this.endStroke, false);
    this.canvas.addEventListener("mouseout", this.endStroke, false);
    this.canvas.addEventListener("mouseenter", this.mouseEnter, false);
  },
  methods: {
    continueStroke(newPoint) {
      this.context.beginPath();
      this.context.moveTo(this.latestPoint[0], this.latestPoint[1]);
      this.context.strokeStyle = colour;
      this.context.lineWidth = strokeWidth;
      this.context.lineCap = "round";
      this.context.lineJoin = "round";
      this.context.lineTo(newPoint[0], newPoint[1]);
      this.context.stroke();

      this.latestPoint = newPoint;
    },
    startStroke(point) {
      this.drawing = true;
      this.latestPoint = point;
    },
    mouseMove(evt) {
      if (!this.drawing) {
        return;
      }
      this.continueStroke([evt.offsetX, evt.offsetY]);
    },
    mouseDown(evt) {
      if (this.drawing) {
        return;
      }
      evt.preventDefault();
      this.canvas.addEventListener("mousemove", this.mouseMove, false);
      this.startStroke([evt.offsetX, evt.offsetY]);
    },
    mouseEnter(evt) {
      if (!this.mouseButtonIsDown(evt.buttons) || this.drawing) {
        return;
      }
      this.mouseDown(evt);
    },
    endStroke(evt) {
      if (!this.drawing) {
        return;
      }
      this.drawing = false;
      evt.currentTarget.removeEventListener("mousemove", this.mouseMove, false);
    },
    mouseButtonIsDown(buttons) {
      const BUTTON = 0b01;
      return (BUTTON & buttons) === BUTTON;
    },
  },
};
</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>
