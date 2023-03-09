import OptionsInterface from './OptionsInterface';

export default interface CommandInterface {
  name: String;
  description: String;
  options?: Array<OptionsInterface>;
}
