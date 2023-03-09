import { program } from "commander";
import OptionsInterface from "./OptionsInterface";
import CommandInterface from "./CommandInterface";

// a class that handles user input based on command line arguments
// command line arguments are designed by the consumer of this class
export default class HandleUserInput {

  // constant, immutable value for command attributes
  private readonly PROGRAM_ATTR: CommandInterface;
  // constant, immutable value for options
  private readonly PROGRAM_OPTIONS: Array<OptionsInterface>;
  // store for user input manipulation and reading
  private userInputs: Array<String>;

  // constructor for instantiation of this class
  constructor(array: Array<OptionsInterface>) {
    this.PROGRAM_OPTIONS = array;
    this.userInputs = []
  }

  // takes the array of arguments and creates options
  generateOptions() {

  }

  parseInput() {

  }

}
program.option("-i, --instruction", "ARM Assembly Instruction");

const input = program.parse(process.argv);
