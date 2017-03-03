$().ready(() => {

    $('ul.tabs').tabs('select_tab', 'tab_id');
    $('#submit-ask').click(function(event) {
        event.preventDefault();
        let question = $('#question').val();
        $.ajax({
            url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/quickAnswer?q=${question}%3F`,
            type: 'GET',
            dataType: 'json',
            success: function(data) {

                console.log(data)
                let answers = data.answer
                $('#answer').append(answers)
            },

            error: function(err) {
                console.log(err);
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "0PAFuTUgNnmshTiXtoGA99RngNJxp1QWghAjsnZgHGsB5IUPwr");
            }
        })
    })
    $('#joke').click(function(event) {
        event.preventDefault();


        $.ajax({
            url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/jokes/random`,
            type: 'GET',
            dataType: 'json',
            success: function(data) {

                console.log(data)
                let joke = data.text
                $('#joking').append(joke)
            },

            error: function(err) {
                console.log(err);
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "0PAFuTUgNnmshTiXtoGA99RngNJxp1QWghAjsnZgHGsB5IUPwr");
            }
        })
    })
    console.log(joke);
    $('#trivia').click(function(event) {
        event.preventDefault();
        $.ajax({
            url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/trivia/random`,
            type: 'GET',
            dataType: 'json',
            success: function(data) {

                console.log(data)
                let trivia = data.text
                $('#info').append(trivia)
            },

            error: function(err) {
                console.log(err);
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "0PAFuTUgNnmshTiXtoGA99RngNJxp1QWghAjsnZgHGsB5IUPwr");
            }
        })
    })
    console.log('we did it');
    var $recipes = $('#recipes');
    $('#submit-menu').click(function(event) {
        console.log("submitted form and feeling pretty good about that");

        event.preventDefault();
        let diet = $('#diet').val();
        let exclude = $('#excludes').val();
        let targetCalories = $('#calories').val();
        let timeFrame = $('#length').val();
        let id = $('#id').val();
        $.ajax({
            url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate?diet=${diet}&exclude=${exclude}&targetCalories=${targetCalories}&timeFrame=${timeFrame}`,

            type: 'GET',
            dataType: 'json',
            success: function(data) {
                console.log('success', data);
                // let ds = data.Search
                let newObject = {}
                for (i = 0; i < data.meals.length; i++) {
                    newObject[data.meals[i].id] = {
                        title: data.meals[i].title

                    }
                }
                console.log(newObject);
                for (keys in newObject)
                    $.ajax({
                        url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${keys}/information`,
                        type: 'GET',
                        dataType: 'json',
                        success: function(data) {

                            console.log(data)
                            
                            let image = data.image
                            let title = data.title
                            let minutes = data.preparationMinutes
                            let instructions = data.instructions
                            console.log(title);
                            let col = $('<div>').addClass('col s6 m6 l4')
                            let card = $('<div>').addClass('card hoverable')
                            let cardTitle = $('<h6>').addClass('card-title center').text(data.title)
                            let content = $('<div>').addClass('card-content clicky center')
                            let link = $('<a>').attr('href', '#modal2')
                            let recPic = $('<img>').attr({
                                src: data.image,
                                id: data.id,
                                data: data.title
                            })
                            $('#recipes').append(col)
                            col.append(card)
                            card.append(content)
                            content.append(link)
                            link.append(recPic)
                            content.append(cardTitle)

                            $('img').click(function() {
                                let target = event.target.id
                                let recTitle = $('<h5>').text(title).attr('style', 'text-align: center')
                                let recInstructions = $('<p>').text(instructions).attr('style', 'text-align center')

                                $('#instructions').append(recTitle)
                                $('#instructions').append(recInstructions)

                            })

                        },

                        error: function(err) {
                            console.log(err);
                        },
                        beforeSend: function(xhr) {
                            xhr.setRequestHeader("X-Mashape-Authorization", "0PAFuTUgNnmshTiXtoGA99RngNJxp1QWghAjsnZgHGsB5IUPwr");
                        }
                    })


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
