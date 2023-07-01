<script>
  document.getElementById('mG61Hd').addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault(); // Prevent form submission

    var Room = document.getElementsByName('Room')[0].value;
    var Name = document.getElementsByName('Name')[0].value;

    google.script.run.submitData(Room, Name); // Call Google Apps Script function
  }
</script>
