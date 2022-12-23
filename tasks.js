/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (text.trim().startsWith("hello")) {
    hello(text.trim() + "!");
  } else if (text.trim().startsWith("help")) {
    help();
  } else if (text.trim().startsWith("list")) {
    list();
  } else if (text.trim().startsWith("add")) {
    add(text);
  } else if (text.trim().startsWith("remove")) {
    remove(text);
  } else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(input) {
  const words = input.split(" ");
  var outputString;
  if (words.length > 1) {
    outputString = input.replace("hello", `${words[0]}`, 1);
  } else {
    outputString = input;
  }
  outputString = outputString.trim();
  console.log(outputString);
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

// The following line starts the application
startApp("Ahmad ElHalabi");

/**
 * Lists all the possible commands
 *
 * @returns {void}
 */
function help() {
  console.log("unknownCommand(c) :: for any unknown command");
  console.log("hello! :: greetings");
  console.log("quitting now, goodbye! :: greeting after doing the exit");
  console.log("list() :: Lists all the possible tasks");
  console.log("add(input) :: to add to the List");
  console.log("remove(input) :: to remove from the list");
}

/*
..
..
..
..
*/
/**
 * Lists all the possible tasks
 *
 * @returns {void}
 */
const List = ["UnknownCommand(c)", "hello(input)", "quit()", "help()"];
function list() {
  for (let i = 0; i < List.length; i++) {
    console.log(i + 1 + "_ " + List[i]);
  }
  // console.log("text");
  // console.log("hello(input) :: greetings");
  // console.log("quit(), do an exit with greeting after doing the exit");
  // console.log("help() :: Lists all the possible commands");
}

/*
..
..
..
.. add to the List array
..
*/
function add(input) {
  // List.push(input);
  const words = input.split(" ");
  const ListAdd = List;
  ListAdd.push(words[-1]);
}

/*
..
..
.. remove to the list
..
..
*/
function remove(input) {
  const words = input.split(" ");
  // const ListRemove = List;
  // ListRemove.log(words[1]);
  if (words.length === 1) {
    List.pop();
  } else if (parseInt(words[1]) < List.length) {
    List.splice(parseInt(words[1] - 1), 1);
  } else if (List.length < parseInt(words[1])) {
    console.log("Sorry, this number doesn't exist");
  } else {
    console.log("Error");
  }
}
