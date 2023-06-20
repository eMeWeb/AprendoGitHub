function CrearDocumento(){

  var doc = DocumentApp.create('Mi Primer Documento en appscript');

  doc.getBody().appendParagraph('Esto meja muchooo');

}