document.getElementById('submitBtn').addEventListener('click', function () {
    const drink = document.getElementById('drink').value;
    const shortActivity = document.getElementById('shortActivity').value;
    const activity = document.getElementById('activity').value;
    const dinner = document.getElementById('dinner').value;
  
    // Redirect to the summary page with data as query parameters
    window.location.href = `summary.html?drink=${encodeURIComponent(drink)}&shortActivity=${encodeURIComponent(shortActivity)}&activity=${encodeURIComponent(activity)}&dinner=${encodeURIComponent(dinner)}`;
  });
  