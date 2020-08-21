export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';
export const CREATE_RECIPE = 'CREATE_RECIPE';

export const toggleFavorite = (id) => {
    return { 
        type: TOGGLE_FAVORITE, 
        mealId: id 
    };
};

export const setFilters = (filterSettings) => {
    return { 
        type: SET_FILTERS, 
        filters: filterSettings 
    };
};

export const createRecipe = (title, imageUrl, duration, complexity, affordability, ingredients) => {
    
    return async dispatch => {
        const response = await fetch('https://recipe-manager-afcb2.firebaseio.com/recipes.json', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title, 
                imageUrl, 
                duration, 
                complexity,
                affordability,
                ingredients
            })
        });
  
        const resData = await response.json();
        dispatch({
            type: CREATE_RECIPE,
            recipeData: {
                id: resData.name,
                title, 
                imageUrl, 
                duration, 
                complexity,
                affordability,
                ingredients
            }
        });
    };

};