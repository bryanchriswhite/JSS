var VARS_REGEX = /\/\* vars.+\*\//
  , link = document.getElementById('style')
  , href = link.href
  , click = document.getElementById('click')
  , initialVars = {}
  , css
  ;

$.get(href, function(data) {
  css = data.replace(VARS_REGEX, '');
  var varString = data.match(VARS_REGEX)
    , varLineArray = varString.split('\n')
    ;

  varLineArray.forEach(function(line) {
    var pair = line.split('\s?=\s?');
    initialVars[pair[0]] = eval(pair[1]);
  });


  update(data, initialVars);
});

function update(css, vars) {
  link.href = 'data:;base64,' + window.btoa(jssify(css, vars));
}

function jssify(css, vars) {
  return css.replace(/{{(.+)}}/, function(match, expression) {
    return eval(expression.replace(/#(\w+)/, function(subMatch, variableName) {
      return vars[variableName];
    }))
  })
}

click.addEventListener('click', function(event) {
  window.initialVars.borderValue = '1px solid red';
  update(css, initialVars);
});
