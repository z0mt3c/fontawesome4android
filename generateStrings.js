var fs = require('fs');

var data = fs.readFileSync('./app/bower_components/font-awesome/less/variables.less').toString();
var regex = /fa-var-([^:]*):[^\"]*\"\\f([^\"]*)/g;
var result;

var finalData = '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n';

while (result = regex.exec(data)) {
    //console.log(result);
    var key = result[1].replace(/-/g,'_');
    var def = '<string name="icon_'+key+'">&#xf'+result[2]+';</string>';
    finalData += def + '\n';
}

finalData += '</resources>';

fs.writeFileSync('./fontawesome.xml', finalData, {flag: 'w'});
console.log('Done');