$().ready(() => {

    // const meals = [];
    // const renderMeals = function() {
    //     $('#dailyPlan').empty();
    //     for (const meal of meals) {
    //         const $col = $('<div>').addClass('col s4');
    //         const $card = $('<div>').addClass('card hoverable');
    //         const $content = $('<div').addClass('card-content');
    //         const $title = $('<div').addClass('card-title truncate');
    //         $title.attr({
    //             'data-position': 'top',
    //             'data-tooltip': recipe.title
    //         });
    //         $title.tooltip({
    //             delay: 50
    //         }).text(recipe.title);
    //         const $picture = $('<img>').addClass('picture');
    //         $picture.attr({
    //             src: recipe.picture,
    //             alt: `${recipe.picture}`
    //         });
    //         $content.append($title, $picture);
    //         $card.append($content);
    //
    //         const $action = $('div').addClass('card-action center');
    //         const $readyInMinutes = $('<a>');
    //
    //         $readyInMinutes.addClass('waves-effect waves-light btn modal-trigger');
    //         $readyInMinutes.attr('href', `#${recipe.id}`);
    //         $readyInMinutes.text('Ready in minutes! Click for instructions');
    //
    //         $action.append($readyInMinutes);
    //         $card.append($action);
    //
    //         const $modal = $('<div>').addClass('modal').attr('id', recipe.id);
    //         const $modalContent = $('<div>').addClass('modal-content');
    //         const $modalHeader = $('<h4>').text(recipe.title);
    //         // const $movieYear = $('<h6>').text(`Released in ${movie.year}`);
    //         const $modalText = $('<p>').text(recipe.plot);
    //         $modalContent.append($modalHeader, $modalText);
    //         $modal.append($modalContent);
    //
    //         $col.append($card, $modal);
    //
    //         $('#listings').append($col);
    //
    //         $('.modal-trigger').leanModal();
    //     }
    // };
    //
    //     }
    // }
    // for (var i = 0; i< data.Search.length; i++) {
    //   var thisRecipe = {
    //
    //   }
    // }
    $('form').submit(function(event) {
        event.preventDefault();
        let diet = $('#diet').val();
        let exclude = $('#excludes').val();
        let targetCalories = $('#calories').val();
        let timeFrame = $('#length').val();
        $.ajax({
            url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate?diet=${diet}&exclude=${exclude}&targetCalories=${targetCalories}&timeFrame=${timeFrame}`,
            // url: `https://spoonacular-recipe-food-nutrition-vl.p.mashape.com/recipes/mealplans/generate?diet=${diet}&exclude=${exclude}&targetCalories=${targetCalories}&timeFrame=${timeFrame}`,
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                console.log(data);
            },
            error: function(err) {
                console.log(err);
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "0PAFuTUgNnmshTiXtoGA99RngNJxp1QWghAjsnZgHGsB5IUPwr");
            }
        });
    })
})
