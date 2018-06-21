import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import env from 'dotenv';

Enzyme.configure({
  adapter: new Adapter()
});

env.config({ path: '.env.test' });
