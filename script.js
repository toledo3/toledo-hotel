<script>
  document.getElementById('myForm').addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault(); // Prevent form submission

    var name = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[0].value;

    google.script.run.submitData(name, email); // Call Google Apps Script function
  }
</script>
