function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
document.addEventListener("DOMContentLoaded", function () {
  // Select all forms with the class "inputForm"
  const forms = document.querySelectorAll(".inputForm");
  const resultList = document.querySelector(".result-list");
  // const buttons = document.querySelectorAll(".item-button");
  // 

  // 

  forms.forEach((form) => {
    // Attach a click event listener to each form
    form.addEventListener("submit", function (event) {
      // Prevent the default form submission
      event.preventDefault();
      // Retrieve the input values for calculation
      const shape = form.getAttribute("data-shape");

      if (event.target[0].value === "" || event.target[1].value === "") {
        const message = `For getting the area of ${shape}, please fill in all fields.`;
        alert(message);
        return;
      }
      // console.log('event', event.target[0].value);
      // console.log('event', event.target[1].value);

      // Perform your calculation based on the shape and input values
      let area;
      switch (shape) {
        case "triangle":
          const tBase = parseFloat(event.target[0].value);
          const tHeight = parseFloat(event.target[1].value);
          area = 0.5 * tBase * tHeight;
          break;
        case "rectangle":
          const width = parseFloat(event.target[0].value);
          const length = parseFloat(event.target[1].value);
          area = width * length;
          break;
        case "parallelogram":
          const pBase = parseFloat(event.target[0].value);
          const pHeight = parseFloat(event.target[1].value);
          area = pBase * pHeight;
          break;
        case "rhombus":
          const rDiagonal1 = parseFloat(event.target[0].value);
          const rDiagonal2 = parseFloat(event.target[1].value);
          area = (rDiagonal1 * rDiagonal2) / 2;
          break;
        case "pentagon":
          const pSide = parseFloat(event.target[0].value);
          const pApothem = parseFloat(event.target[1].value);
          area = (pSide * pApothem) / 2;
          break;
        case "ellipse":
          const eMajorRadius = parseFloat(event.target[0].value);
          const eMinorRadius = parseFloat(event.target[1].value);
          area = 3.14 * eMajorRadius * eMinorRadius;
          break;
        default:
          break;
      }

      // Display area in the result list
      // console.log(`Area of ${shape}: ${area} square cm`);
      const listItem = document.createElement("li");
      const button = document.createElement("button");
      button.innerHTML = "Covert to m<sup>2</sup>";
      button.classList.add("item-button","bg-blue-600", "text-white", "py-2", "px-5", "rounded-lg", "leading-7", "font-medium", "text-sm");
      listItem.classList.add(
        "flex",
        "items-center",
        "justify-between",
        "w-full",
        "my-2",
      );
      listItem.innerHTML = `<span>${capitaliseFirstLetter(
        shape
      )} </span> <p><span class="area-value" data-unit="cm">${area}</span> cm<sup>2</sup></p> `;
      listItem.appendChild(button);
      resultList.appendChild(listItem);

          // Add click event listener to the button
          button.addEventListener("click", function () {
           
            if(listItem.querySelector(".area-value").getAttribute("data-unit") === "cm") {
              // Convert area to square meters
              const areaInSquareMeters = area / 10000; // 1 cm^2 = 0.0001 m^2
              // Update the value in the result list
              listItem.querySelector(".area-value").textContent = areaInSquareMeters.toFixed(4); 
              listItem.querySelector(".area-value").setAttribute("data-unit", "m");
              // change the button text
              button.innerHTML = "Covert to cm<sup>2</sup>";
            } else {
              // Convert area to square meters
              const areaInSquareMeters = area / 10000; // 1 cm^2 = 0.0001 m^2
              // Update the value in the result list
              listItem.querySelector(".area-value").textContent = area; 
              listItem.querySelector(".area-value").setAttribute("data-unit", "cm");
              // change the button text
              button.innerHTML = "Covert to m<sup>2</sup>";
            }

          });

    });
  });

});
