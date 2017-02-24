$().ready(() => {
Let displayMenu = (data) => {
  console.log(data);
}
  $('form').submit(function(event) {
    event.preventDefault();
    let diet = $('#diet');
    let exclude = $('#excludes');
    let targetCalories = $('#calories');
    let timeFrame = $('#length');
    $.ajax({
      url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate?diet=vegetarian&exclude=shellfish+olives&targetCalories=2000&timeFrame=day",
      // url: `https://spoonacular-recipe-food-nutrition-vl.p.mashape.com/recipes/mealplans/generate?diet=${diet}&exclude=${exclude}&targetCalories=${targetCalories}&timeFrame=${timeFrame}`,
      type: 'GET',
      dataType: 'json',
      success: function(data) { console.log(data); },
      error: function(err) { console.log(err); },
      beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "0PAFuTUgNnmshTiXtoGA99RngNJxp1QWghAjsnZgHGsB5IUPwr");
      }
  });
})
})
