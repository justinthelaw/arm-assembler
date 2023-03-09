import { program } from "commander";
import CommandInterface from "./CommandInterface";
import ProgramInterface from "./ProgramInterface";

// a class that handles user input based on command line arguments
// command line arguments are designed by the consumer of this class
export default class HandleUserInput {
  // constructor for instantiation of this class
  constructor(program: ProgramInterface, commands: Array<CommandInterface>) {
    this.generateProgram(program, commands);
  }

  // takes the program attributes and generates a program
  private generateProgram(
    programAttributes: ProgramInterface,
    commands: Array<CommandInterface>
  ) {
    // assign high-level program attributes
    program
      .name(programAttributes.name)
      .description(programAttributes.description)
      .version(programAttributes.version || "0.0.0.0");

    // add commands and the options and arguments associated with each
    commands.forEach((command) => {
      program.command(command.name);
      // assign command attributes
      program.description(command.description);
      // assign command arguments, if available
      command.arguments?.forEach((arg) => {
        program.argument(arg.name, arg.description);
      });
      // assign command options, if available
      command.options?.forEach((opt) => {
        if (opt.required) {
          program.requiredOption(
            opt.flags.join(", ") + " <string>",
            opt.description
          );
        } else {
          program.option(opt.flags.join(", ") + " <string>", opt.description);
        }
      });
    });
  }

  // takes in user arguments and produces useable output
  parseUserInput() {
    // parse the process arguments using constructed program
    const result = program.parse(process.argv);
    console.log(result.opts());
  }
}
