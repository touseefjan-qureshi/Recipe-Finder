function recipeFinder(){
    try{

            const recipeName = document.querySelector("#Recipe").value;
        const recipeRes = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`,);

        recipeRes 
        .then((data)=>{
            return data.json();
        })


        .then ((data)=>{
            console.log(data);

         if (!data.meals) {
            alert("No recipe found. Please check the spelling and try again.");
            return;
        }
            const recipe= data.meals[0];

            const name = recipe.strMeal;
          const image = recipe.strMealThumb;
             const category = recipe.strCategory;
             const instructions = recipe.strInstructions;

             const divRef= document.querySelector("#recipe");

             divRef.innerHTML=`The Recipe   <h2>${name}</h2> - <img src="${image}" width="300">- <h3> category:${category}</h3> - <p>${instructions}</p>`;
        })

                  .catch((err) => {
                console.log(err);
                
            })


       }

   catch (err) {
        console.log(err);
        
    }




};


