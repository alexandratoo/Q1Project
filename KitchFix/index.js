$().ready(() => {

    console.log('we did it');
    var $recipes = $('#recipes');
    $('form').submit(function(event) {
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
                for (i =0; i < data.meals.length; i++) {
                   newObject[data.meals[i].id] = {
                     title: data.meals[i].title

                   }
                }
                console.log(newObject);
                for (keys in newObject)
                $.ajax({
                    url:`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${keys}/information`,
                  type: 'GET',
                  dataType: 'json',
                  success: function(data){
                    // newObject[keys].image= mealPhoto
                  console.log(data)
                },
                // },
                error: function(err) {
                    console.log(err);
                },
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("X-Mashape-Authorization", "0PAFuTUgNnmshTiXtoGA99RngNJxp1QWghAjsnZgHGsB5IUPwr");
                }})



            for (objects in data){

                let id = object.id
                let image = object.image
                let Title = object.title
                let col = $('<div>').addClass('col s3 m3 l2')
                let card = $('<div>').addClass('card hoverable')
                let title = $('<h6>').addClass('card-title center').text(object.title)
                let content = $('<div>').addClass('card-content clicky center')
                let link = $('<a>').attr('href', '#modal2')
                let recPic = $('<img>').attr({src: object.image, id: object.id, data: object.title})
                $('#recipes').append(col)
                col.append(card)
                card.append(content)
                content.append(link)
                link.append(recPic)
                content.append(title)
            }
                // //
                    // $('#recipes').append(`<li><p class="special"><b>Meal Options </b><em> ${object[i].title}</em></p></li>`)
                //     $('#recipes').append(`<li><p class="special"><b>Time to prep </b><em>${meals[i]['readyInMinutes']}</em></p></li>`)
                //     $('#recipes').append(`<li><p class="special"><b>Image </b><em>${meals[i]['imageUrls'][0]}</em></p></li>`)
                //     $.ajax({

                //       type: 'GET',
                //       dataType: 'json',
                //       success: function(recipeInfo){
                //       console.log('lame', recipeInfo);
                //     }
                //
                //
                //     })
                //
                //     // let pic = $('<img src="https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate?diet=' + showBooks[i] + '-L.jpg">');
                // }
                // testPic = $('<img>').attr('src','http://cdn3-www.cattime.com/assets/uploads/2011/08/best-kitten-names-1.jpg')
                // $('#recipes').append(testPic)

                // var title = recipes.title;
                // var image = recipes.image
                //   $recipes.append('<li></li>')
                //
                // })
                // $.each(recipes, function(i, recipe) {
                //   $recipes.append('<li>title:'+ recipe.title + '</li>');
                //
                // })

                // for (i = 0; i < objectBreakfast.length; i++) {
                //   let breakfast = ('#breakfast');
                //   let title = meals.('Title');
                //   let time = meals.('readyInMinutes');
                //   let div = $('<div>').text(`${title} (${time})`)
                //   breakfast.append(div);
                //   $(breakfast).show();
                // }
                // console.log('object', object);
                // let image = object['image']
                // console.log('image', image);
                // let li = $('<li>')
                // li.append(`${image}`)
                // let sectionMenu = $('.sectionMenu ul')
                // console.log('li', li[0]);
                // sectionMenu.append(li)
                // let ul = $('ul')
                // ul.append(li)



            },
            // },
            error: function(err) {
                console.log(err);
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "0PAFuTUgNnmshTiXtoGA99RngNJxp1QWghAjsnZgHGsB5IUPwr");
            }
        });

    })
})
