import OptionsInterface from './OptionsInterface';
import ArgumentsInterface from './ArgumentsInterface';

export default interface CommandInterface {
  name: string;
  description: string;
  arguments?: Array<ArgumentsInterface>;
  options?: Array<OptionsInterface>;
}
