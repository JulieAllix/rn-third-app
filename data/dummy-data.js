import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c11', 'Sucré', '#F94144'),
  new Category('c12', 'Salades', '#F3722C'),
  new Category('c13', 'Tapas', '#F8961E'),
  new Category("c1", 'Italien', '#F9C74F'),
  new Category('c2', 'Rapide & facile', '#90BE6D'),
  new Category('c3', 'Hamburgers', '#43AA8B'),
  new Category('c4', 'Allemand', '#577590'),
  new Category('c5', 'Léger', '#F94144'),
  new Category('c6', 'Exotique', '#F3722C'),
  new Category('c7', 'Petit-Déjeuner', '#F8961E'),
  new Category('c8', 'Asiatique', '#F9C74F'),
  new Category('c9', 'Français', '#90BE6D'),
  new Category('c10', 'Estival', '#43AA8B'),

];

export const MEALS = [
  new Meal(
    'm1',
    ['c1', 'c2'],
    'Spaghetti with Tomato Sauce',
    'affordable',
    'simple',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm2',
    ['c2'],
    'Toast Hawaii',
    'affordable',
    'simple',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm3',
    ['c3'],
    'Classic Hamburger',
    'pricey',
    'simple',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    45,
    [
      '300g Cattle Hack',
      '1 Tomato',
      '1 Cucumber',
      '1 Onion',
      'Ketchup',
      '2 Burger Buns'
    ],
    [
      'Form 2 patties',
      'Fry the patties for c. 4 minutes on each side',
      'Quickly fry the buns for c. 1 minute on each side',
      'Bruch buns with ketchup',
      'Serve burger with tomato, cucumber and onion'
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm4',
    ['c4'],
    'Wiener Schnitzel',
    'luxurious',
    'challenging',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    60,
    [
      '8 Veal Cutlets',
      '4 Eggs',
      '200g Bread Crumbs',
      '100g Flour',
      '300ml Butter',
      '100g Vegetable Oil',
      'Salt',
      'Lemon Slices'
    ],
    [
      'Tenderize the veal to about 2–4mm, and salt on both sides.',
      'On a flat plate, stir the eggs briefly with a fork.',
      'Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.',
      'Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.',
      'Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.',
      'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
      'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm5',
    ['c2', 'c5', 'c10'],
    'Salad with Smoked Salmon',
    'luxurious',
    'simple',
    'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    15,
    [
      'Arugula',
      "Lamb's Lettuce",
      'Parsley',
      'Fennel',
      '200g Smoked Salmon',
      'Mustard',
      'Balsamic Vinegar',
      'Olive Oil',
      'Salt and Pepper'
    ],
    [
      'Wash and cut salad and herbs',
      'Dice the salmon',
      'Process mustard, vinegar and olive oil into a dessing',
      'Prepare the salad',
      'Add salmon cubes and dressing'
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm6',
    ['c6', 'c10'],
    'Delicious Orange Mousse',
    'affordable',
    'hard',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    240,
    [
      '4 Sheets of Gelatine',
      '150ml Orange Juice',
      '80g Sugar',
      '300g Yoghurt',
      '200g Cream',
      'Orange Peel'
    ],
    [
      'Dissolve gelatine in pot',
      'Add orange juice and sugar',
      'Take pot off the stove',
      'Add 2 tablespoons of yoghurt',
      'Stir gelatin under remaining yoghurt',
      'Cool everything down in the refrigerator',
      'Whip the cream and lift it under die orange mass',
      'Cool down again for at least 4 hours',
      'Serve with orange peel'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm7',
    ['c7'],
    'Pancakes',
    'affordable',
    'simple',
    'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
    20,
    [
      '1 1/2 Cups all-purpose Flour',
      '3 1/2 Teaspoons Baking Powder',
      '1 Teaspoon Salt',
      '1 Tablespoon White Sugar',
      '1 1/4 cups Milk',
      '1 Egg',
      '3 Tablespoons Butter, melted'
    ],
    [
      'In a large bowl, sift together the flour, baking powder, salt and sugar.',
      'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
      'Heat a lightly oiled griddle or frying pan over medium high heat.',
      'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm8',
    ['c8'],
    'Creamy Indian Chicken Curry',
    'pricey',
    'challenging',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    35,
    [
      '4 Chicken Breasts',
      '1 Onion',
      '2 Cloves of Garlic',
      '1 Piece of Ginger',
      '4 Tablespoons Almonds',
      '1 Teaspoon Cayenne Pepper',
      '500ml Coconut Milk'
    ],
    [
      'Slice and fry the chicken breast',
      'Process onion, garlic and ginger into paste and sauté everything',
      'Add spices and stir fry',
      'Add chicken breast + 250ml of water and cook everything for 10 minutes',
      'Add coconut milk',
      'Serve with rice'
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    'm9',
    ['c9'],
    'Chocolate Souffle',
    'affordable',
    'hard',
    'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
    45,
    [
      '1 Teaspoon melted Butter',
      '2 Tablespoons white Sugar',
      '2 Ounces 70% dark Chocolate, broken into pieces',
      '1 Tablespoon Butter',
      '1 Tablespoon all-purpose Flour',
      '4 1/3 tablespoons cold Milk',
      '1 Pinch Salt',
      '1 Pinch Cayenne Pepper',
      '1 Large Egg Yolk',
      '2 Large Egg Whites',
      '1 Pinch Cream of Tartar',
      '1 Tablespoon white Sugar'
    ],
    [
      'Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.',
      'Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.',
      'Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.',
      'Place chocolate pieces in a metal mixing bowl.',
      'Place bowl over a pan of about 3 cups hot water over low heat.',
      'Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.',
      'Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.',
      'Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.',
      'Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.',
      'Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.',
      'Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.',
      'whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.',
      'Transfer a little less than half of egg whites to chocolate.',
      'Mix until egg whites are thoroughly incorporated into the chocolate.',
      'Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.',
      'Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.',
      'Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.'
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm10',
    ['c2', 'c5', 'c10'],
    'Asparagus Salad with Cherry Tomatoes',
    'luxurious',
    'simple',
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
    30,
    [
      'White and Green Asparagus',
      '30g Pine Nuts',
      '300g Cherry Tomatoes',
      'Salad',
      'Salt, Pepper and Olive Oil'
    ],
    [
      'Wash, peel and cut the asparagus',
      'Cook in salted water',
      'Salt and pepper the asparagus',
      'Roast the pine nuts',
      'Halve the tomatoes',
      'Mix with asparagus, salad and dressing',
      'Serve with Baguette'
    ],
    true,
    true,
    true,
    true
  ),
  new Meal(
    'm11',
    ['c12', 'c1', 'c2', 'c5', 'c10'],
    'Salade de melon, jambon de parme et burrata',
    'average',
    'simple',
    'https://larecette.net/wp-content/uploads/2019/06/image-14-2.jpg',
    30,
    [
      'Roquette',
      'Jambon de Parme',
      'Burrata',
      'Noisettes',
      'Tomates cerises',
      'Melon',
      '1 Citron bio',
      'Miel',
      '1 gousse d’ail',
      'Huile d’olive',
      'Sel',
      'Poivre du moulin'
    ],
    [
      'Dans un poêle, faites torréfier les noisettes et laissez-les refroidir avant de retirer la peau en les frottant dans vos mains.', 
      'Égrainez et épluchez le melon. Coupez-le en morceaux.', 
      'Coupez les tomates en deux.',
      'Incisez la burrata en son centre et râpez le zeste d’un citron par-dessus afin de la parfumer.', 
      'Ajoutez un filet d’huile d’olive, une pincée de sel et du poivre du moulin.',
      'Mélangez la moutarde, le jus de citron, le miel, l’huile d’olive et l’ail haché. Assaisonnez de sel et poivre.', 
      'Hachez grossièrement les noisettes et saupoudrez-les sur la burrata.',
      'Dans un saladier, dressez l’ensemble des ingrédients et dégustez cette délicieuse salade de jambon de Parme, melon et burrata.'
    ],
    true,
    false,
    false,
    false
  ),
  new Meal(
    'm12',
    ['c2', 'c13'],
    'Frites de patates douces au four',
    'affordable',
    'simple',
    'https://larecette.net/wp-content/uploads/2019/08/iStock-1051670100-1152x768.jpg',
    45,
    [
      '2 patates douces',
      '1 cuillère à café de sel',
      '1 cuillère à café de poivre',
      '4 cuillères à soupe d’huile d’olive',
      '1 cuillère à café de paprika',
      '1 pincée de piment d’Espelette'
    ],
    [
      'Éplucher les patates douces puis les laver et les couper en bâtonnets.',
      'Déposer les bâtonnets dans un saladier et les assaisonner de sel, poivre, paprika, piment d’Espelette et verser un filet d’huile d’olive.',
      'Enrober les patates douces dans ce mélange à l’aide de vos mains.',
      'Chemiser une plaque allant au four de papier sulfurisé et étaler les bâtonnets de patates douces. Enfourner dans un four préchauffé à 210 °C pour environ 30 à 35 minutes de cuisson en mode chaleur tournante.',
      'Mélanger régulièrement pour une cuisson uniforme. Pour des frites ultras croustillantes, poursuivre la cuisson 5 minutes en mode grill.',
      'Ces frites de patates douces sont à accompagner d’une sauce au lait de coco, ail et gingembre. Un délice exotique ! Ou encore d\'une sauce au bleu.'
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm13',
    ['c2', 'c5', 'c9', 'c10'],
    'Tarte à la tomate et à la moutarde',
    'affordable',
    'simple',
    'https://larecette.net/wp-content/uploads/2019/07/image-84.jpg',
    40,
    [
      '1 kg de belles tomates',
      '1/2 c. à café d’herbes de Provence',
      '2 à 3 c. à soupe d’huile d’olive',
      '2 c. à soupe de moutarde',
      '1 pâte brisée'
    ],
    [
      'Couper les tomates en quartiers ou en rondelles d’environ 2 à 3 cm d’épaisseur. Retirer les pépins pour ne pas détremper la pâte.',
      'Égouter les quartiers de tomate dans une passoire et les saler pour les faire dégorger.',
      'Déposer la pâte dans le moule à tarte chemisé d’un papier sulfurisé puis foncer la pâte et passer un rouleau à pâtisserie sur le pourtour pour retirer l’excédent.',
      'À l’aide d’une fourchette, piquer le fond de la pâte brisée puis étaler une couche régulière de moutarde.',
      'Recouvrir le fond de tarte avec les quartiers de tomates en formant une rosace. Assaisonner de poivre du moulin, verser un filet d’huile d’olive et saupoudrer les herbes de Provence.',
      'Enfourner 25 minutes dans un four préchauffé à 210 °C. À la sortie du four, démouler et servir tiède ou froid. Déguster cette bonne tarte salée à la tomate et à la moutarde.'
    ],
    false,
    true,
    true,
    true
  ),
];
