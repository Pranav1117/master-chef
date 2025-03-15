
export enum ErrorMessages {
  FETCH_RECIPE_FAILED = "Failed to fetch to Recipe",
  TOO_MANY_REQUEST= "Api limit exceeded",
  USER_NOT_FOUND = "User not found",
  SERVER_ERROR = "Internal server error",
  WENT_WRONG= "Something Went Wrong"
}

export const DIRECTIONS = [
    "Wash and prep all your ingredients, such as chopping vegetables, measuring out spices, and marinating meats. Having everything ready makes the cooking process smoother.",
    "Preheat your oven, stovetop, grill, or any cooking surfaceyou'll be using to the specified temperature. This ensures even cooking.",
    "Use the appropriate pots, pans, and utensils for the recipe. Nonstick pans, cast iron skillets, and oven-safe dishes are examples of different cookware for various purposes.",
    "Cook ingredients in the order specified in the recipe. This often means starting with aromatics (like onions and garlic) before adding proteins, vegetables, or grains.",
    "Stir or toss ingredients periodically to ensure even cooking and prevent sticking or burning. Use a spatula, wooden spoon, or tongs as needed.",
    "When the dish is ready, carefully plate it, arranging the food attractively. Garnish with fresh herbs, grated cheese, or other finishing touches, as specified.",
    "Serve the dish immediately, if possible, while it's hot and at its best. Certain dishes may require resting time before serving.",
    "After cooking, wash dishes, pots, pans, and utensils promptly. This ensures an easier cleanup and maintains the cleanliness of your kitchen.",
]

export const menuItems = [
    {
      title: "Recipes",
      submenu: [
        {
          title: "Breakfast & Brunch Recipes",
          path: "/recipelist/breakfast-brunch",
        },
        { title: "Lunch Recipes", path: "/recipelist/lunch" },
        {
          title: "Appetizers & Snack Recipes",
          path: "/recipelist/appetizers-snacks",
        },
        { title: "Dinner Recipes", path: "/recipelist/dinner" },
        { title: "Dessert Recipes", path: "/recipelist/desserts" },
        { title: "Side Dish Recipes", path: "/recipelist/side-dishes" },
        { title: "Grilling & BBQ Recipes", path: "/recipelist/grilling-bbq" },
        { title: "Microwave Recipes", path: "/recipelist/microwave" },
        { title: "Quick & Easy Recipes", path: "/recipelist/quick-easy" },
        { title: "Slow-Cooker Recipes", path: "/recipelist/slow-cooker" },
        { title: "Air Fryer Recipes", path: "/recipelist/air-fryer" },
        { title: "Instant Pot Recipes", path: "/recipelist/instant-pot" },
        { title: "Baking Recipes", path: "/recipelist/baking" },
      ],
    },
    {
      title: "Popular",
      submenu: [
        { title: "Trending Now", path: "/recipelist/trending" },
        { title: "Casserole Recipes", path: "/recipelist/casserole" },
        { title: "Chili Recipes", path: "/recipelist/chili" },
        { title: "Soup Recipes", path: "/recipelist/soup" },
        { title: "Pasta Recipes", path: "/recipelist/pasta" },
        { title: "Bread Recipes", path: "/recipelist/bread" },
        { title: "Cookie Recipes", path: "/recipelist/cookies" },
        { title: "Salad Recipes", path: "/recipelist/salad" },
        { title: "Tofu Recipes", path: "/recipelist/tofu" },
        { title: "Copycat Recipes", path: "/recipelist/copycat" },
      ],
    },
    {
      title: "Meat & Seafood",
      submenu: [
        { title: "Chicken Recipes", path: "/recipelist/chicken" },
        { title: "Salmon Recipes", path: "/recipelist/salmon" },
        { title: "Pork Chop Recipes", path: "/recipelist/pork" },
        { title: "Ground Beef Recipes", path: "/recipelist/beef" },
        { title: "Shrimp Recipes", path: "/recipelist/shrimp" },
      ],
    },
    {
      title: "Healthy & Diet",
      submenu: [
        { title: "Keto Recipes", path: "/recipelist/keto" },
        { title: "Healthy Recipes", path: "/recipelist/healthy" },
        {
          title: "Vegetarian Recipes",
          path: "/recipelist/vegetarian",
        },
        { title: "Vegan Recipes", path: "/recipelist/vegan" },
        {
          title: "Mediterranean Diet Recipes",
          path: "/recipelist/mediterranean",
        },
        {
          title: "Weight Watchers Recipes",
          path: "/recipelist/weight-watchers",
        },
        { title: "Low-Carb Recipes", path: "/recipelist/low-carb" },
        {
          title: "Gluten-Free Recipes",
          path: "/recipelist/gluten-free",
        },
      ],
    },
    {
      title: "Holidays",
      submenu: [
        {
          title: "Dinner Party Recipes",
          path: "/recipelist/dinner-party",
        },
        { title: "Game Day Recipes", path: "/recipelist/game-day" },
        {
          title: "Valentine's Day Recipes",
          path: "/recipelist/valentines-day",
        },
        {
          title: "St. Patrick's Day Recipes",
          path: "/recipelist/st-patricks-day",
        },
        { title: "Easter Recipes", path: "/recipelist/easter" },
        {
          title: "Cinco de Mayo Recipes",
          path: "/recipelist/cinco-de-mayo",
        },
        {
          title: "Mother's Day Recipes",
          path: "/recipelist/mothers-day",
        },
        {
          title: "Memorial Day Recipes",
          path: "/recipelist/memorial-day",
        },
        { title: "Juneteenth Recipes", path: "/recipelist/juneteenth" },
        { title: "4th of July Recipes", path: "/recipelist/4th-of-july" },
        { title: "Halloween Recipes", path: "/recipelist/halloween" },
        {
          title: "Thanksgiving Recipes",
          path: "/recipelist/thanksgiving",
        },
        { title: "Hanukkah Recipes", path: "/recipelist/hanukkah" },
        { title: "Christmas Recipes", path: "/recipelist/christmas" },
        { title: "New Year's Recipes", path: "/recipelist/new-years" },
      ],
    },
    {
      title: "Cuisine",
      submenu: [
        { title: "Mexican Recipes", path: "/recipelist/mexican" },
        { title: "Italian Recipes", path: "/recipelist/italian" },
        { title: "Indian Recipes", path: "/recipelist/indian" },
        { title: "Thai Recipes", path: "/recipelist/thai" },
        { title: "Korean Recipes", path: "/recipelist/korean" },
        { title: "French Recipes", path: "/recipelist/french" },
        {
          title: "Latin American Recipes",
          path: "/recipelist/latin-american",
        },
        { title: "Chinese Recipes", path: "/recipelist/chinese" },
        { title: "Japanese Recipes", path: "/recipelist/japanese" },
        { title: "Spanish Recipes", path: "/recipelist/spanish" },
      ],
    },
    {
      title: "Seasonal",
      submenu: [
        { title: "Spring Recipes", path: "/recipelist/spring" },
        { title: "Summer Recipes", path: "/recipelist/summer" },
        { title: "Fall Recipes", path: "/recipelist/fall" },
        { title: "Winter Recipes", path: "/recipelist/winter" },
      ],
    },
  ];