const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  '1. What is your name or nickname? ',
  '2. What is an activity you like doing? ',
  '3. What kind of music do you listen to? ',
  '4. Which meal is you favourite breakfast, lunch or dinner? ',
  '5. What is your favourite thing to eat for that meal? ',
  '6. What is your favourite sport to play? ',
  '7. What is your superpower? Tell us in a few words what your amazing at? '
];

rl.question(questions[0], (name) => {
  rl.question(questions[1], (activity) => {
    rl.question(questions[2], (music) => {
      rl.question(questions[3], (meal) => {
        rl.question(questions[4], (favMeal) => {
          rl.question(questions[5], (sport) => {
            rl.question(questions[6], (power) => {
              console.log(`${name} loves to play ${sport} and listening to ${music} music. ${name} is also into ${activity}. ${name} really likes eating ${favMeal} for ${meal}. ${power} is something that ${name} is really amazing at.`);
              rl.close();
            });
          });
        });
      });
    });
  });

});



 
