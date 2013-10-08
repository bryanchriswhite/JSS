/* vars
width
*/

p {
    border: {{borderValue}};
    transition: border 500ms ease;
}

div.main {
  width: 500px;
  height: 500px;
}

div.half {
  display: inline-block;
  width: 49%;
  height: 100%;
  border: 1px solid blue;
}

div.half>div {
  width: 100%;
  height: 50%;
  border: 1px solid green;
/*  font-size: {{baseSize * }}*/
}

.container {
  width: 250px;
  height: 250px;
  border: 2px solid red;
}

.small {
  width: 10%;
  height: 10%;
}

.medium {
  width: 50%;
  height: 50%;
}

.large {
  width: 100%;
  height: 100%;
}

.font {
  border: 1px solid green;
  font-size: {{16 * #width/100}};
}
