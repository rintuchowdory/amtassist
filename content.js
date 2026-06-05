const fields = document.querySelectorAll("input");

fields.forEach(field => {
  const name = (field.name || "").toLowerCase();

  if (name.includes("familienstand")) {
    field.title =
      "Familienstand = Marital Status";
  }

  if (name.includes("steuer")) {
    field.title =
      "Steuer-ID = German Tax Identification Number";
  }
});
