/* vars
halfHeight = .50 * docHeight
halfWidth = .50 * docWidth
marginRight = 15
variantImagesWidth = 100
heroWidth = 400
*/


.modal-backdrop {
  position: fixed;
  height: docHeight;
  width: docWidth;
  top: 0;
  left: 0;
  background: rgba(24,24,24, 0.8);
}

.modal {
  z-index: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: {{halfHeight}}px;
  width: {{halfWidth}}px;
  margin: auto;
  min-width: 950px;
  min-height: 700px;
  overflow: hidden;
  background: white;
  padding: 20px;
}

.variant-images,
.hero,
.details {
  display: inline-block;
  vertical-align: top;
  margin-right: {{marginRight}}px;
}

.variant-images {
  width: {{variantImagesWidth}}px;
}

.hero {
  width: {{heroWidth}}px;
}

.details {
  margin-right: 0;
  width: halfWidth - {{2 * marginRight + heroWidth + variantImagesWidth}};
}