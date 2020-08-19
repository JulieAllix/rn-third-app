import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Rapide & facile', { uri : 'https://larecette.net/wp-content/uploads/2019/03/egg-muffin-4.jpg'}),
  new Category('c2', 'Léger', { uri : 'https://larecette.net/wp-content/uploads/2019/06/image-14-2.jpg'}),
  new Category('c3', 'Salades', { uri : 'https://qccdn.ar-cdn.com/recipes/port250/f19952ad-1d1a-4366-ad5c-e44cd579a621.jpg'}),
  new Category('c4', 'Tapas', { uri : 'https://larecette.net/wp-content/uploads/2019/08/iStock-1051670100-1152x768.jpg'}),
  new Category('c5', 'Estival', { uri : 'https://larecette.net/wp-content/uploads/2019/07/image-84.jpg'}),
  new Category('c6', 'Petit-Déjeuner', { uri : 'https://assets.afcdn.com/recipe/20170112/30531_w600.jpg'}),
  new Category('c7', 'Sucré', { uri : 'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg'}),
  new Category('c8', 'Italien', { uri : 'https://assets.afcdn.com/recipe/20180413/78570_w600cxt0cyt0cxb3840cyb5760.jpg'}),
  new Category('c10', 'Sucré-salé', { uri : 'https://assets.afcdn.com/recipe/20161128/60272_w600.jpg'}),
  new Category('c11', 'Français', { uri : 'https://assets.afcdn.com/recipe/20160621/31268_w600.jpg'}),
];

export const MEALS = [
  new Meal(
    'm1',
    ['c10'],
    'Poulet au coco et curry',
    'coûteux',
    'simple',
    'https://assets.afcdn.com/recipe/20161128/60272_w600.jpg',
    75,
    [
      '4 escalopes de poulet (environ 120 g l\'une)',
      'Copeaux de noix de coco',
      'Gingembre en boîte (1 cuillère à café) ou frais',
      'Lait de coco (1 boîte soit environ 300 g)',
      'Curry en poudre (2 à 3 cuillères à soupe rases)',
      'Pâte de curry rouge',
      '1 oignon jaune',
      '1 courgette',
      'Champignons de Paris (une petite boîte)'
    ],
    [
      'Faire dorer les oignons dans de l\'huile d\'olive à feu moyen, jusqu\'à ce qu\'ils soit transparents.',
      'Ajouter la moitié du curry, puis faites dorer les escalopes en remuant de temps en temps. Saler et poivrer.',
      'Ajouter la courgette coupée en dés',
      'Baisser le feu, et ajouter le gimgembre, puis couvrir de lait de coco, ajouter le reste du curry, et les copeaux de coco, et les champignons si souhaité.',
      'Laisser mijoter environ 30 mn. Servir chaud accompagné de riz thaï ou de pommes de terre. bon appétit!'
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    'm2',
    ['c1'],
    'Toast Hawaii',
    'abordable',
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
    ['c1', 'c4', 'c5', 'c8'],
    'Bruschetta à la mozzarella',
    'abordable',
    'simple',
    'https://assets.afcdn.com/recipe/20180413/78570_w600cxt0cyt0cxb3840cyb5760.jpg',
    15,
    [
      '8 tranches de pain de campagne',
      'Tomate',
      '2 boules de mozzarella',
      'Origan ou basilic frais',
      'Huile d\'olive',
    ],
    [
      'Disposer les tranches de pain de campagne sur une plaque du four.',
      'Découper très finement tomates et mozzarella en dés.',
      'Sur chaque tranche de pain, diposer quelques petits morceaux de tomate, puis un peu de mozzarella.',
      'Saupoudrer chaque tartine d\'origan ou de basilic, et verser un filet d\'huile d\'olive.',
      'Attendre l\'arrivée des invités pour passer les tartines 3 à 5 min au grill, pour que la mozzarella fonde...'
    ],
    false,
    false,
    true,
    false
  ),

  new Meal(
    'm4',
    ['c1', 'c6'],
    'Egg Muffin',
    'abordable',
    'simple',
    'https://larecette.net/wp-content/uploads/2019/03/egg-muffin-4.jpg',
    15,
    [
      '2 pains muffin',
      '2 œufs',
      '4 tranches de lard',
      '2 tranches de cheddar',
      'Sel & poivre du moulin'
    ],
    [
      'Beurrez 2 emporte-pièces et déposez-les dans une poêle chaude préalablement graissée. Cassez les œufs dans les emporte-pièces et laissez cuire à feu moyen, à couvert.',
      'En fin de cuisson, décollez-les à l’aide de la pointe d’un couteau et retournez-les pour cuire le jaune (facultatif). Réservez.',
      'Coupez les muffins anglais en deux puis faites-les dorer dans la poêle. Faites ensuite griller les tranches de bacon. Pendant ce temps, déposez le cheddar sur la base des pains muffins encore chauds.',
      'Déposez ensuite les tranches de bacon et les œufs. Recouvrez le tout avec le chapeau du pain anglais.',
      'Il ne vous reste plus qu’à déguster avec un bon verre de jus d’orange !'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm5',
    ['c1', 'c2', 'c5'],
    'Salad with Smoked Salmon',
    'cher',
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
    ['c2', 'c5', 'c11'],
    'Crumble aux légumes',
    'coûteux',
    'complexe',
    'https://assets.afcdn.com/recipe/20160621/31268_w600.jpg',
    90,
    [   
    '1 kg de tomate',
    '1 aubergine',
    '3 courgettes bien fermes',
    '1 poivron rouge et 1 vert',
    '1 oignon',
    '1 gousse d\'ail',
    '3 cuillères à soupe d\'huile d\'olive',
    'Thym',
    'Romarin',
    'Poivre',
    'Sel',
    '150 g de farine',
    '100 g de beurre',
    '40 g de pignons',
    '60 g de parmesan'
    ],
    [
      'Émincez l\'oignon et hachez très finement l\'ail après en avoir ôté le germe. Faites chauffer l\'huile dans une cocotte et faites y revenir l\'ail et l\'oignon.',
      'Coupez l\'aubergine en petits cubes et mettez-les dans la cocotte. Lorsqu\'elles sont bien dorées, ajoutez les poivrons coupés en lanières. Assaisonnez avexc le thym, le romarin, le sel et le poivre.',
      'Au bout de 20 mn, ajoutez les courgettes coupées en rondelles et les tomates pelées et épépinées. Mélangez bien et maintenir une cuisson assez vive pour que les légumes rendent leur eau.',
      'Pendant ce temps, préchauffez le four thermostat 6 (180°C) et confectionnez les miettes : mélangez du bout des doigts la farine, le parmesan et le beurre. Ajoutez les pignons.',
      'Versez les légumes dans un plat et répartissez les miettes dessus. Laissez cuire dans le four chaud 20 à 30 mn.',
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm7',
    ['c6', 'c7'],
    'Pancakes',
    'abordable',
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
    ['c10'],
    'Creamy Indian Chicken Curry',
    'coûteux',
    'complexe',
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
    ['c11'],
    'Chocolate Souffle',
    'abordable',
    'difficile',
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
    ['c1', 'c2', 'c3', 'c5'],
    'Salade Caesar framboise avocat',
    'coûteux',
    'simple',
    'https://qccdn.ar-cdn.com/recipes/port250/f19952ad-1d1a-4366-ad5c-e44cd579a621.jpg',
    30,
    [
      'pousses d\'épinards',
      'poulet',
      '1 demi-avocat',
      'framboises',
      'copeaux de parmesan',
      'crackers',
      'sauce caesar'
    ],
    [
      'Disposez les épinards dans une assiette.',
      'Cuisez le poulet à la poêle.',
      'Disposez le poulet dans l\'assiette.',
      'Coupez un demi-avocat en tranches fines et disposez le au sommet de la salade.',
      'Disposez les framboises et le parmesan.',
      'Cassez un crakcers en plus petits morceaux',
      'Tracer des triats de sauce caesar'
    ],
    true,
    false,
    false,
    false
  ),
  new Meal(
    'm11',
    ['c3', 'c8', 'c1', 'c2', 'c5'],
    'Salade de melon, jambon de parme et burrata',
    'coûteux',
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
    ['c1', 'c4'],
    'Frites de patates douces au four',
    'abordable',
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
    ['c1', 'c2', 'c11', 'c5'],
    'Tarte à la tomate et à la moutarde',
    'abordable',
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
  new Meal(
    'm14',
    ['c1', 'c2'],
    'Gratin de courgettes',
    'abordable',
    'simple',
    'https://larecette.net/wp-content/uploads/2019/07/iStock-178992651.jpg',
    60,
    [
      '3 courgettes',
      '2 oignons',
      '1 gousse d’ail',
      '100 g de gruyère râpé',
      '2 œufs',
      '2 c. à soupe de crème fraîche',
      '1 noisette de beurre ou huile d’olive',
      'Sel, poivre, noix de muscade'
    ],
    [
      'Émincer finement les oignons en lamelles. Faire fondre une noix de beurre dans une poêle avant de faire revenir brièvement les oignons à feu doux.',

      'Préchauffer le four à 180 °C. Éplucher si besoin les courgettes et les coupées en rondelles. Une fois les oignons translucides, faire poêler les courgettes avec les oignons. En fin de cuisson, agrémenter avec l’ail haché.',

      'Dans un bol, fouetter 2 cuillères à soupe de crème épaisse avec les œufs et le gruyère râpé. Assaisonner avec une pincée de sel, de poivre et de noix de muscade.',

      'Verser les courgettes et les oignons colorés dans un plat à gratin. Recouvrir de sauce et enfourner pour un temps de cuisson d’environ 15-20 minutes en mode chaleur tournante. Faire gratiner 5 minutes en mode grill en fin de cuisson.',

      'À la sortie du four, laisser refroidir quelques minutes avant de servir. Ce plat est à déguster seul ou en accompagnement d’une viande.'
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm15',
    ['c1'],
    'Club sandwich au poulet, bacon & avocat',
    'coûteux',
    'simple',
    'https://larecette.net/wp-content/uploads/2019/05/Capture-d%E2%80%99e%CC%81cran-2019-05-02-a%CC%80-17.20.23.jpg',
    15,
    [
      '3 tranches de pain de mie',
      '1 filet de poulet',
      'Quelques lamelles de bacon',
      '1 avocat',
      'Quelques feuilles de sucrine',
      'Tomates cerises',
      '1 jaune d’œuf',
      'Huile d’arachide',
      'Basilic',
      'Moutarde',
    ],
    [
      'Salez et poivrez le poulet puis faites-le cuire dans un filet d’huile d’arachide et réservez.', 
      'Réalisez ensuite une mayonnaise. Pour ce faire, mélangez un jaune d’œuf et la moutarde puis incorporez progressivement l’huile en fouettant continuellement.',
      'Ciselez finement le basilic et incorporez-le à la mayonnaise.','Faites griller le bacon et réservez.',
      'Dans cette même poêle, déposez le pain de mie afin de le faire dorer dans le jus de cuisson.',
      'Entre temps, tranchez des lamelles d’avocat et de poulet, coupez les tomates cerises et lavez la sucrine.', 
      'Tartinez les tranches de pain de mie de mayonnaise puis dressez du poulet et bacon sur l’une d’elles.',
      'Recouvrez d’une tranche de pain de mie et déposez quelques lamelles d’avocat, de tomates et de feuilles de sucrine.',
      'Recouvrez de la dernière tranche de pain de mie. Finissez en piquant le club sandwich avec des bâtonnets pour le faire tenir. C’est prêt à être dégusté !',
    ],
    false,
    false,
    false,
    true
  ),
  new Meal(
    'm16',
    ['c1', 'c11'],
    'Pommes de terre au four farcies au fromage',
    'abordable',
    'simple',
    'https://larecette.net/wp-content/uploads/2019/05/Capture-d%E2%80%99e%CC%81cran-2019-05-09-a%CC%80-11.08.20.jpg',
    15,
    [
      '2 pommes de terre',
      '50 g de maïs doux en conserve',
      '30 g de fromage',
      '30 g de crème fraîche',
      '5 g d’aneth haché',
      '1/6 c. à café de sel',
      '1 c. à café d’huile végétale'
    ],
    [
      'Lavez les pommes de terre et badigeonnez-les d’huile puis salez à votre convenance. Enveloppez chacune d’elle dans une feuille d’aluminium et enfournez une heure à 180°C.',
      'Pendant ce temps, râpez le fromage puis faites une profonde incision dans chaque pomme de terre. À l’aide d’une fourchette, réduisez le cœur de celles-ci en purée.',
      'Garnissez-les de fromage, quelques maïs, une cuillère à soupe de crème et un peu d’aneth. Il ne vous reste plus qu’à servir et planter votre fourchette !',
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm17',
    ['c1', 'c6', 'c7'],
    'Pain perdu',
    'abordable',
    'simple',
    'https://assets.afcdn.com/recipe/20170112/30531_w600.jpg',
    30,
    [
      '25cl de lait',
      '3 oeufs',
      '75g de sucre de canne',
      '6 tranches épaisses de pain paysan',
    ],
    [
      'Fouetter les oeufs avec le sucre et le lait.',
      'Y tremper les tranches de pain.',
      'Deux solutions pour la cuisson : les cuire à la poêle dans du beurre en les faisant dorer de chaque côté, ou, les cuire au four : beurrer légèrement un plat à gratin, y répartir les tranches, verser le reste du mélange (ajouter du sucre si envie), laisser cuire à 180°C (thermostat 6) jusqu\'à que les tranches soient dorées.',
    ],
    false,
    false,
    true,
    false
  ),
];
