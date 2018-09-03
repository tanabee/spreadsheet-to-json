var spreadSheetId = '';// スプレッドシート ID
var spreadSheetTabName = '';// スプレッドシートのタブ名

function doGet(e) {
  var rows = SpreadsheetApp
    .openById(spreadSheetId)
    .getSheetByName(spreadSheetTabName)
    .getDataRange()
    .getValues();
  var keys = rows.shift();
  var data = rows.map(function(row) {
    var obj = {};
    row.forEach(function(element, i) {
      obj[keys[i]] = element;
    });
    return obj;
  });
  return ContentService.createTextOutput(JSON.stringify(data))
                       .setMimeType(ContentService.MimeType.JSON);
}
