document.getElementById('upload-type').addEventListener('change', function () {
  const uploadType = document.getElementById('upload-type').value;
  const uploadFile = document.getElementById('upload-file');
  const uploadLink = document.getElementById('upload-link');
  const inputText = document.getElementById('input-text');

  if (uploadType === 'pdf') {
    uploadFile.style.display = 'block';
    uploadLink.style.display = 'none';
    inputText.style.display = 'none';
    uploadFile.required = true;
    uploadLink.required = false;
    inputText.required = false;
  } else if (uploadType === 'link') {
    uploadFile.style.display = 'none';
    uploadLink.style.display = 'block';
    inputText.style.display = 'none';
    uploadFile.required = false;
    uploadLink.required = true;
    inputText.required = false;
  } else {
    uploadFile.style.display = 'none';
    uploadLink.style.display = 'none';
    inputText.style.display = 'block';
    uploadFile.required = false;
    uploadLink.required = false;
    inputText.required = true;
  }
});

document.getElementById('process-btn').addEventListener('click', function () {
  const text = document.getElementById('input-text').value;
  const uploadType = document.getElementById('upload-type').value;
  const uploadFile = document.getElementById('upload-file').files[0];
  const uploadLink = document.getElementById('upload-link').value;

  if (uploadType === 'pdf' && !uploadFile) {
    alert('Please upload a PDF file!');
    return;
  }

  if (uploadType === 'link' && !uploadLink) {
    alert('Please enter a link!');
    return;
  }

  if (!uploadType && !text) {
    alert('Please enter some text!');
    return;
  }

  // Display placeholders for future NER and Attribute Extraction Results
  document.getElementById('entity-results').innerHTML = "<p><strong>Entities:</strong> Entity results will be displayed here.</p>";
  document.getElementById('attribute-results').innerHTML = "<p><strong>Attributes:</strong> Attribute results will be displayed here.</p>";
});
